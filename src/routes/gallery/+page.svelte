<script lang="ts">
	import { ArrowLeft, ChevronDown, MapPin } from "lucide-svelte";

	let activeCategory = $state("Semua");

	import { galleries, kategoriGaleri } from "$lib/data/galleries";

	const categories = kategoriGaleri;

	// Jumlah foto per kategori, supaya pengunjung tahu isinya sebelum memilih.
	const jumlah: Record<string, number> = categories.reduce(
		(acc, k) => {
			acc[k] =
				k === "Semua"
					? galleries.length
					: galleries.filter((g) => g.category === k).length;
			return acc;
		},
		{} as Record<string, number>,
	);

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
		<!-- Filter kategori -->
		<div class="mt-10 mb-10">
			<!-- Ponsel: satu pemilih, bukan 14 pil yang menumpuk ke bawah -->
			<div class="md:hidden">
				<label
					for="filter-kategori"
					class="block text-sm font-semibold text-slate-700 mb-2"
				>
					Kategori proyek
				</label>
				<div class="relative">
					<select
						id="filter-kategori"
						bind:value={activeCategory}
						class="w-full appearance-none bg-white border border-slate-300 rounded-xl py-3 pl-4 pr-11 text-base font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
					>
						{#each categories as category}
							<option value={category}
								>{category} ({jumlah[category]})</option
							>
						{/each}
					</select>
					<ChevronDown
						size={20}
						class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
					/>
				</div>
			</div>

			<!-- Layar lebar: pil tetap, cukup ruang untuk semuanya -->
			<div class="hidden md:flex flex-wrap items-center gap-2.5">
				{#each categories as category}
					<button
						class="px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 {activeCategory ===
						category
							? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
							: 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'}"
						onclick={() => (activeCategory = category)}
					>
						{category}
						<span
							class="ml-1 tabular-nums {activeCategory === category
								? 'text-blue-200'
								: 'text-slate-400'}">{jumlah[category]}</span
						>
					</button>
				{/each}
			</div>

			<p class="mt-4 text-sm text-slate-500" aria-live="polite">
				Menampilkan {filteredGalleries.length} foto{activeCategory === "Semua"
					? ""
					: ` untuk ${activeCategory}`}
			</p>
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
						class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
					>
						<h3
							class="text-xl font-bold text-white mb-1 transform translate-y-0 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:group-hover:translate-y-0 transition-transform duration-300"
						>
							{item.company}
						</h3>
						<p
							class="text-yellow-400 font-medium text-sm transform translate-y-0 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:group-hover:translate-y-0 transition-transform duration-300 delay-75"
						>
							{item.category}
						</p>
						<p
							class="text-blue-100 text-sm mt-1 flex items-center gap-1.5 transform translate-y-0 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:group-hover:translate-y-0 transition-transform duration-300 delay-100"
						>
							<MapPin size={14} class="shrink-0" />
							{item.location}
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
