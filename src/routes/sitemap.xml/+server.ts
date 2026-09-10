import { artikelList } from '$lib/data/artikel';

export async function GET({ url }) {
	const pages = [
		'',
		'/#tentang',
		'/#layanan',
		'/#cara-kerja',
		'/#portofolio',
		'/#kontak',
		'/gallery',
		'/artikel'
	];

	const staticUrls = pages.map(
		(page) => `  <url>
    <loc>${url.origin}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
	);

	const artikelUrls = artikelList.map(
		(artikel) => `  <url>
    <loc>${url.origin}/artikel/${artikel.slug}</loc>
    <lastmod>${artikel.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...artikelUrls].join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
