export type ArtikelRingkas = {
	slug: string;
	title: string;
	seoTitle?: string;
	description: string;
	excerpt: string;
	category: string;
	date: string;
	cover: string;
	coverAlt: string;
	coverCredit?: string;
	readingMinutes: number;
};

export type Artikel = ArtikelRingkas & {
	seoTitle: string;
	coverCredit: string;
	html: string;
};

/** Artikel sebelum dan sesudah pada daftar yang sudah urut dari terbaru. */
export function artikelTetangga(daftar: ArtikelRingkas[], slug: string) {
	const i = daftar.findIndex((a) => a.slug === slug);
	if (i === -1) return { sebelumnya: null, berikutnya: null };
	return { sebelumnya: daftar[i + 1] ?? null, berikutnya: daftar[i - 1] ?? null };
}

/** Artikel lain untuk bagian "Baca Juga", kategori sama diutamakan. */
export function artikelTerkait(daftar: ArtikelRingkas[], slug: string, batas = 3) {
	const ini = daftar.find((a) => a.slug === slug);
	const lain = daftar.filter((a) => a.slug !== slug);
	if (!ini) return lain.slice(0, batas);
	const sama = lain.filter((a) => a.category === ini.category);
	return [...sama, ...lain.filter((a) => a.category !== ini.category)].slice(0, batas);
}

export function formatTanggal(iso: string): string {
	if (!iso) return '';
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Ukuran gambar sampul dari CDN Sanity. */
export function sampul(url: string, lebar = 1200): string {
	return url ? `${url}?w=${lebar}&auto=format&fit=max` : '';
}
