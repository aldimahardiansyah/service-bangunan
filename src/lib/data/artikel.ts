import { marked } from 'marked';

export type Artikel = {
	slug: string;
	title: string;
	seoTitle: string;
	description: string;
	excerpt: string;
	category: string;
	date: string;
	cover: string;
	coverAlt: string;
	coverCredit: string;
	html: string;
	readingMinutes: number;
};

/** Memisahkan blok frontmatter dari isi markdown. */
function splitFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { meta: {}, body: raw };

	const meta: Record<string, string> = {};
	for (const line of match[1].split(/\r?\n/)) {
		const sep = line.indexOf(':');
		if (sep === -1) continue;
		const key = line.slice(0, sep).trim();
		// Nilai boleh mengandung ':' (mis. judul SEO), jadi hanya pisah pada ':' pertama.
		const value = line.slice(sep + 1).trim();
		if (key) meta[key] = value;
	}
	return { meta, body: match[2] };
}

function readingMinutes(body: string): number {
	const words = body.replace(/[#*_`>\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

/** Frasa yang ditautkan otomatis ke artikel lain, urut dari yang paling spesifik. */
const TAUTAN_INTERNAL: { slug: string; frasa: string[] }[] = [
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
	{ slug: 'jasa-epoxy-flooring', frasa: ['jasa epoxy flooring', 'epoxy flooring'] }
];

const MAKS_TAUTAN = 4;

function escapeRegex(t: string): string {
	return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Rentang teks yang sudah menjadi tautan markdown, supaya tidak ditautkan dua kali. */
function rentangTautan(baris: string): [number, number][] {
	const hasil: [number, number][] = [];
	const re = /\[[^\]]*\]\([^)]*\)/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(baris))) hasil.push([m.index, m.index + m[0].length]);
	return hasil;
}

/**
 * Menyisipkan tautan ke artikel lain pada paragraf isi. Hanya kemunculan
 * pertama tiap frasa, maksimal beberapa per artikel, dan tidak menyentuh
 * heading maupun teks yang sudah menjadi tautan.
 */
function tautkanInternal(markdown: string, slugSaatIni: string): string {
	const target = TAUTAN_INTERNAL.filter((t) => t.slug !== slugSaatIni)
		.flatMap((t) => t.frasa.map((frasa) => ({ slug: t.slug, frasa })))
		.sort((a, b) => b.frasa.length - a.frasa.length);

	// Frasa milik artikel ini sendiri tidak boleh dipotong oleh tautan yang lebih pendek,
	// misalnya 'maintenance gedung' di dalam 'biaya maintenance gedung'.
	const frasaSendiri = TAUTAN_INTERNAL.find((t) => t.slug === slugSaatIni)?.frasa ?? [];

	const slugTerpakai = new Set<string>();
	const baris = markdown.split('\n');

	for (let i = 0; i < baris.length; i++) {
		const teks = baris[i];
		if (!teks.trim() || teks.startsWith('#')) continue; // heading dilewati, paragraf & daftar boleh

		for (const { slug, frasa } of target) {
			if (slugTerpakai.size >= MAKS_TAUTAN) break;
			if (slugTerpakai.has(slug)) continue;

			const re = new RegExp(escapeRegex(frasa), 'i');
			const cocok = re.exec(baris[i]);
			if (!cocok) continue;
			const terlarang = [...rentangTautan(baris[i])];
			for (const milik of frasaSendiri) {
				const reMilik = new RegExp(escapeRegex(milik), 'gi');
				let mm: RegExpExecArray | null;
				while ((mm = reMilik.exec(baris[i]))) terlarang.push([mm.index, mm.index + mm[0].length]);
			}
			if (terlarang.some(([a, b]) => cocok.index >= a && cocok.index < b)) continue;

			baris[i] =
				baris[i].slice(0, cocok.index) +
				`[${cocok[0]}](/artikel/${slug})` +
				baris[i].slice(cocok.index + cocok[0].length);
			slugTerpakai.add(slug);
		}
		if (slugTerpakai.size >= MAKS_TAUTAN) break;
	}

	return baris.join('\n');
}

const files = import.meta.glob('/src/lib/content/artikel/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export const artikelList: Artikel[] = Object.entries(files)
	.map(([path, raw]) => {
		const slug = path.split('/').pop()!.replace(/\.md$/, '');
		const { meta, body } = splitFrontmatter(raw);
		return {
			slug,
			title: meta.title ?? slug,
			seoTitle: meta.seoTitle ?? meta.title ?? slug,
			description: meta.description ?? '',
			excerpt: meta.excerpt ?? meta.description ?? '',
			category: meta.category ?? 'Artikel',
			date: meta.date ?? '',
			cover: meta.cover ?? '/images/overview.webp',
			coverAlt: meta.coverAlt ?? meta.title ?? slug,
			coverCredit: meta.coverCredit ?? '',
			html: marked.parse(tautkanInternal(body, slug), { async: false }) as string,
			readingMinutes: readingMinutes(body)
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));

export const kategoriList: string[] = [
	'Semua',
	...[...new Set(artikelList.map((a) => a.category))].sort()
];

export function getArtikel(slug: string): Artikel | undefined {
	return artikelList.find((a) => a.slug === slug);
}

/** Artikel lain untuk bagian "Baca juga", kategori sama diutamakan. */
export function artikelTerkait(slug: string, limit = 3): Artikel[] {
	const current = getArtikel(slug);
	if (!current) return artikelList.slice(0, limit);
	const others = artikelList.filter((a) => a.slug !== slug);
	const sameCategory = others.filter((a) => a.category === current.category);
	return [...sameCategory, ...others.filter((a) => a.category !== current.category)].slice(0, limit);
}

export function formatTanggal(iso: string): string {
	if (!iso) return '';
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}
