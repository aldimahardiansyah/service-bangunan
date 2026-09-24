<script lang="ts">
	import {
		ArrowRight,
		CheckCircle2,
		TrendingUp,
		Sparkles,
		Wrench,
		Zap,
		Flame,
		Droplets,
		Gauge,
		Package,
		ClipboardList,
		Lightbulb,
		Hammer,
		Shield,
		Phone,
		Mail,
		MapPin,
	} from "lucide-svelte";

	const coreServices = [
		{
			title: "MEP & Electrical",
			icon: Zap,
			desc: "Electrical, mechanical, HVAC, plumbing dan sistem utilitas bangunan.",
		},
		{
			title: "Fire Protection",
			icon: Flame,
			desc: "Hydrant, sprinkler, fire alarm dan sistem keselamatan bangunan.",
		},
		{
			title: "STP & Water Treatment",
			icon: Droplets,
			desc: "STP, wastewater treatment, water treatment dan optimasi sistem pengolahan air.",
		},
		{
			title: "Building Maintenance",
			icon: Wrench,
			desc: "Preventive maintenance, corrective maintenance dan perbaikan fasilitas bangunan.",
		},
		{
			title: "Renovation & Retrofitting",
			icon: Hammer,
			desc: "Renovasi, upgrading dan modifikasi sistem untuk meningkatkan fungsi fasilitas existing.",
		},
		{
			title: "Energy & Efficiency",
			icon: Gauge,
			desc: "Optimasi peralatan, efisiensi energi dan solusi penghematan operasional.",
		},
		{
			title: "Procurement & Supply",
			icon: Package,
			desc: "Pengadaan equipment, material dan spare parts untuk kebutuhan engineering.",
		},
		{
			title: "Facility Services",
			icon: Sparkles,
			desc: "Cleaning, landscaping, waste management dan layanan pendukung operasional bangunan.",
		},
	];

	const workingPlan = [
		{
			step: "01",
			title: "Site Assessment & Data Collection",
			description:
				"identifikasi risiko, pengumpulan data teknis, serta evaluasi kebutuhan spesifik klien sebagai dasar perencanaan yang akurat",
			icon: ClipboardList,
		},
		{
			step: "02",
			title: "Planning & Engineering Strategy",
			description:
				"menyusun rencana kerja yang terukur dan efisien, termasuk metode pelaksanaan, kebutuhan tenaga kerja, material, serta jadwal pekerjaan",
			icon: Lightbulb,
		},
		{
			step: "03",
			title: "Execution",
			description:
				"Tim teknis kami melaksanakan pekerjaan sesuai standar operasional dengan pengawasan ketat",
			icon: Hammer,
		},
		{
			step: "04",
			title: "HSE & Quality Control",
			description:
				"Standar wajib Health, Safety, and Environment di setiap pekerjaan",
			icon: Shield,
		},
	];

	import { galleries } from "$lib/data/galleries";
	import { waLink, WA_SAPAAN_UMUM, WA_DISPLAY } from "$lib/data/kontak";
	import { page } from "$app/state";
	import IkonWhatsApp from "$lib/components/IkonWhatsApp.svelte";
	import { artikelList, formatTanggal } from "$lib/data/artikel";

	const SITE = "https://www.servicebangunan.id";
	const artikelTerbaru = artikelList.slice(0, 3);

	const skemaPerusahaan = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": `${SITE}/#organization`,
				name: "Service Bangunan ID",
				legalName: "PT Puri Dewi Agung",
				url: SITE,
				logo: { "@type": "ImageObject", url: `${SITE}/icon-192.png`, width: 192, height: 192 },
				image: `${SITE}/images/hero-image.webp`,
				description:
					"Perusahaan Integrated Facility Management (IFM) yang menangani engineering, maintenance, cleaning, utilitas, hingga project dan improvement untuk gedung komersial dan fasilitas industri.",
				email: "servicebangunan@gmail.com",
				telephone: "+6285800602797",
				areaServed: { "@type": "Country", name: "Indonesia" },
				address: [
					{
						"@type": "PostalAddress",
						name: "Office & Workshop",
						streetAddress: "Jl. H.Gadung 2A No 99, Pondok Ranji, Ciputat",
						addressLocality: "Tangerang Selatan",
						postalCode: "15412",
						addressRegion: "Banten",
						addressCountry: "ID",
					},
					{
						"@type": "PostalAddress",
						name: "Tech Office Hub",
						streetAddress: "LTC GF 1 Blok C27 no 1, Jl. Hayam Wuruk No 127",
						addressLocality: "Jakarta Barat",
						postalCode: "11180",
						addressRegion: "DKI Jakarta",
						addressCountry: "ID",
					},
				],
				contactPoint: {
					"@type": "ContactPoint",
					contactType: "customer service",
					telephone: "+6285800602797",
					email: "servicebangunan@gmail.com",
					availableLanguage: ["id", "en"],
				},
			},
			{
				"@type": "WebSite",
				"@id": `${SITE}/#website`,
				url: SITE,
				name: "Service Bangunan ID",
				inLanguage: "id-ID",
				publisher: { "@id": `${SITE}/#organization` },
			},
		],
	};

	const portfolios: typeof galleries = [];
	const seenCategories = new Set();
	for (const item of galleries) {
		if (!seenCategories.has(item.category) && portfolios.length < 6) {
			seenCategories.add(item.category);
			portfolios.push(item);
		}
	}

</script>

<svelte:head>
	<title>Service Bangunan ID | Solusi Facility Management & Maintenance Gedung Terpercaya</title>
	<meta
		name="description"
		content="Layanan terpadu facility management, perawatan rutin, dan pemeliharaan aset bangunan komersial dengan standar keselamatan bersama tim profesional."
	/>
	<meta
		name="keywords"
		content="konstruksi, renovasi, perbaikan rumah, desain interior, jasa bangun rumah, service bangunan"
	/>
	<link rel="canonical" href="https://www.servicebangunan.id/" />

	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Service Bangunan ID | Solusi Facility Management & Maintenance Gedung Terpercaya"
	/>
	<meta
		property="og:description"
		content="Layanan terpadu facility management, perawatan rutin, dan pemeliharaan aset bangunan komersial dengan standar keselamatan bersama tim profesional."
	/>
	<meta property="og:url" content="https://www.servicebangunan.id/" />
	<meta
		property="og:image"
		content="https://www.servicebangunan.id/images/hero-image.webp"
	/>
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content="Service Bangunan ID" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Service Bangunan ID | Solusi Facility Management & Maintenance Gedung Terpercaya"
	/>
	<meta
		name="twitter:description"
		content="Layanan terpadu facility management, perawatan rutin, dan pemeliharaan aset bangunan komersial dengan standar keselamatan bersama tim profesional."
	/>
	<meta
		name="twitter:image"
		content="https://www.servicebangunan.id/images/hero-image.webp"
	/>

	{@html `<script type="application/ld+json">${JSON.stringify(skemaPerusahaan)}</script>`}
	<link
		rel="preload"
		as="image"
		href="/images/hero-image.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

<!-- Hero Section -->
<section
	id="beranda"
	class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]"
>
	<!-- Background Image & Overlay -->
	<div class="absolute inset-0 z-0">
		<img
			src="/images/hero-image.webp"
			alt="Construction Hero"
			class="w-full h-full object-cover"
			width="1600"
			height="900"
			fetchpriority="high"
			decoding="async"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-transparent"
		></div>
	</div>

	<div class="container relative z-10">
		<div class="max-w-3xl">
			<div
				class="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm rounded-full text-yellow-400 font-semibold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
			>
				Building Mechanical, Electrical, Plumbing & Civil Specialist
			</div>
			<div
				class="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm rounded-full text-yellow-400 font-semibold text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
			>
				PT PURI DEWI AGUNG
			</div>
			<h1
				class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150"
			>
				Solusi Perawatan & Optimalisasi Aset <span
					class="text-yellow-400">Menyeluruh</span
				>
			</h1>
			<p
				class="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300"
			>
				Memastikan setiap aset bangunan Anda beroperasi secara optimal,
				efisien, dan sesuai standar keselamatan bersama Service Bangunan
				ID.
			</p>

			<div
				class="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500"
			>
				<a
					href="#kontak"
					class="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-yellow-500/20"
				>
					Konsultasi Gratis <ArrowRight size={20} />
				</a>
				<a
					href="#layanan"
					class="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all hover:border-white/40"
				>
					Pelajari Layanan Kami
				</a>
			</div>
		</div>
	</div>

	<!-- Decorative bottom shape -->
	<div
		class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10"
	>
		<svg
			class="relative block w-full h-[50px] md:h-[100px]"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M0,80
		C150,120 350,0 600,40
		C850,80 1050,140 1200,60
		L1200,120
		L0,120
		Z"
				class="fill-slate-50"
			/>
		</svg>
	</div>
</section>

<!-- Company Overview Section -->
<section id="tentang" class="py-20 md:py-28 bg-slate-50">
	<div class="container">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
			<div class="relative order-2 lg:order-1 z-0">
				<div
					class="hidden lg:block absolute -inset-4 bg-yellow-400 rounded-3xl transform rotate-3 scale-105 opacity-20 -z-10"
				></div>
				<img
					src="/images/overview.webp"
					alt="Company Overview"
					class="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
					width="1000"
					height="1000"
					loading="lazy"
					decoding="async"
				/>
				<div
					class="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block"
				>
					<div class="flex items-center gap-4">
						<CheckCircle2 size={40} class="text-yellow-400" />
						<div>
							<div class="text-2xl font-bold">Terpercaya</div>
							<div class="text-blue-200">
								Integrated Facility Management
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="order-1 lg:order-2">
				<div
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"
				>
					<span class="w-2 h-2 rounded-full bg-blue-600"></span> Company
					Overview
				</div>
				<h2
					class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight"
				>
					Mengenal Lebih Dekat <span class="text-blue-600"
						>Service Bangunan ID</span
					>
				</h2>
				<p class="text-slate-600 mb-8 leading-relaxed text-lg">
					Service Bangunan ID adalah perusahaan yang bergerak di
					bidang Integrated Facility Management (IFM), menyediakan
					layanan perawatan, dan optimalisasi aset bangunan secara
					menyeluruh.
				</p>

				<h3 class="text-xl font-bold text-slate-800 mb-4">
					Kami melayani berbagai sektor:
				</h3>
				<ul class="space-y-4 mb-10 grid grid-cols-1 sm:grid-cols-2">
					<li class="flex items-start gap-3">
						<div class="mt-1 bg-yellow-100 p-1 rounded-full">
							<CheckCircle2 size={16} class="text-yellow-600" />
						</div>
						<span class="text-slate-700 font-medium"
							>Gedung perkantoran</span
						>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 bg-yellow-100 p-1 rounded-full">
							<CheckCircle2 size={16} class="text-yellow-600" />
						</div>
						<span class="text-slate-700 font-medium"
							>Pusat perbelanjaan (mall)</span
						>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 bg-yellow-100 p-1 rounded-full">
							<CheckCircle2 size={16} class="text-yellow-600" />
						</div>
						<span class="text-slate-700 font-medium"
							>Kawasan industri</span
						>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 bg-yellow-100 p-1 rounded-full">
							<CheckCircle2 size={16} class="text-yellow-600" />
						</div>
						<span class="text-slate-700 font-medium"
							>Rumah sakit & fasilitas publik</span
						>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 bg-yellow-100 p-1 rounded-full">
							<CheckCircle2 size={16} class="text-yellow-600" />
						</div>
						<span class="text-slate-700 font-medium"
							>Properti komersial, apartement, dll</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Vision & Mission -->
<section class="py-20 md:py-28 bg-white">
	<div class="container">
		<div class="text-center max-w-2xl mx-auto mb-16">
			<div
				class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"
			>
				<span class="w-2 h-2 rounded-full bg-blue-600"></span> Tujuan Kami
			</div>
			<h2 class="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
				Vision and Mission
			</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Vision -->
			<div
				class="bg-yellow-400 rounded-3xl p-10 shadow-xl shadow-yellow-500/20 text-slate-900 relative overflow-hidden group"
			>
				<div
					class="absolute -right-10 -top-10 text-yellow-300 opacity-50 group-hover:scale-110 transition-transform duration-500"
				>
					<Lightbulb size={160} />
				</div>
				<h3
					class="text-3xl font-bold mb-6 relative z-10 flex items-center gap-3"
				>
					<span class="w-8 h-1 bg-slate-900 block rounded-full"
					></span> Vision
				</h3>
				<p class="text-xl font-medium leading-relaxed relative z-10">
					Menjadi perusahaan Integrated Facility Management terpercaya
					di Indonesia yang memberikan solusi perawatan bangunan
					berbasis sistem dan teknologi.
				</p>
			</div>

			<!-- Mission -->
			<div
				class="bg-blue-600 rounded-3xl p-10 shadow-xl shadow-blue-900/20 text-white relative overflow-hidden group"
			>
				<div
					class="absolute -right-10 -bottom-10 text-blue-500 opacity-50 group-hover:scale-110 transition-transform duration-500"
				>
					<TrendingUp size={160} />
				</div>
				<h3
					class="text-3xl font-bold mb-6 relative z-10 flex items-center gap-3"
				>
					<span class="w-8 h-1 bg-yellow-400 block rounded-full"
					></span> Mission
				</h3>
				<ul class="space-y-4 relative z-10 text-lg">
					<li class="flex items-start gap-3">
						<div
							class="mt-1.5 min-w-[12px] w-3 h-3 rounded-full bg-yellow-400"
						></div>
						<span
							>Menyediakan layanan pemeliharaan yang terintegrasi
							dan profesional</span
						>
					</li>
					<li class="flex items-start gap-3">
						<div
							class="mt-1.5 min-w-[12px] w-3 h-3 rounded-full bg-yellow-400"
						></div>
						<span>Meningkatkan umur dan performa aset klien</span>
					</li>
					<li class="flex items-start gap-3">
						<div
							class="mt-1.5 min-w-[12px] w-3 h-3 rounded-full bg-yellow-400"
						></div>
						<span
							>Menjamin keselamatan kerja dan kepatuhan regulasi</span
						>
					</li>
					<li class="flex items-start gap-3">
						<div
							class="mt-1.5 min-w-[12px] w-3 h-3 rounded-full bg-yellow-400"
						></div>
						<span
							>Memberikan nilai tambah melalui efisiensi
							operasional</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Core Services Section -->
<section id="layanan" class="py-20 md:py-28 bg-slate-50 relative">
	<div class="container">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<div
				class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm mb-6"
			>
				<span class="w-2 h-2 rounded-full bg-yellow-500"></span> IFM Scope
			</div>
			<h2 class="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
				Our Services
			</h2>
			<p class="text-slate-600 text-lg">
				Solusi end-to-end terintegrasi untuk menjaga fungsi dan kualitas
				fasilitas bangunan Anda tetap optimal.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each coreServices as service}
				{@const Icon = service.icon}
				<div
					class="group bg-blue-700 rounded-[2rem] border-4 border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
				>
					<div
						class="bg-yellow-400 p-8 flex justify-center text-slate-900"
					>
						<Icon size={64} strokeWidth={1.5} />
					</div>
					<div class="p-8 flex-grow flex flex-col">
						<h3
							class="text-lg font-bold text-white mb-4 text-center leading-snug"
						>
							{service.title}
						</h3>
						<p
							class="text-blue-100 text-sm leading-relaxed text-center"
						>
							{service.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Working Plan Section -->
<section id="cara-kerja" class="py-20 md:py-28 bg-white">
	<div class="container">
		<div class="text-center max-w-2xl mx-auto mb-20">
			<div
				class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"
			>
				<span class="w-2 h-2 rounded-full bg-blue-600"></span> Tahapan Sistematis
			</div>
			<h2 class="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
				Our Working Plan
			</h2>
			<p class="text-slate-600 text-lg">
				Metode kerja profesional yang terstruktur untuk memastikan hasil
				yang memuaskan dan tepat waktu.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-x-12 gap-y-16">
			{#each workingPlan as plan, i}
				{@const Icon = plan.icon}
				<div
					class="flex flex-col sm:flex-row gap-6 items-start relative group"
				>
					<!-- Step Number Decor -->
					<div
						class="absolute -top-6 -left-4 text-7xl font-extrabold text-slate-50 z-0 select-none group-hover:text-blue-50 transition-colors duration-300"
					>
						{plan.step}
					</div>

					<div
						class="relative z-10 w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center text-blue-900 font-bold shrink-0 shadow-lg shadow-yellow-500/20"
					>
						<Icon size={36} />
					</div>
					<div class="relative z-10 pt-2">
						<div class="text-blue-600 font-bold mb-1">
							Tahap {plan.step}
						</div>
						<h3 class="text-2xl font-bold text-slate-800 mb-3">
							{plan.title}
						</h3>
						<p class="text-slate-600 leading-relaxed text-lg">
							{plan.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Portfolio Section -->
<section id="portofolio" class="py-20 md:py-28 bg-slate-900 text-white">
	<div class="container">
		<div
			class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
		>
			<div class="max-w-2xl">
				<div
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-800 font-semibold text-sm mb-6"
				>
					<span class="w-2 h-2 rounded-full bg-yellow-400"></span> Bukti
					Kerja Kami
				</div>
				<h2 class="text-3xl md:text-5xl font-bold mb-6">
					Galeri Proyek IFM
				</h2>
				<p class="text-blue-200 text-lg">
					Beberapa hasil implementasi layanan kami dalam
					mengoptimalkan berbagai aset dan fasilitas klien.
				</p>
			</div>
			<a
				href="/gallery"
				class="shrink-0 hidden md:inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold transition-colors"
			>
				Lihat Semua Proyek <ArrowRight size={18} />
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each portfolios as item}
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
		</div>

		<div class="mt-10 text-center md:hidden">
			<a
				href="/gallery"
				class="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold transition-colors"
			>
				Lihat Semua Proyek <ArrowRight size={18} />
			</a>
		</div>
	</div>
</section>

<!-- CTA / Contact Section -->
<!-- Artikel Terbaru -->
<section id="artikel" class="py-20 md:py-28 bg-white">
	<div class="container">
		<div
			class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
		>
			<div class="max-w-2xl">
				<div
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6"
				>
					<span class="w-2 h-2 rounded-full bg-yellow-400"></span> Wawasan
				</div>
				<h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
					Artikel Terbaru
				</h2>
				<p class="text-slate-600 text-lg">
					Panduan praktis seputar facility management, maintenance
					gedung, dan pengelolaan aset bangunan.
				</p>
			</div>
			<a
				href="/artikel"
				class="shrink-0 hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors"
			>
				Lihat Semua Artikel <ArrowRight size={18} />
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each artikelTerbaru as artikel (artikel.slug)}
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
						<h3 class="text-lg font-bold text-slate-900 mb-3 leading-snug">
							<a
								href="/artikel/{artikel.slug}"
								class="hover:text-blue-600 transition-colors"
								>{artikel.title}</a
							>
						</h3>
						<p class="text-slate-600 text-sm leading-relaxed mb-5 grow">
							{artikel.excerpt}
						</p>
						<span class="text-xs text-slate-500">
							{formatTanggal(artikel.date)} · {artikel.readingMinutes} menit
							baca
						</span>
					</div>
				</article>
			{/each}
		</div>

		<div class="mt-10 md:hidden">
			<a
				href="/artikel"
				class="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl font-bold transition-colors"
			>
				Lihat Semua Artikel <ArrowRight size={18} />
			</a>
		</div>
	</div>
</section>

<section id="kontak" class="py-20 md:py-28 bg-slate-50">
	<div class="container">
		<div
			class="bg-blue-600 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/20"
		>
			<!-- Decorative Circles -->
			<div
				class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/50 blur-3xl"
			></div>
			<div
				class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-400/20 blur-3xl"
			></div>

			<div class="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
				<div class="text-white">
					<div
						class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500 text-blue-50 font-semibold text-sm mb-6 border border-blue-400"
					>
						<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
						Get in Touch
					</div>
					<h2
						class="text-3xl md:text-5xl font-bold mb-6 leading-tight"
					>
						Siap Memulai Konsultasi?
					</h2>
					<p
						class="text-blue-100 text-lg mb-10 max-w-lg leading-relaxed"
					>
						Kami akan membantu memastikan setiap aset bangunan Anda
						beroperasi secara optimal, efisien, dan sesuai standar
						keselamatan. Hubungi kami untuk konsultasi.
					</p>

					<div class="space-y-6" data-lokasi="kontak">
						<div class="flex items-start gap-4">
							<div
								class="w-12 h-12 shrink-0 rounded-full bg-blue-500 flex items-center justify-center"
							>
								<Phone size={20} class="text-yellow-400" />
							</div>
							<div>
								<p
									class="text-blue-200 text-sm font-medium mb-1"
								>
									Mobile Number
								</p>
								<a
									href={waLink(WA_SAPAAN_UMUM, page.url.pathname)}
									target="_blank"
									rel="noopener"
									class="block text-xl font-bold text-white hover:text-yellow-400 transition-colors"
								>
									{WA_DISPLAY}
								</a>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div
								class="w-12 h-12 shrink-0 rounded-full bg-blue-500 flex items-center justify-center"
							>
								<Mail size={20} class="text-yellow-400" />
							</div>
							<div>
								<p
									class="text-blue-200 text-sm font-medium mb-1"
								>
									Email Address
								</p>
								<a
									href="mailto:servicebangunan@gmail.com"
									class="block text-lg font-bold text-white hover:text-yellow-400 transition-colors"
								>
									servicebangunan@gmail.com
								</a>
							</div>
						</div>

						<div
							class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-blue-500/50"
						>
							<div>
								<div class="flex items-center gap-2 mb-2">
									<MapPin size={16} class="text-yellow-400" />
									<h4 class="font-bold text-white">
										Office & Workshop
									</h4>
								</div>
								<p
									class="text-blue-200 text-sm leading-relaxed mb-2"
								>
									Jl. H.Gadung 2A No 99<br />
									Pondok Ranji, Ciputat<br />
									Tangerang Selatan 15412
								</p>
								<p class="text-sm font-semibold text-white">
									WhatsApp <a
										href={waLink(WA_SAPAAN_UMUM, page.url.pathname)}
										target="_blank"
										rel="noopener"
										class="underline decoration-yellow-400/60 underline-offset-2 hover:text-yellow-400 transition-colors"
										>085800602797</a
									>
								</p>
							</div>
							<div>
								<div class="flex items-center gap-2 mb-2">
									<MapPin size={16} class="text-yellow-400" />
									<h4 class="font-bold text-white">
										Tech Office Hub
									</h4>
								</div>
								<p
									class="text-blue-200 text-sm leading-relaxed mb-2"
								>
									LTC GF 1 Blok C27 no 1<br />
									Jl. Hayam Wuruk No 127<br />
									Jakarta Barat 11180
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA WhatsApp -->
				<div
					class="bg-white rounded-3xl p-8 md:p-10 shadow-xl mt-8 lg:mt-0 flex flex-col justify-center text-center"
					data-lokasi="cta_kontak"
				>
					<div
						class="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center mb-6"
					>
						<IkonWhatsApp size={30} class="text-green-600" />
					</div>
					<h3 class="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
						Konsultasi Gratis via WhatsApp
					</h3>
					<p class="text-slate-600 leading-relaxed mb-8">
						Ceritakan kebutuhan gedung Anda langsung ke tim kami. Kami
						bantu tentukan lingkup pekerjaan dan estimasi biayanya.
					</p>
					<a
						href={waLink(WA_SAPAAN_UMUM, page.url.pathname)}
						target="_blank"
						rel="noopener"
						class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-green-600/20 inline-flex items-center justify-center gap-2"
					>
						<IkonWhatsApp size={20} />
						Chat via WhatsApp
					</a>
					<p class="text-sm text-slate-500 mt-4">
						Balasan pada jam kerja, Senin sampai Sabtu.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
