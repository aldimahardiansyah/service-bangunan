<script lang="ts">
	import { Menu, X, Phone } from 'lucide-svelte';
	
	let isMenuOpen = $state(false);

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav class="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
	<div class="container py-4 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 group">
			<div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
				SB
			</div>
			<div class="flex flex-col">
				<span class="font-bold text-xl leading-tight text-slate-800">SERVICE</span>
				<span class="text-xs font-semibold text-blue-600 tracking-wider">BANGUNAN ID</span>
			</div>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-8">
			<a href="#beranda" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Beranda</a>
			<a href="#tentang" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tentang Kami</a>
			<a href="#layanan" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Layanan</a>
			<a href="#cara-kerja" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Cara Kerja</a>
			<a href="#portofolio" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Portofolio</a>
		</div>

		<!-- CTA Desktop -->
		<div class="hidden md:flex">
			<a href="#kontak" class="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20">
				<Phone size={16} />
				Hubungi Kami
			</a>
		</div>

		<!-- Mobile Menu Toggle -->
		<button class="md:hidden text-slate-600 hover:text-blue-600 transition-colors p-2" aria-label="Toggle Menu" onclick={toggleMenu}>
			{#if isMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile Nav -->
	{#if isMenuOpen}
		<div class="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 flex flex-col px-6 gap-4 animate-in slide-in-from-top-4 fade-in duration-200">
			<a href="#beranda" class="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onclick={toggleMenu}>Beranda</a>
			<a href="#tentang" class="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onclick={toggleMenu}>Tentang Kami</a>
			<a href="#layanan" class="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onclick={toggleMenu}>Layanan</a>
			<a href="#cara-kerja" class="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onclick={toggleMenu}>Cara Kerja</a>
			<a href="#portofolio" class="text-base font-medium text-slate-700 py-2 border-b border-slate-50" onclick={toggleMenu}>Portofolio</a>
			<a href="#kontak" class="mt-2 bg-yellow-500 text-slate-900 px-5 py-3 rounded-xl font-semibold flex justify-center items-center gap-2" onclick={toggleMenu}>
				<Phone size={18} />
				Hubungi Kami
			</a>
		</div>
	{/if}
</nav>
