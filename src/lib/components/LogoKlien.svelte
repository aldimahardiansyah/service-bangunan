<script lang="ts">
	const clients = [
		{ nama: "Telkom Indonesia", file: "telkom-indonesia" },
		{ nama: "Astra", file: "astra" },
		{ nama: "Kementerian UMKM", file: "kementerian-umkm" },
		{ nama: "Ravindo Putra Mandiri", file: "ravindo" },
		{ nama: "Paladian Park", file: "paladian-park" },
		{ nama: "Playdo Indonesia", file: "playdo-indonesia" },
		{ nama: "Wood Stairs", file: "wood-stairs" },
	];

	let { judul = "Dipercaya oleh" }: { judul?: string } = $props();
</script>

<p
	class="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-10"
>
	{judul}
</p>
<ul
	class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6 items-stretch"
>
	{#each clients as client (client.file)}
		<li
			class="bg-white rounded-2xl border border-slate-200 h-28 flex items-center justify-center px-4 py-3 transition-shadow hover:shadow-md"
		>
			<img
				src="/images/klien/{client.file}.webp"
				alt="Logo {client.nama}"
				title={client.nama}
				class="max-h-full w-auto object-contain"
				loading="lazy"
				decoding="async"
			/>
		</li>
	{/each}
</ul>
