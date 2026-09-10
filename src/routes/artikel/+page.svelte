<script lang="ts">
	import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-svelte";
	import {
		artikelList,
		kategoriList,
		formatTanggal,
	} from "$lib/data/artikel";

	const PER_PAGE = 9;

	let activeCategory = $state("Semua");
	let page = $state(1);

	let filtered = $derived(
		activeCategory === "Semua"
			? artikelList
			: artikelList.filter((a) => a.category === activeCategory),
	);
	let totalPages = $derived(Math.max(1, Math.ceil(filtered.length / PER_PAGE)));
	let visible = $derived(filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE));

	function pilihKategori(kategori: string) {
		activeCategory = kategori;
		page = 1;
	}
</script>

<svelte:head>
	<title>Artikel & Wawasan Facility Management | Service Bangunan ID</title>
	<meta
		name="description"
		content="Kumpulan artikel dan panduan seputar facility management, maintenance gedung, dan pengelolaan aset bangunan dari Service Bangunan ID."
	/>
	<link rel="canonical" href="https://www.servicebangunan.id/artikel" />
</svelte:head>

<!-- Header -->
<div class="bg-blue-900 pt-32 pb-20 text-white relative overflow-hidden">
	<div
		class="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
	></div>

	<div class="container relative z-10">
		<a
			href="/"
			class="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 font-medium"
		>
			<ArrowLeft size={20} />
			Kembali ke Beranda
		</a>
		<h1 class="text-4xl md:text-6xl font-bold mb-6">
			Artikel & <span class="text-yellow-400">Wawasan</span>
		</h1>
		<p class="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
			Panduan praktis seputar facility management, maintenance gedung, dan
			pengelolaan aset bangunan dari pengalaman lapangan tim kami.
		</p>
	</div>
</div>

<section class="py-16 bg-slate-50 min-h-screen relative z-20">
	<div class="container">
		{#if kategoriList.length > 2}
			<div class="flex flex-wrap items-center gap-3 mt-10 mb-10">
				{#each kategoriList as kategori}
					<button
						class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 {activeCategory ===
						kategori
							? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
							: 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'}"
						onclick={() => pilihKategori(kategori)}
					>
						{kategori}
					</button>
				{/each}
			</div>
		{/if}

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
			{#each visible as artikel (artikel.slug)}
				<article
					class="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
				>
					<a
						href="/artikel/{artikel.slug}"
						class="block aspect-[16/9] overflow-hidden"
					>
						<img
							src={artikel.cover}
							alt={artikel.coverAlt}
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							loading="lazy"
							decoding="async"
						/>
					</a>
					<div class="p-6 flex flex-col grow">
						<span
							class="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4"
						>
							<span class="w-1.5 h-1.5 rounded-full bg-yellow-500"
							></span>
							{artikel.category}
						</span>
						<h2 class="text-xl font-bold text-slate-900 mb-3 leading-snug">
							<a
								href="/artikel/{artikel.slug}"
								class="hover:text-blue-600 transition-colors"
								>{artikel.title}</a
							>
						</h2>
						<p class="text-slate-600 text-sm leading-relaxed mb-6 grow">
							{artikel.excerpt}
						</p>
						<div
							class="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100"
						>
							<span class="inline-flex items-center gap-1.5">
								<Calendar size={14} />
								{formatTanggal(artikel.date)}
							</span>
							<span class="inline-flex items-center gap-1.5">
								<Clock size={14} />
								{artikel.readingMinutes} menit baca
							</span>
						</div>
					</div>
				</article>
			{/each}

			{#if filtered.length === 0}
				<div class="col-span-full py-20 text-center">
					<p class="text-slate-500 text-lg">
						Belum ada artikel untuk kategori ini.
					</p>
				</div>
			{/if}
		</div>

		{#if totalPages > 1}
			<div class="flex items-center justify-center gap-2 pb-8">
				<button
					class="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors"
					disabled={page === 1}
					onclick={() => (page -= 1)}
				>
					Sebelumnya
				</button>
				{#each Array(totalPages) as _, i}
					<button
						class="w-10 h-10 rounded-lg font-semibold transition-colors {page ===
						i + 1
							? 'bg-blue-600 text-white'
							: 'bg-white text-slate-600 border border-slate-200 hover:bg-blue-50'}"
						onclick={() => (page = i + 1)}
					>
						{i + 1}
					</button>
				{/each}
				<button
					class="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors"
					disabled={page === totalPages}
					onclick={() => (page += 1)}
				>
					Berikutnya
				</button>
			</div>
		{/if}

		<!-- CTA -->
		<div
			class="bg-blue-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
		>
			<div
				class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"
			></div>
			<div class="relative z-10">
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
					Butuh konsultasi pengelolaan fasilitas?
				</h2>
				<p class="text-blue-200 mb-8 max-w-xl mx-auto">
					Tim kami siap membantu melakukan assessment dan menyusun
					lingkup pekerjaan sesuai kondisi gedung Anda.
				</p>
				<a
					href="/#kontak"
					class="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold transition-colors"
				>
					Konsultasi Gratis <ArrowRight size={18} />
				</a>
			</div>
		</div>
	</div>
</section>
