import { ambilRingkas } from '$lib/server/sanity';

export async function load() {
	return { artikelTerbaru: await ambilRingkas(3) };
}
