import {
	Zap, CloudLightning, Flame, Droplets, Wrench, Sparkles, Trees,
	Paintbrush, Hammer, Gauge, Package
} from 'lucide-svelte';

export type Layanan = {
	slug: string;
	nama: string;
	// Ikon lucide memakai tipe komponen lama, jadi bentuknya diambil dari salah satunya.
	icon: typeof Zap;
	/** Kalimat pendek untuk kartu di beranda. */
	ringkas: string;
	/** Dua paragraf untuk halaman layanan. */
	uraian: string[];
	lingkup: string[];
	/** Kategori galeri yang menampilkan pekerjaan ini, kalau ada. */
	galeri?: string;
};

export const layananList: Layanan[] = [
	{
		slug: 'mep-electrical',
		nama: 'MEP & Electrical',
		icon: Zap,
		ringkas: 'Panel listrik, ATS, genset, trafo, HVAC, plumbing, dan utilitas bangunan.',
		uraian: [
			'Sistem mekanikal, elektrikal, dan plumbing adalah tulang punggung operasional gedung. Satu gangguan kecil pada panel listrik atau sistem tata udara bisa menghentikan aktivitas seluruh lantai.',
			'Kami menangani pemeliharaan dan perbaikan sistem MEP berdasarkan kondisi aktual lapangan, mulai dari inspeksi rutin sampai penggantian komponen.'
		],
		lingkup: [
			'Maintenance panel listrik LVMDP, SDP, dan control panel',
			'Pemasangan dan perawatan ATS serta sistem daya cadangan',
			'Service, overhaul, dan maintenance genset',
			'Purifikasi dan maintenance transformator',
			'HVAC: chiller, AHU, FCU, dan sistem tata udara',
			'Plumbing dan sistem distribusi air bangunan'
		],
		galeri: 'Electrical Panel'
	},
	{
		slug: 'penangkal-petir',
		nama: 'Penangkal Petir',
		icon: CloudLightning,
		ringkas: 'Instalasi, grounding, pengujian, dan perawatan sistem proteksi petir.',
		uraian: [
			'Indonesia termasuk wilayah dengan sambaran petir tertinggi di dunia. Gedung bertingkat, pabrik, dan menara tanpa proteksi petir yang benar berisiko kehilangan peralatan elektronik dalam satu kejadian.',
			'Kami memasang dan merawat sistem penangkal petir beserta sistem pembumiannya, termasuk pemeriksaan instalasi lama yang sudah menurun kinerjanya.'
		],
		lingkup: [
			'Pemasangan penangkal petir untuk gedung, pabrik, dan menara',
			'Instalasi dan perbaikan sistem grounding',
			'Pengujian tahanan pembumian',
			'Inspeksi dan perawatan berkala instalasi existing',
			'Perbaikan instalasi penangkal petir yang rusak'
		]
	},
	{
		slug: 'fire-protection',
		nama: 'Fire Protection',
		icon: Flame,
		ringkas: 'Hydrant, sprinkler, fire alarm, dan sistem keselamatan bangunan.',
		uraian: [
			'Sistem proteksi kebakaran hanya berguna kalau benar-benar siap saat dibutuhkan. Karena itu pemeriksaan berkala jauh lebih penting daripada sekadar kelengkapan alat.',
			'Kami mengerjakan instalasi baru maupun perawatan sistem proteksi kebakaran yang sudah terpasang.'
		],
		lingkup: [
			'Instalasi dan pemasangan pipa hydrant',
			'Pergantian dan perbaikan siamese connection',
			'Instalasi sistem sprinkler',
			'Pemeriksaan pompa pemadam dan fire alarm',
			'Perawatan berkala sistem proteksi kebakaran'
		],
		galeri: 'Pipa Hydrant'
	},
	{
		slug: 'ipal-stp',
		nama: 'IPAL, STP & Water Treatment',
		icon: Droplets,
		ringkas: 'IPAL, STP, wastewater treatment, mesin air bersih, dan pengatur tekanan air.',
		uraian: [
			'Pengolahan air limbah dan penyediaan air bersih adalah dua sistem yang paling sering luput dari perhatian sampai timbul masalah. Padahal keduanya berkaitan langsung dengan kenyamanan penghuni dan kepatuhan lingkungan.',
			'Kami menangani pembuatan, perawatan, dan optimasi sistem pengolahan air pada gedung komersial maupun kawasan industri.'
		],
		lingkup: [
			'Pembuatan dan perawatan IPAL',
			'Instalasi dan maintenance STP',
			'Wastewater treatment dan water treatment',
			'Mesin air bersih dan pengatur tekanan air PRV',
			'Pemeriksaan pompa dan sistem distribusi air'
		],
		galeri: 'Mesin Air Bersih PRV'
	},
	{
		slug: 'building-maintenance',
		nama: 'Building Maintenance',
		icon: Wrench,
		ringkas: 'Preventive maintenance, corrective maintenance, dan perbaikan fasilitas.',
		uraian: [
			'Pemeliharaan yang terencana membuat masalah ketahuan sebelum berkembang jadi kerusakan besar. Biayanya jauh lebih terkendali dibanding memperbaiki setelah fasilitas berhenti bekerja.',
			'Program pemeliharaan kami disusun setelah assessment kondisi aktual, bukan paket seragam untuk semua gedung.'
		],
		lingkup: [
			'Preventive maintenance terjadwal',
			'Corrective maintenance dan perbaikan kerusakan',
			'Inspeksi berkala dan pelaporan kondisi aset',
			'Penyediaan tenaga teknis on site',
			'Perawatan fasilitas pendukung bangunan'
		]
	},
	{
		slug: 'cleaning-gedung',
		nama: 'Cleaning & Pembersihan Kaca Gedung',
		icon: Sparkles,
		ringkas: 'Cleaning gedung, pembersihan kaca, high-rise cleaning, dan waste management.',
		uraian: [
			'Kebersihan adalah hal pertama yang dinilai tamu dan penyewa saat masuk gedung. Untuk bangunan bertingkat, pembersihan kaca bagian luar menuntut peralatan dan prosedur keselamatan tersendiri.',
			'Kami menyediakan tenaga kebersihan harian maupun pekerjaan berkala sesuai kebutuhan fasilitas.'
		],
		lingkup: [
			'Cleaning service gedung dan perkantoran',
			'Pembersihan kaca gedung dan high-rise cleaning',
			'General cleaning berkala',
			'Pengelolaan sampah dan TPS',
			'Penyediaan tenaga kebersihan outsourcing'
		],
		galeri: 'TPS dan Limbah Sampah'
	},
	{
		slug: 'landscaping-taman',
		nama: 'Landscaping & Taman',
		icon: Trees,
		ringkas: 'Pembuatan taman, perawatan taman, dan penataan area hijau fasilitas.',
		uraian: [
			'Area hijau yang terawat memengaruhi kesan pertama terhadap sebuah properti, sekaligus menjadi bagian dari kenyamanan penghuni.',
			'Kami mengerjakan pembuatan taman baru maupun perawatan rutin area hijau pada properti komersial dan kawasan industri.'
		],
		lingkup: [
			'Pembuatan dan penataan taman',
			'Perawatan taman dan area hijau berkala',
			'Penataan softscape dan hardscape',
			'Pemangkasan dan penggantian tanaman',
			'Perawatan area hijau kawasan industri'
		]
	},
	{
		slug: 'finishing',
		nama: 'Pengecatan, Waterproofing & Epoxy',
		icon: Paintbrush,
		ringkas: 'Pengecatan gedung, waterproofing, coating, dan epoxy flooring.',
		uraian: [
			'Pekerjaan finishing bukan sekadar soal tampilan. Lapisan pelindung yang tepat memperpanjang umur struktur dan mencegah kebocoran yang mahal diperbaiki.',
			'Kami mengerjakan pengecatan gedung bertingkat, perbaikan kebocoran, dan pelapisan lantai area industri.'
		],
		lingkup: [
			'Pengecatan gedung dan fasad bangunan',
			'Waterproofing atap, basement, dan area basah',
			'Perbaikan kebocoran dan rembesan',
			'Epoxy flooring untuk pabrik dan gudang',
			'Coating pelindung permukaan'
		],
		galeri: 'Pengecatan Gedung'
	},
	{
		slug: 'renovation',
		nama: 'Renovation & Retrofitting',
		icon: Hammer,
		ringkas: 'Renovasi, upgrading, dan modifikasi sistem pada fasilitas existing.',
		uraian: [
			'Gedung yang sudah berjalan bertahun-tahun sering membutuhkan penyesuaian, baik karena perubahan fungsi ruang maupun karena sistemnya sudah tertinggal.',
			'Pekerjaan renovasi kami rencanakan agar gangguan terhadap operasional gedung seminimal mungkin.'
		],
		lingkup: [
			'Renovasi ruang dan area fasilitas',
			'Upgrading sistem mekanikal dan elektrikal',
			'Retrofitting instalasi lama',
			'Pekerjaan arsitektural dan interior',
			'Project take over dari pekerjaan yang terhenti'
		],
		galeri: 'Project Takeover'
	},
	{
		slug: 'energy-efficiency',
		nama: 'Energy & Efficiency for Smart Building',
		icon: Gauge,
		ringkas: 'Optimasi peralatan, efisiensi energi, dan penghematan biaya operasional.',
		uraian: [
			'Biaya listrik biasanya menjadi komponen terbesar dalam operasional gedung. Sebagian besar pemborosan datang dari peralatan yang bekerja di luar titik efisiennya.',
			'Kami membantu mengidentifikasi sumber pemborosan dan menyusun langkah perbaikannya.'
		],
		lingkup: [
			'Audit dan optimasi peralatan utama',
			'Program efisiensi energi gedung',
			'Penyesuaian jadwal operasi sistem utilitas',
			'Rekomendasi penggantian peralatan boros daya'
		]
	},
	{
		slug: 'procurement',
		nama: 'Procurement & Supply',
		icon: Package,
		ringkas: 'Pengadaan equipment, material, dan spare parts kebutuhan engineering.',
		uraian: [
			'Ketersediaan suku cadang menentukan berapa lama sebuah kerusakan berlangsung. Menunggu komponen datang sering memakan waktu lebih lama daripada perbaikannya sendiri.',
			'Kami membantu pengadaan material dan suku cadang sesuai spesifikasi teknis fasilitas Anda.'
		],
		lingkup: [
			'Pengadaan equipment mekanikal dan elektrikal',
			'Penyediaan material pekerjaan sipil',
			'Spare parts genset, pompa, dan panel',
			'Pengadaan material sesuai spesifikasi teknis'
		]
	}
];

export function cariLayanan(slug: string) {
	return layananList.find((l) => l.slug === slug);
}
