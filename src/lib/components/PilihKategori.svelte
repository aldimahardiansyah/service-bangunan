<script lang="ts">
	import { Check, ChevronDown } from "lucide-svelte";

	type Props = {
		opsi: string[];
		jumlah: Record<string, number>;
		nilai: string;
		label: string;
		id?: string;
	};

	let {
		opsi,
		jumlah,
		nilai = $bindable(),
		label,
		id = "pilih-kategori",
	}: Props = $props();

	let terbuka = $state(false);
	let sorot = $state(0);
	let akar: HTMLDivElement | undefined = $state();
	let daftar: HTMLUListElement | undefined = $state();
	let tombol: HTMLButtonElement | undefined = $state();

	function buka() {
		sorot = Math.max(0, opsi.indexOf(nilai));
		terbuka = true;
	}

	function tutup(kembalikanFokus = false) {
		terbuka = false;
		if (kembalikanFokus) tombol?.focus();
	}

	function pilih(i: number) {
		nilai = opsi[i];
		tutup(true);
	}

	function geser(langkah: number) {
		if (!terbuka) {
			buka();
			return;
		}
		sorot = (sorot + langkah + opsi.length) % opsi.length;
	}

	// Pilihan yang sedang disorot selalu ikut terlihat saat digeser dengan panah.
	$effect(() => {
		if (!terbuka || !daftar) return;
		daftar
			.querySelector(`[data-i="${sorot}"]`)
			?.scrollIntoView({ block: "nearest" });
	});

	function padaTombol(e: KeyboardEvent) {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				geser(1);
				break;
			case "ArrowUp":
				e.preventDefault();
				geser(-1);
				break;
			case "Home":
				if (terbuka) {
					e.preventDefault();
					sorot = 0;
				}
				break;
			case "End":
				if (terbuka) {
					e.preventDefault();
					sorot = opsi.length - 1;
				}
				break;
			case "Enter":
			case " ":
				e.preventDefault();
				if (terbuka) pilih(sorot);
				else buka();
				break;
			case "Escape":
				if (terbuka) {
					e.preventDefault();
					tutup(true);
				}
				break;
			case "Tab":
				tutup();
				break;
		}
	}
</script>

<svelte:window
	onpointerdown={(e) => {
		if (terbuka && akar && !akar.contains(e.target as Node)) tutup();
	}}
/>

<div class="relative" bind:this={akar}>
	<span
		id="{id}-label"
		class="block text-sm font-semibold text-slate-700 mb-2">{label}</span
	>

	<button
		bind:this={tombol}
		{id}
		type="button"
		role="combobox"
		aria-haspopup="listbox"
		aria-expanded={terbuka}
		aria-controls="{id}-daftar"
		aria-labelledby="{id}-label"
		aria-activedescendant={terbuka ? `${id}-opsi-${sorot}` : undefined}
		onclick={() => (terbuka ? tutup() : buka())}
		onkeydown={padaTombol}
		class="flex w-full items-center gap-2 rounded-xl border bg-white py-3 pl-4 pr-3 text-left text-base font-semibold text-slate-800 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 {terbuka
			? 'border-blue-600'
			: 'border-slate-300'}"
	>
		<span class="min-w-0 flex-1 truncate">{nilai}</span>
		<span class="shrink-0 text-sm font-medium tabular-nums text-slate-400"
			>{jumlah[nilai]}</span
		>
		<ChevronDown
			size={20}
			class="shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none {terbuka
				? 'rotate-180'
				: ''}"
		/>
	</button>

	{#if terbuka}
		<ul
			bind:this={daftar}
			id="{id}-daftar"
			role="listbox"
			aria-labelledby="{id}-label"
			class="absolute left-0 right-0 z-[45] mt-2 max-h-72 overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white py-1 shadow-xl shadow-slate-900/10"
		>
			{#each opsi as o, i (o)}
				<li
					id="{id}-opsi-{i}"
					role="option"
					data-i={i}
					aria-selected={o === nilai}
					onpointerdown={(e) => {
						e.preventDefault();
						pilih(i);
					}}
					onpointermove={() => (sorot = i)}
					class="flex cursor-pointer items-center gap-2 px-4 py-2.5 text-base {i ===
					sorot
						? 'bg-blue-50'
						: ''} {o === nilai
						? 'font-semibold text-blue-700'
						: 'text-slate-700'}"
				>
					<span class="min-w-0 flex-1 truncate">{o}</span>
					<span
						class="shrink-0 text-sm tabular-nums {o === nilai
							? 'text-blue-400'
							: 'text-slate-400'}">{jumlah[o]}</span
					>
					{#if o === nilai}
						<Check size={16} class="shrink-0 text-blue-600" />
					{:else}
						<span class="w-4 shrink-0"></span>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>
