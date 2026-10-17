/** Frasa yang ditautkan otomatis ke artikel lain, urut dari yang paling spesifik. */
const TAUTAN_INTERNAL: { slug: string; frasa: string[] }[] = [
	{ slug: 'purifikasi-trafo-panel-electrical', frasa: ['purifikasi trafo'] },
	{ slug: 'facility-management-kawasan-industri', frasa: ['facility management kawasan industri'] },
	{ slug: 'facility-management-perkantoran', frasa: ['facility management perkantoran'] },
	{ slug: 'facility-management-indonesia', frasa: ['facility management Indonesia'] },
	{ slug: 'integrated-facility-management', frasa: ['integrated facility management'] },
	{ slug: 'jasa-facility-management-jakarta', frasa: ['facility management Jakarta'] },
	{ slug: 'jasa-maintenance-electrical-gedung', frasa: ['maintenance electrical gedung', 'maintenance electrical'] },
	{ slug: 'jasa-cleaning-service-gedung', frasa: ['cleaning service gedung', 'jasa cleaning service'] },
	{ slug: 'jasa-waterproofing-gedung', frasa: ['jasa waterproofing gedung', 'waterproofing gedung'] },
	{ slug: 'biaya-maintenance-gedung', frasa: ['biaya maintenance gedung', 'biaya pemeliharaan gedung'] },
	{ slug: 'jasa-engineering-gedung', frasa: ['jasa engineering gedung', 'engineering gedung'] },
	{ slug: 'jasa-maintenance-gedung', frasa: ['jasa maintenance gedung', 'maintenance gedung', 'preventive maintenance'] },
	{ slug: 'jasa-facility-management', frasa: ['jasa facility management', 'facility management'] },
	{ slug: 'jasa-maintenance-hvac', frasa: ['jasa maintenance HVAC', 'maintenance HVAC'] },
	{ slug: 'mesin-air-bersih-prv', frasa: ['mesin air bersih PRV'] },
	{ slug: 'perawatan-meb-gedung', frasa: ['perawatan MEB gedung'] },
	{ slug: 'pipa-ppr-gedung', frasa: ['pipa PPR'] },
	{ slug: 'jasa-epoxy-flooring', frasa: ['jasa epoxy flooring', 'epoxy flooring'] }
];

const MAKS_TAUTAN = 4;

function escapeRegex(t: string): string {
	return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Menyisipkan tautan ke artikel lain pada teks isi. Bekerja di atas HTML hasil
 * render: hanya menyentuh teks di dalam paragraf dan daftar, melewati heading
 * serta teks yang sudah berada di dalam tautan.
 */
export function tautkanInternal(html: string, slugSaatIni: string): string {
	const sendiri = TAUTAN_INTERNAL.find((t) => t.slug === slugSaatIni)?.frasa ?? [];
	const target = TAUTAN_INTERNAL.filter((t) => t.slug !== slugSaatIni)
		.flatMap((t) => t.frasa.map((frasa) => ({ slug: t.slug, frasa })))
		.sort((a, b) => b.frasa.length - a.frasa.length);

	const terpakai = new Set<string>();
	let dalamTautan = 0;
	let dalamHeading = 0;

	// Memecah HTML jadi urutan tag dan teks, lalu hanya mengolah bagian teks.
	return html.replace(/(<[^>]+>)|([^<]+)/g, (cocok, tag: string | undefined, teks: string | undefined) => {
		if (tag) {
			if (/^<a\b/i.test(tag)) dalamTautan++;
			else if (/^<\/a>/i.test(tag)) dalamTautan = Math.max(0, dalamTautan - 1);
			else if (/^<h[1-6]\b/i.test(tag)) dalamHeading++;
			else if (/^<\/h[1-6]>/i.test(tag)) dalamHeading = Math.max(0, dalamHeading - 1);
			return tag;
		}
		if (!teks || dalamTautan > 0 || dalamHeading > 0 || terpakai.size >= MAKS_TAUTAN) return teks ?? '';

		let hasil = teks;
		for (const { slug, frasa } of target) {
			if (terpakai.size >= MAKS_TAUTAN) break;
			if (terpakai.has(slug)) continue;

			const m = new RegExp(escapeRegex(frasa), 'i').exec(hasil);
			if (!m) continue;

			// Jangan memotong frasa milik artikel ini sendiri.
			const terlarang: [number, number][] = [];
			for (const milik of sendiri) {
				const re = new RegExp(escapeRegex(milik), 'gi');
				let mm: RegExpExecArray | null;
				while ((mm = re.exec(hasil))) terlarang.push([mm.index, mm.index + mm[0].length]);
			}
			if (terlarang.some(([a, b]) => m.index >= a && m.index < b)) continue;

			hasil = hasil.slice(0, m.index) + `<a href="/artikel/${slug}">${m[0]}</a>` + hasil.slice(m.index + m[0].length);
			terpakai.add(slug);
		}
		return hasil;
	});
}
