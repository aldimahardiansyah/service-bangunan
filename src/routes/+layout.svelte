<script lang="ts">
	import "./layout.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { afterNavigate } from "$app/navigation";
	import { tick } from "svelte";

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
