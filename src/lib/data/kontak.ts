/** Satu sumber kebenaran untuk kontak WhatsApp, dipakai navbar, beranda, footer, dan tombol melayang. */
export const WA_NUMBER = '6285800602797';
export const WA_DISPLAY = '+62 858 0060 2797';

const SITE = 'https://www.servicebangunan.id';

/**
 * Menyusun pesan WhatsApp beserta keterangan asalnya, supaya setiap chat yang
 * masuk langsung terlihat berasal dari website dan dari halaman mana.
 *
 * Alamat selalu dirakit dari domain asli, bukan dari origin saat halaman
 * dibangun, karena prerender memakai host internal 'sveltekit-prerender'.
 */
export function waPesan(isi: string, path = '/'): string {
	const bersih = path.startsWith('/') ? path : `/${path}`;
	return `${isi}\n\n—\nDikirim dari website Service Bangunan ID\n${SITE}${bersih}`;
}

export function waLink(isi: string, path = '/'): string {
	return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waPesan(isi, path))}`;
}

/** Sapaan default untuk tombol kontak umum. */
export const WA_SAPAAN_UMUM =
	'Halo Service Bangunan ID! 👋\nSaya menemukan website Anda dan tertarik berkonsultasi soal perawatan dan pengelolaan gedung. Boleh dibantu?';

export const WA_DEFAULT = waLink(WA_SAPAAN_UMUM);
