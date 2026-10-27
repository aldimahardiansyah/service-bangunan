<script lang="ts">
	import { ArrowLeft, ArrowRight, CheckCircle2, MapPin } from "lucide-svelte";
	import IkonWhatsApp from "$lib/components/IkonWhatsApp.svelte";
	import LogoKlien from "$lib/components/LogoKlien.svelte";
	import { layananList } from "$lib/data/layanan";
	import { galleries } from "$lib/data/galleries";
	import { waLink } from "$lib/data/kontak";
	import { page } from "$app/state";

	const SITE = "https://www.servicebangunan.id";

	function fotoLayanan(kategori?: string) {
		if (!kategori) return [];
		return galleries.filter((g) => g.category === kategori).slice(0, 3);
	}

	function pesanLayanan(nama: string) {
		return `Halo Service Bangunan ID! 👋\nSaya menemukan website Anda dan ingin menanyakan layanan ${nama}. Boleh dibantu?`;
	}

	const skema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Layanan Service Bangunan ID",
		itemListElement: layananList.map((l, i) => ({
			"@type": "ListItem",
			position: i + 1,
			item: {
				"@type": "Service",
				name: l.nama,
				description: l.ringkas,
				url: `${SITE}/layanan#${l.slug}`,
				provider: { "@id": `${SITE}/#organization` },
				areaServed: { "@type": "Country", name: "Indonesia" },
			},
		})),
	};
</script>

<svelte:head>
	<title
		>Jasa Penangkal Petir, IPAL, Genset & Perawatan Gedung | Service Bangunan ID</title
	>
	<meta
		name="description"
		content="Jasa pasang penangkal petir, kontraktor IPAL dan STP, service genset dan panel listrik, pembersihan kaca gedung, perawatan taman, dan pemeliharaan gedung. Jabodetabek dan seluruh Indonesia."
	/>
	<link rel="canonical" href="https://www.servicebangunan.id/layanan" />
	{@html `<script type="application/ld+json">${JSON.stringify(skema)}</script>`}
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
		<div class="mb-8">
			<a
				href="/"
				class="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors font-medium"
			>
				<ArrowLeft size={20} />
				Kembali ke Beranda
			</a>
		</div>
		<h1 class="text-4xl md:text-6xl font-bold mb-6">
			Layanan <span class="text-yellow-400">Kami</span>
		</h1>
		<p class="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
			Lingkup pekerjaan yang kami tangani untuk gedung komersial, perkantoran,
			apartemen, dan kawasan industri.
		</p>
		<p
			class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/60 border border-blue-700 text-blue-100 text-sm font-semibold"
		>
			<MapPin size={16} class="shrink-0" />
			Jabodetabek & Seluruh Indonesia
		</p>
	</div>
</div>

<!-- Daftar isi -->
<section class="bg-white border-b border-slate-200 py-8">
	<div class="container">
		<ul class="flex flex-wrap gap-2">
			{#each layananList as l (l.slug)}
				<li>
					<a
						href="#{l.slug}"
						class="inline-block px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-sm font-semibold transition-colors"
						>{l.nama}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Logo klien -->
<section class="py-12 md:py-16 bg-white border-b border-slate-200">
	<div class="container">
		<LogoKlien judul="Sudah dipercaya mengerjakan proyek di" />
	</div>
</section>

<!-- Daftar layanan -->
<section class="py-16 md:py-20 bg-slate-50">
	<div class="container flex flex-col gap-10">
		{#each layananList as l (l.slug)}
			{@const Icon = l.icon}
			{@const foto = fotoLayanan(l.galeri)}
			<article
				id={l.slug}
				class="bg-white rounded-3xl border border-slate-200 p-7 md:p-10 scroll-mt-24"
			>
				<div class="flex items-start gap-5 mb-6">
					<div
						class="w-14 h-14 shrink-0 rounded-2xl bg-yellow-400 flex items-center justify-center text-slate-900"
					>
						<Icon size={28} strokeWidth={1.75} />
					</div>
					<div>
						<h2
							class="text-xl md:text-3xl font-bold text-slate-900 leading-snug"
						>
							{l.judul ?? l.nama}
						</h2>
						<p class="text-slate-500 mt-1">{l.ringkas}</p>
					</div>
				</div>

				<div class="grid lg:grid-cols-2 gap-8">
					<div>
						{#each l.uraian as paragraf}
							<p class="text-slate-600 leading-relaxed mb-4">{paragraf}</p>
						{/each}
						<a
							href={waLink(pesanLayanan(l.nama), page.url.pathname)}
							target="_blank"
							rel="noopener"
							data-lokasi="layanan_{l.slug}"
							class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
						>
							<IkonWhatsApp size={18} />
							Tanya {l.nama}
						</a>
					</div>

					<div>
						<h3
							class="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4"
						>
							Lingkup pekerjaan
						</h3>
						<ul class="space-y-2.5 mb-6">
							{#each l.lingkup as item}
								<li class="flex items-start gap-2.5">
									<CheckCircle2
										size={18}
										class="text-blue-600 shrink-0 mt-0.5"
									/>
									<span class="text-slate-700">{item}</span>
								</li>
							{/each}
						</ul>

						{#if foto.length}
							<div class="grid grid-cols-3 gap-2">
								{#each foto as f (f.id)}
									<img
										src={f.src}
										alt="{l.nama} di {f.company}, {f.location}"
										class="w-full aspect-[4/3] object-cover rounded-lg"
										loading="lazy"
										decoding="async"
									/>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</article>
		{/each}

		<!-- CTA -->
		<div
			class="bg-blue-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
		>
			<div
				class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"
			></div>
			<div class="relative z-10">
				<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
					Tidak menemukan pekerjaan yang Anda cari?
				</h2>
				<p class="text-blue-200 mb-8 max-w-xl mx-auto">
					Ceritakan kebutuhan gedung Anda. Kami bantu tentukan lingkup
					pekerjaan dan estimasi biayanya.
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
