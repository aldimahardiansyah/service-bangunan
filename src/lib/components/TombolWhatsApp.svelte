<script lang="ts">
	import { X } from "lucide-svelte";
	import IkonWhatsApp from "$lib/components/IkonWhatsApp.svelte";
	import { waLink } from "$lib/data/kontak";

	const pilihan = [
		"Halo, saya mau konsultasi",
		"Halo, apakah barang ini ready?",
	];

	let terbuka = $state(false);

	function tutupJikaEscape(e: KeyboardEvent) {
		if (e.key === "Escape") terbuka = false;
	}
</script>

<svelte:window on:keydown={tutupJikaEscape} />

<div
	class="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
	data-lokasi="tombol_melayang"
>
	{#if terbuka}
		<!-- Lapisan penutup: klik di luar panel akan menutup pilihan -->
		<button
			type="button"
			class="fixed inset-0 -z-10 cursor-default"
			aria-label="Tutup pilihan pesan"
			onclick={() => (terbuka = false)}
		></button>

		<div
			id="pilihan-whatsapp"
			class="w-[17rem] sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200"
		>
			<div class="bg-green-600 px-5 py-4">
				<p class="text-white font-bold leading-tight">
					Hubungi Service Bangunan ID
				</p>
				<p class="text-green-50 text-xs mt-1">
					Pilih pesan, chat langsung terbuka
				</p>
			</div>
			<ul class="p-2">
				{#each pilihan as pesan}
					<li>
						<a
							href={waLink(pesan)}
							target="_blank"
							rel="noopener"
							data-lokasi="tombol_melayang"
							class="flex items-start gap-3 px-3 py-3 rounded-xl text-sm text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors"
							onclick={() => (terbuka = false)}
						>
							<IkonWhatsApp
								size={18}
								class="shrink-0 mt-0.5 text-green-600"
							/>
							<span>{pesan}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<button
		type="button"
		aria-label={terbuka ? "Tutup pilihan pesan WhatsApp" : "Chat via WhatsApp"}
		aria-expanded={terbuka}
		aria-controls="pilihan-whatsapp"
		class="w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-xl shadow-green-600/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
		onclick={() => (terbuka = !terbuka)}
	>
		{#if terbuka}
			<X size={26} />
		{:else}
			<IkonWhatsApp size={26} />
		{/if}
	</button>
</div>
