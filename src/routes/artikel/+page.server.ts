import { ambilRingkas } from '$lib/server/sanity';

export async function load() {
	return { daftar: await ambilRingkas() };
}
