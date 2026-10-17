import { ambilRingkas } from '$lib/server/sanity';

export async function load({ setHeaders }) {
	setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400' });
	return { artikelFooter: await ambilRingkas(4) };
}
