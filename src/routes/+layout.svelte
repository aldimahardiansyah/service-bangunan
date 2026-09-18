<script lang="ts">
	import "./layout.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { afterNavigate } from "$app/navigation";
	import { onMount, tick } from "svelte";

	let { children } = $props();

	// afterNavigate juga berjalan pada kunjungan pertama, jadi semua tampilan
	// halaman tercatat: pemuatan awal maupun perpindahan tanpa reload.
	afterNavigate(async () => {
		await tick(); // tunggu <svelte:head> selesai memperbarui judul
		if (typeof gtag !== "function") return;
		gtag("event", "page_view", {
			page_title: document.title,
			page_location: location.href,
			page_path: location.pathname + location.search,
		});
	});

	// Klik tautan kontak dicatat sebagai event terpisah agar mudah dicari di GA4.
	// Lokasi tombol diambil dari atribut data-lokasi terdekat (footer, kontak, ...).
	onMount(() => {
		const onClick = (e: MouseEvent) => {
			const a = (e.target as Element | null)?.closest("a[href]");
			if (!a || typeof gtag !== "function") return;
			const href = a.getAttribute("href") ?? "";
			const name = href.startsWith("mailto:")
				? "klik_email"
				: href.startsWith("tel:")
					? "klik_telepon"
					: /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)
						? "klik_whatsapp"
						: null;
			if (!name) return;
			gtag("event", name, {
				lokasi: a.closest("[data-lokasi]")?.getAttribute("data-lokasi") ?? "lainnya",
				link_url: href,
			});
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	});
</script>

<svelte:head>
	<title>Service Bangunan ID | Solusi Facility Management & Maintenance Gedung Terpercaya</title>
	<!-- description & keywords didefinisikan per halaman agar tidak duplikat. -->
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
