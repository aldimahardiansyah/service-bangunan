import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';
import { tautkanInternal } from '$lib/data/tautan';
import type { Artikel, ArtikelRingkas } from '$lib/data/artikel';

// Dataset production bersifat publik, jadi tidak ada kunci rahasia di sini.
// Semua pengambilan data berjalan di sisi server supaya tidak perlu izin CORS.
const client = createClient({
	projectId: 'yggy4px7',
	dataset: 'production',
	apiVersion: '2024-10-01',
	useCdn: true
});

const RINGKAS = `{
	"slug": slug.current,
	title, seoTitle, description, excerpt, category, date,
	"cover": cover.asset->url,
	coverAlt, coverCredit,
	"readingMinutes": round(length(pt::text(body)) / 1000)
}`;

function menitBaca(html: string): number {
	const kata = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(kata / 200));
}

function keHtml(body: unknown): string {
	return toHTML(body as never, {
		components: {
			marks: {
				link: ({ children, value }) => {
					const href = String(value?.href ?? '');
					const luar = !href.includes('servicebangunan.id') && href.startsWith('http');
					return `<a href="${href}"${luar ? ' target="_blank" rel="noopener"' : ''}>${children}</a>`;
				}
			},
			types: {
				image: ({ value }) => {
					const url = value?.asset?.url;
					if (!url) return '';
					const alt = String(value?.alt ?? '').replace(/"/g, '&quot;');
					return `<img src="${url}?w=1200&auto=format" alt="${alt}" loading="lazy" decoding="async" />`;
				}
			}
		}
	});
}

export async function ambilRingkas(batas?: number): Promise<ArtikelRingkas[]> {
	const urut = `*[_type == "artikel" && defined(slug.current)] | order(date desc, _createdAt desc)`;
	const potong = batas ? `[0...${batas}]` : '';
	const hasil: ArtikelRingkas[] = await client.fetch(`${urut}${potong} ${RINGKAS}`);
	return hasil.map((a) => ({ ...a, readingMinutes: Math.max(1, a.readingMinutes || 1) }));
}

export async function ambilArtikel(slug: string): Promise<Artikel | null> {
	const doc = await client.fetch(
		`*[_type == "artikel" && slug.current == $slug][0]{
			..., "slug": slug.current, "cover": cover.asset->url,
			body[]{..., _type == "image" => { ..., "asset": asset-> }}
		}`,
		{ slug }
	);
	if (!doc) return null;
	const html = tautkanInternal(keHtml(doc.body), slug);
	return {
		slug: doc.slug,
		title: doc.title,
		seoTitle: doc.seoTitle || doc.title,
		description: doc.description ?? '',
		excerpt: doc.excerpt ?? doc.description ?? '',
		category: doc.category ?? 'Facility Management',
		date: doc.date ?? '',
		cover: doc.cover ?? '',
		coverAlt: doc.coverAlt ?? doc.title,
		coverCredit: doc.coverCredit ?? '',
		html,
		readingMinutes: menitBaca(html)
	};
}
