import { error } from '@sveltejs/kit';
import { ambilArtikel, ambilRingkas } from '$lib/server/sanity';
import { artikelTerkait, artikelTetangga } from '$lib/data/artikel';

export async function load({ params }) {
	const [artikel, daftar] = await Promise.all([ambilArtikel(params.slug), ambilRingkas()]);
	if (!artikel) error(404, 'Artikel tidak ditemukan');
	return {
		artikel,
		terkait: artikelTerkait(daftar, params.slug),
		...artikelTetangga(daftar, params.slug)
	};
}
