import { error } from '@sveltejs/kit';
import { getArtikel, artikelTerkait } from '$lib/data/artikel';

export function load({ params }) {
	const artikel = getArtikel(params.slug);
	if (!artikel) error(404, 'Artikel tidak ditemukan');
	return { artikel, terkait: artikelTerkait(params.slug) };
}
