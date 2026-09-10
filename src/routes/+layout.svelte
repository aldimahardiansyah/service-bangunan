<script lang="ts">
	import "./layout.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import favicon from "$lib/assets/service-bagunan.ico";
	let { children } = $props();
</script>

<svelte:head>
	<title>Service Bangunan ID | Solusi Konstruksi & Renovasi Terpercaya</title>
	<link rel="icon" type="image/ico" href={favicon} />
	<!-- description & keywords didefinisikan per halaman agar tidak duplikat. -->
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
