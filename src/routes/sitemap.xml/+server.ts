import { ambilRingkas } from '$lib/server/sanity';

export async function GET({ url, setHeaders }) {
	const artikel = await ambilRingkas();
	const pages = ['', '/#tentang', '/#layanan', '/#cara-kerja', '/#portofolio', '/#kontak', '/gallery', '/artikel'];

	const statis = pages.map(
		(page) => `  <url>
    <loc>${url.origin}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
	);

	const tulisan = artikel.map(
		(a) => `  <url>
    <loc>${url.origin}/artikel/${a.slug}</loc>
    <lastmod>${a.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
	);

	setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=3600' });
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...statis, ...tulisan].join('\n')}
</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
