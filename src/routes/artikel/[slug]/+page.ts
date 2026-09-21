import { error } from '@sveltejs/kit';
import { getArtikel, artikelTerkait } from '$lib/data/artikel';
import { artikelList } from '$lib/data/artikel';

// Daftar artikel dipaginasi di sisi klien, jadi perayap prerender tidak bisa
// menemukan halaman kedua lewat tautan. Entries memastikan semua slug dibuat.
export function entries() {
	return artikelList.map((a) => ({ slug: a.slug }));
}

export function load({ params }) {
	const artikel = getArtikel(params.slug);
	if (!artikel) error(404, 'Artikel tidak ditemukan');
	return { artikel, terkait: artikelTerkait(params.slug) };
}
