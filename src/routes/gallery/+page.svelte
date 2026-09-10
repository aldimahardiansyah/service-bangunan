<script lang="ts">
	import { ArrowLeft, ZoomIn, Briefcase, ChevronRight } from "lucide-svelte";

	let activeCategory = $state("Semua");

	import { galleries } from "$lib/data/galleries";

	const categories = [
		"Semua",
		"Plumbing PPR",
		"Purifikasi Trafo",
		"Pipa Hydrant",
		"Diesel Maintenance",
		"Pengecatan Gedung",
		"Architectural Works",
		"Construction & MEP",
		"Project Takeover",
		"Lighting & Plafon",
		"Electrical Panel",
		"TPS dan Limbah Sampah",
	];

	let filteredGalleries = $derived(
		activeCategory === "Semua"
			? galleries
			: galleries.filter((g) => g.category === activeCategory),
	);
</script>

<svelte:head>
	<title>Galeri Proyek | Service Bangunan ID</title>
	<meta
		name="description"
		content="Galeri lengkap portofolio proyek dan layanan Integrated Facility Management dari Service Bangunan ID."
	/>
	<link rel="canonical" href="https://www.servicebangunan.id/gallery" />
</svelte:head>

<!-- Header -->
<div class="bg-blue-900 pt-32 pb-20 text-white relative overflow-hidden">
	<!-- Decorative Background Element -->
	<div
		class="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
	></div>

	<div class="container relative z-10">
		<a
			href="/#portofolio"
			class="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 font-medium"
		>
			<ArrowLeft size={20} />
			Kembali ke Beranda
		</a>
		<h1 class="text-4xl md:text-6xl font-bold mb-6">
			Galeri <span class="text-yellow-400">Proyek IFM</span>
		</h1>
		<p class="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
			Jelajahi bukti nyata dari kualitas layanan dan dedikasi kami dalam
			mengelola serta mengoptimalkan aset bangunan klien di berbagai
			sektor.
		</p>
	</div>
</div>

<section class="py-16 bg-slate-50 min-h-screen relative z-20">
	<div class="container">
		<!-- Filters -->
		<div class="flex flex-wrap items-center gap-3 mt-10 mb-10">
			{#each categories as category}
				<button
					class="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 {activeCategory ===
					category
						? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
						: 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'}"
					onclick={() => (activeCategory = category)}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Grid with Animation Container -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each filteredGalleries as item (item.id)}
				<div
					class="group relative rounded-2xl overflow-hidden aspect-[4/3]"
				>
					<img
						src={item.src}
						alt={item.title}
						class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
					>
						<h3
							class="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
						>
							{item.title}
						</h3>
						<p
							class="text-yellow-400 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
						>
							{item.category}
						</p>
					</div>
				</div>
			{/each}

			{#if filteredGalleries.length === 0}
				<div class="col-span-full py-20 text-center">
					<p class="text-slate-500 text-lg">
						Tidak ada gambar untuk kategori ini.
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
