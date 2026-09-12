<script lang="ts">
	import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-svelte";
	import { formatTanggal } from "$lib/data/artikel";

	let { data } = $props();

	// $derived agar isi ikut berubah saat pindah antar artikel tanpa reload.
	let artikel = $derived(data.artikel);
	let terkait = $derived(data.terkait);

	const SITE = "https://www.servicebangunan.id";
	let url = $derived(`${SITE}/artikel/${artikel.slug}`);

	let schema = $derived({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				headline: artikel.title,
				description: artikel.description,
				image: `${SITE}${artikel.cover}`,
				datePublished: artikel.date,
				dateModified: artikel.date,
				articleSection: artikel.category,
				inLanguage: "id-ID",
				mainEntityOfPage: { "@type": "WebPage", "@id": url },
				author: { "@type": "Organization", name: "Service Bangunan ID", url: SITE },
				publisher: {
					"@type": "Organization",
					name: "Service Bangunan ID",
					logo: { "@type": "ImageObject", url: `${SITE}/images/logo.webp` },
				},
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Beranda", item: SITE },
					{ "@type": "ListItem", position: 2, name: "Artikel", item: `${SITE}/artikel` },
					{ "@type": "ListItem", position: 3, name: artikel.title, item: url },
				],
			},
		],
	});
</script>

<svelte:head>
	<title>{artikel.seoTitle}</title>
	<meta name="description" content={artikel.description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content="article" />
	<meta property="og:title" content={artikel.seoTitle} />
	<meta property="og:description" content={artikel.description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={`${SITE}${artikel.cover}`} />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content="Service Bangunan ID" />
	<meta property="article:published_time" content={artikel.date} />
	<meta property="article:section" content={artikel.category} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={artikel.seoTitle} />
	<meta name="twitter:description" content={artikel.description} />
	<meta name="twitter:image" content={`${SITE}${artikel.cover}`} />

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<!-- Header -->
<div class="bg-blue-900 pt-32 pb-16 text-white relative overflow-hidden">
	<div
		class="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
	></div>

	<div class="container relative z-10 max-w-3xl">
		<div class="mb-8">
			<a
				href="/artikel"
				class="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors font-medium"
			>
				<ArrowLeft size={20} />
				Semua Artikel
			</a>
		</div>
		<span
			class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 text-blue-200 border border-blue-700 text-sm font-semibold mb-6"
		>
			<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
			{artikel.category}
		</span>
		<h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
			{artikel.title}
		</h1>
		<div class="flex flex-wrap items-center gap-5 text-blue-200 text-sm">
			<span class="inline-flex items-center gap-2">
				<Calendar size={16} />
				{formatTanggal(artikel.date)}
			</span>
			<span class="inline-flex items-center gap-2">
				<Clock size={16} />
				{artikel.readingMinutes} menit baca
			</span>
		</div>
	</div>
</div>

<section class="py-16 bg-slate-50 relative z-20">
	<div class="container max-w-3xl">
		<figure class="mb-12">
			<img
				src={artikel.cover}
				alt={artikel.coverAlt}
				class="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg"
				fetchpriority="high"
			/>
			{#if artikel.coverCredit}
				<figcaption class="mt-3 text-xs text-slate-400 text-center">
					Foto: {artikel.coverCredit}
				</figcaption>
			{/if}
		</figure>

		<div
			class="prose prose-slate max-w-none
				prose-headings:font-bold prose-headings:text-slate-900
				prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-14 prose-h2:mb-5
				prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-10 prose-h3:mb-3
				prose-p:text-slate-600 prose-p:leading-relaxed
				prose-strong:text-slate-900
				prose-li:text-slate-600 prose-li:marker:text-yellow-500
				prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
		>
			{@html artikel.html}
		</div>

		<!-- CTA -->
		<div
			class="mt-16 bg-blue-900 rounded-3xl p-8 md:p-10 relative overflow-hidden"
		>
			<div
				class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"
			></div>
			<div class="relative z-10">
				<h2 class="text-2xl font-bold text-white mb-3">
					Diskusikan kebutuhan fasilitas gedung Anda
				</h2>
				<p class="text-blue-200 mb-7">
					Kami mulai dari assessment kondisi aktual aset, lalu menyusun
					lingkup pekerjaan dan penawaran yang sesuai.
				</p>
				<a
					href="/#kontak"
					class="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-7 py-3.5 rounded-xl font-bold transition-colors"
				>
					Konsultasi Gratis <ArrowRight size={18} />
				</a>
			</div>
		</div>

		{#if terkait.length > 0}
			<div class="mt-16">
				<h2 class="text-2xl font-bold text-slate-900 mb-8">Baca Juga</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{#each terkait as item (item.slug)}
						<a
							href="/artikel/{item.slug}"
							class="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
						>
							<span class="text-xs font-semibold text-blue-700"
								>{item.category}</span
							>
							<h3
								class="font-bold text-slate-900 mt-2 mb-2 leading-snug group-hover:text-blue-600 transition-colors"
							>
								{item.title}
							</h3>
							<p class="text-sm text-slate-500 line-clamp-2">
								{item.excerpt}
							</p>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
