<script lang="ts">
	import { Play } from "lucide-svelte";

	type Video = { id: string; judul: string };
	let { video }: { video: Video[] } = $props();

	// Iframe YouTube baru dimuat setelah diklik. Memuatnya langsung menambah
	// ratusan kilobita per video dan memperlambat halaman.
	let diputar = $state<string | null>(null);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
	{#each video as v (v.id)}
		<figure class="flex flex-col">
			<div
				class="relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 shadow-lg"
			>
				{#if diputar === v.id}
					<iframe
						src="https://www.youtube.com/embed/{v.id}?autoplay=1&rel=0"
						title={v.judul}
						class="absolute inset-0 w-full h-full"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				{:else}
					<button
						type="button"
						class="group absolute inset-0 w-full h-full cursor-pointer"
						onclick={() => (diputar = v.id)}
						aria-label="Putar video {v.judul}"
					>
						<img
							src="/images/video/{v.id}.webp"
							alt=""
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
							decoding="async"
						/>
						<span
							class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"
						></span>
						<span
							class="absolute inset-0 flex items-center justify-center"
						>
							<span
								class="w-16 h-16 rounded-full bg-white/95 text-blue-600 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
							>
								<Play size={26} class="translate-x-0.5" fill="currentColor" />
							</span>
						</span>
					</button>
				{/if}
			</div>
			<figcaption class="mt-4 text-slate-700 font-semibold leading-snug">
				{v.judul}
			</figcaption>
		</figure>
	{/each}
</div>
