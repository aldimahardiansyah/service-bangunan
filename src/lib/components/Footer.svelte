<script lang="ts">
	import { MapPin, Mail } from "lucide-svelte";
	import IkonWhatsApp from "$lib/components/IkonWhatsApp.svelte";
	import { waLink, WA_SAPAAN_UMUM, WA_DISPLAY } from "$lib/data/kontak";
	import { page } from "$app/state";
</script>

<footer class="bg-blue-900 text-blue-50 pt-20 pb-10">
	<div
		class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
	>
		<!-- Brand & About -->
		<div class="space-y-6">
			<h4
				class="text-white font-bold text-lg mb-6 flex items-center gap-2"
			>
				<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
				Bagian dari Group
			</h4>

			<a href="/" class="flex items-center gap-2">
				<img
					src="/images/logo-pda.webp"
					alt="logo service bangunan"
					class="h-25 w-auto rounded"
					width="420"
					height="267"
					loading="lazy"
					decoding="async"
				/>
			</a>
			<p class="text-blue-200 text-sm leading-relaxed">
				Perusahaan Integrated Facility Management (IFM) terpercaya di
				Indonesia yang memberikan solusi perawatan bangunan berbasis
				sistem dan teknologi.
			</p>
		</div>

		<!-- Quick Links -->
		<div>
			<h4
				class="text-white font-bold text-lg mb-6 flex items-center gap-2"
			>
				<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
				Tautan Cepat
			</h4>
			<ul class="space-y-3 text-sm">
				<li>
					<a
						href="/#beranda"
						class="hover:text-yellow-400 transition-colors flex items-center gap-2"
						><span class="text-blue-400">›</span> Beranda</a
					>
				</li>
				<li>
					<a
						href="/#tentang"
						class="hover:text-yellow-400 transition-colors flex items-center gap-2"
						><span class="text-blue-400">›</span> Tentang Kami</a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-center gap-2"
						><span class="text-blue-400">›</span> Our Services</a
					>
				</li>
				<li>
					<a
						href="/#cara-kerja"
						class="hover:text-yellow-400 transition-colors flex items-center gap-2"
						><span class="text-blue-400">›</span> Cara Kerja</a
					>
				</li>
			</ul>
		</div>

		<!-- Services -->
		<div>
			<h4
				class="text-white font-bold text-lg mb-6 flex items-center gap-2"
			>
				<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
				Layanan Kami
			</h4>
			<ul class="space-y-3 text-sm">
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>MEP & Electrical</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>Fire Protection</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>STP & Water Treatment</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>Building Maintenance</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>Renovation & Retrofitting</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>Energy & Efficiency for Smart Building</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>Procurement & Supply</span></a
					>
				</li>
				<li>
					<a
						href="/#layanan"
						class="hover:text-yellow-400 transition-colors flex items-start gap-2"
						><span class="text-blue-400 shrink-0">›</span>
						<span>Facility Services</span></a
					>
				</li>
			</ul>
		</div>

		<!-- Contact Info -->
		<div>
			<h4
				class="text-white font-bold text-lg mb-6 flex items-center gap-2"
			>
				<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
				Kontak Kami
			</h4>
			<ul class="space-y-4 text-sm" data-lokasi="footer">
				<li class="flex items-start gap-3">
					<MapPin size={18} class="text-yellow-400 shrink-0 mt-0.5" />
					<div class="text-blue-200">
						<strong>Office & Workshop:</strong><br />
						Jl. H.Gadung 2A No 99<br />
						Pondok Ranji, Ciputat<br />
						Tangerang Selatan 15412
					</div>
				</li>
				<li class="flex items-start gap-3">
					<MapPin size={18} class="text-yellow-400 shrink-0 mt-0.5" />
					<div class="text-blue-200">
						<strong>Tech Office Hub:</strong><br />
						LTC GF 1 Blok C27 no 1<br />
						Jl. Hayam Wuruk No 127<br />
						Jakarta Barat 11180
					</div>
				</li>
				<li class="flex items-center gap-3">
					<IkonWhatsApp size={18} class="text-yellow-400 shrink-0" />
					<a
						href={waLink(WA_SAPAAN_UMUM, page.url.pathname)}
						target="_blank"
						rel="noopener"
						class="text-blue-200 hover:text-yellow-400 transition-colors"
						>{WA_DISPLAY}</a
					>
				</li>
				<li class="flex items-center gap-3">
					<Mail size={18} class="text-yellow-400 shrink-0" />
					<a
						href="mailto:servicebangunan@gmail.com"
						class="text-blue-200 hover:text-yellow-400 transition-colors"
						>servicebangunan@gmail.com</a
					>
				</li>
			</ul>
		</div>
	</div>

	<div
		class="container border-t border-blue-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300"
	>
		<p>
			&copy; {new Date().getFullYear()} Service Bangunan ID. All rights reserved.
		</p>
		<p>Building Mechanical, Electrical, Plumbing & Civil Specialist</p>
	</div>
</footer>
