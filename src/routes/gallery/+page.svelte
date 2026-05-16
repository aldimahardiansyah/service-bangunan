<script lang="ts">
	import { ArrowLeft, ZoomIn, Briefcase, ChevronRight } from "lucide-svelte";

	let activeCategory = $state("Semua");

	const categories = [
		"Semua",
		"Hard Services",
		"Soft Services",
		"Specialized",
		"Project",
	];

	const galleries = [
		{ id: 1, src: "/images/gallery/gallery1.jpeg", title: "Fasilitas Proyek 1", category: "Hard Services" },
		{ id: 2, src: "/images/gallery/gallery2.jpeg", title: "Fasilitas Proyek 2", category: "Soft Services" },
		{ id: 3, src: "/images/gallery/gallery3.jpeg", title: "Fasilitas Proyek 3", category: "Specialized" },
		{ id: 4, src: "/images/gallery/gallery4.jpeg", title: "Fasilitas Proyek 4", category: "Project" },
		{ id: 5, src: "/images/gallery/gallery5.jpeg", title: "Fasilitas Proyek 5", category: "Hard Services" },
		{ id: 6, src: "/images/gallery/gallery6.jpeg", title: "Fasilitas Proyek 6", category: "Soft Services" },
		{ id: 7, src: "/images/gallery/gallery7.jpeg", title: "Fasilitas Proyek 7", category: "Specialized" },
		{ id: 8, src: "/images/gallery/gallery8.jpeg", title: "Fasilitas Proyek 8", category: "Project" },
		{ id: 9, src: "/images/gallery/gallery9.jpeg", title: "Fasilitas Proyek 9", category: "Hard Services" },
		{ id: 10, src: "/images/gallery/gallery10.jpeg", title: "Fasilitas Proyek 10", category: "Soft Services" },
		{ id: 11, src: "/images/gallery/gallery11.jpeg", title: "Fasilitas Proyek 11", category: "Specialized" },
		{ id: 12, src: "/images/gallery/gallery12.jpeg", title: "Fasilitas Proyek 12", category: "Project" },
		{ id: 13, src: "/images/gallery/gallery13.jpeg", title: "Fasilitas Proyek 13", category: "Hard Services" },
		{ id: 14, src: "/images/gallery/gallery14.jpeg", title: "Fasilitas Proyek 14", category: "Soft Services" },
		{ id: 15, src: "/images/gallery/gallery15.jpeg", title: "Fasilitas Proyek 15", category: "Specialized" },
		{ id: 16, src: "/images/gallery/gallery16.jpeg", title: "Fasilitas Proyek 16", category: "Project" },
		{ id: 17, src: "/images/gallery/gallery17.jpeg", title: "Fasilitas Proyek 17", category: "Hard Services" },
		{ id: 18, src: "/images/gallery/gallery18.jpeg", title: "Fasilitas Proyek 18", category: "Soft Services" },
		{ id: 19, src: "/images/gallery/gallery19.jpeg", title: "Fasilitas Proyek 19", category: "Specialized" },
		{ id: 20, src: "/images/gallery/gallery20.jpeg", title: "Fasilitas Proyek 20", category: "Project" },
		{ id: 21, src: "/images/gallery/gallery21.jpeg", title: "Fasilitas Proyek 21", category: "Hard Services" }
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
					class="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl shadow-slate-200/50 bg-white"
				>
					<img
						src={item.src}
						alt={item.title}
						class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
						loading="lazy"
					/>

					<!-- Hover Overlay Layer -->
					<div
						class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-500 flex items-center justify-center"
					></div>

					<!-- Bottom Text Layer -->
					<div
						class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"
					>
						<div
							class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
						>
							<div
								class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-blue-900 text-xs font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"
							>
								<Briefcase size={12} />
								{item.category}
							</div>
							<h3
								class="text-xl font-bold text-white flex items-center justify-between"
							>
								{item.title}
								<ChevronRight
									size={20}
									class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 text-yellow-400"
								/>
							</h3>
						</div>
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
