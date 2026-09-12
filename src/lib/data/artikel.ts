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
			html: marked.parse(body, { async: false }) as string,
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
