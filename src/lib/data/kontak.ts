/** Satu sumber kebenaran untuk kontak WhatsApp, dipakai navbar, beranda, dan footer. */
export const WA_NUMBER = '6281809098809';
export const WA_DISPLAY = '+62 818 0909 8809';

export function waLink(pesan: string): string {
	return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
}

export const WA_DEFAULT = waLink(
	'Halo Service Bangunan ID, saya ingin berkonsultasi mengenai layanan facility management.'
);
