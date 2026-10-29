import {
  Cable,
  CloudLightning,
  Droplets,
  Flame,
  Gauge,
  Hammer,
  Package,
  Paintbrush,
  Sparkles,
  Trees,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-svelte";

export type FotoLayanan = { src: string; alt: string };

export type Layanan = {
  slug: string;
  nama: string;
  /** Judul panjang untuk H2 di halaman layanan, memuat istilah yang dicari orang. */
  judul?: string;
  // Ikon lucide memakai tipe komponen lama, jadi bentuknya diambil dari salah satunya.
  icon: typeof Zap;
  /** Kalimat pendek untuk kartu di beranda. */
  ringkas: string;
  /** Dua paragraf untuk halaman layanan. */
  uraian: string[];
  lingkup: string[];
  /** Foto pekerjaan nyata milik layanan ini. */
  foto: FotoLayanan[];
  /** Kategori galeri yang menampilkan pekerjaan ini, kalau ada. */
  galeri?: string;
};

export const layananList: Layanan[] = [
  {
    slug: "mep-electrical",
    nama: "MEP & Electrical",
    judul: "MEP & Electrical — Jasa Service Genset, Panel Listrik, dan Trafo",
    icon: Zap,
    ringkas:
      "Service genset, panel listrik, ATS, purifikasi trafo, dan utilitas gedung.",
    uraian: [
      "Sistem mekanikal, elektrikal, dan plumbing adalah tulang punggung operasional gedung. Satu gangguan kecil pada panel listrik atau sistem daya cadangan bisa menghentikan aktivitas seluruh lantai.",
      "Kami menangani pembuatan, pemeliharaan, dan perbaikan sistem MEP berdasarkan kondisi aktual lapangan, mulai dari inspeksi rutin sampai penggantian komponen.",
    ],
    lingkup: [
      "Pembuatan control panel: LVMDP, SDP, panel hydrant",
      "Maintenance panel listrik LVMDP, SDP, dan control panel",
      "Pemasangan dan perawatan ATS serta sistem daya cadangan",
      "Service genset, overhaul, dan maintenance genset",
      "Purifikasi dan maintenance transformator",
    ],
    foto: [
      {
        src: "/images/layanan/mep-electrical-1.webp",
        alt: "Panel listrik LVMDP gedung saat perawatan",
      },
      {
        src: "/images/layanan/mep-electrical-2.webp",
        alt: "Teknisi memeriksa panel kontrol kelistrikan gedung",
      },
    ],
    galeri: "Electrical Panel",
  },
  {
    slug: "maintenance-trafo",
    nama: "Maintenance Trafo",
    judul:
      "Maintenance Trafo — Jasa Purifikasi Trafo dan Retrofitting Transformator",
    icon: Cable,
    ringkas:
      "Purifikasi trafo, pengujian PUTR dan PUTM, serta retrofitting transformator.",
    uraian: [
      "Transformator yang tidak dirawat kehilangan kemampuan isolasinya secara perlahan, dan kegagalannya hampir selalu terjadi mendadak dengan biaya penggantian yang besar.",
      "Kami melakukan purifikasi minyak trafo, pengujian kelistrikan, dan retrofitting unit lama agar umur pakainya bertambah tanpa harus mengganti seluruh unit.",
    ],
    lingkup: [
      "Purifikasi trafo dan penyaringan minyak transformator",
      "Pemeriksaan dan Uji Tegangan Rendah serta Menengah (PUTR dan PUTM)",
      "Retrofitting trafo dan peremajaan komponen",
      "Maintenance trafo berkala dan pencatatan kondisi",
    ],
    foto: [
      {
        src: "/images/layanan/maintenance-trafo-1.webp",
        alt: "Tim teknisi mengerjakan maintenance transformator",
      },
      {
        src: "/images/layanan/maintenance-trafo-2.webp",
        alt: "Pembersihan bushing trafo saat purifikasi",
      },
    ],
  },
  {
    slug: "hvac",
    nama: "HVAC & Tata Udara",
    judul:
      "HVAC & Tata Udara — Jasa Maintenance Chiller, AHU, dan Sistem Pendingin Gedung",
    icon: Wind,
    ringkas:
      "Chiller, AHU, FCU, perawatan berkala, overhaul, dan audit efisiensi energi.",
    uraian: [
      "Sistem tata udara biasanya menjadi penyerap listrik terbesar di gedung komersial. Unit yang bekerja di luar titik efisiennya menaikkan tagihan tanpa menambah kenyamanan.",
      "Kami merancang, merawat, dan memperbaiki sistem tata udara terpusat, termasuk audit efisiensi untuk menemukan sumber pemborosannya.",
    ],
    lingkup: [
      "Perancangan sistem tata udara terpusat",
      "Perawatan berkala dan preventive maintenance HVAC",
      "Perbaikan dan overhaul chiller, AHU, serta FCU",
      "Retrofit dan audit efisiensi energi sistem tata udara",
    ],
    foto: [
      {
        src: "/images/layanan/hvac-1.webp",
        alt: "Unit outdoor VRF di atap gedung",
      },
      {
        src: "/images/layanan/hvac-2.webp",
        alt: "Teknisi menyervis unit AC rooftop",
      },
      {
        src: "/images/layanan/hvac-3.webp",
        alt: "Perawatan ducting dan unit tata udara gedung",
      },
    ],
  },
  {
    slug: "penangkal-petir",
    nama: "Penangkal Petir",
    judul: "Penangkal Petir — Jasa Pasang Penangkal Petir Gedung dan Pabrik",
    icon: CloudLightning,
    ringkas:
      "Jasa pasang penangkal petir, grounding, pengujian, dan perawatan berkala.",
    uraian: [
      "Indonesia termasuk wilayah dengan sambaran petir tertinggi di dunia. Gedung bertingkat, pabrik, dan menara tanpa proteksi petir yang benar berisiko kehilangan peralatan elektronik dalam satu kejadian.",
      "Kami memasang dan merawat sistem penangkal petir beserta sistem pembumiannya, termasuk pemeriksaan instalasi lama yang sudah menurun kinerjanya.",
    ],
    lingkup: [
      "Pemasangan penangkal petir untuk gedung, pabrik, dan menara",
      "Instalasi dan perbaikan sistem grounding",
      "Pengujian tahanan pembumian",
      "Inspeksi dan perawatan berkala instalasi existing",
      "Perbaikan instalasi penangkal petir yang rusak",
    ],
    foto: [
      {
        src: "/images/layanan/penangkal-petir-1.webp",
        alt: "Finial penangkal petir terpasang di puncak menara",
      },
    ],
  },
  {
    slug: "fire-protection",
    nama: "Fire Protection",
    judul:
      "Fire Protection — Jasa Instalasi Hydrant, Sprinkler, dan Fire Alarm",
    icon: Flame,
    ringkas:
      "Hydrant, sprinkler, MCFA fire alarm, dan sistem keselamatan bangunan.",
    uraian: [
      "Sistem proteksi kebakaran hanya berguna kalau benar-benar siap saat dibutuhkan. Karena itu pemeriksaan berkala jauh lebih penting daripada sekadar kelengkapan alat.",
      "Kami mengerjakan instalasi baru maupun perawatan sistem proteksi kebakaran yang sudah terpasang, termasuk integrasi panel deteksi dan alarmnya.",
    ],
    lingkup: [
      "Instalasi dan pemasangan pipa hydrant",
      "Pergantian dan perbaikan siamese connection",
      "Instalasi sistem sprinkler",
      "Integrasi sistem deteksi dan alarm kebakaran MCFA (Master Control Fire Alarm)",
      "Perawatan berkala sistem proteksi kebakaran",
    ],
    foto: [
      {
        src: "/images/layanan/fire-protection-1.webp",
        alt: "Pillar hydrant dan box hydrant terpasang di area gedung",
      },
      {
        src: "/images/layanan/fire-protection-2.webp",
        alt: "Ruang pompa hydrant dengan instalasi pipa merah",
      },
      {
        src: "/images/layanan/fire-protection-3.webp",
        alt: "Instalasi pipa hydrant dan siamese connection",
      },
      {
        src: "/images/layanan/fire-protection-4.webp",
        alt: "Uji aliran air hydrant gedung",
      },
      {
        src: "/images/layanan/fire-protection-5.webp",
        alt: "Pengelasan sambungan pipa hydrant",
      },
      {
        src: "/images/layanan/fire-protection-6.webp",
        alt: "Jalur pipa hydrant di area luar gedung",
      },
      {
        src: "/images/layanan/fire-protection-7.webp",
        alt: "Instalasi pipa hydrant di bawah struktur bangunan",
      },
      {
        src: "/images/layanan/fire-protection-8.webp",
        alt: "Bend pipa utama hydrant terpasang",
      },
      {
        src: "/images/layanan/fire-protection-9.webp",
        alt: "Pemeriksaan siamese connection hydrant di area gedung",
      },
      {
        src: "/images/layanan/fire-protection-10.webp",
        alt: "Pelepasan kopling siamese connection untuk penggantian",
      },
      {
        src: "/images/layanan/fire-protection-11.webp",
        alt: "Pemanasan sambungan saat perbaikan siamese connection",
      },
      {
        src: "/images/layanan/fire-protection-12.webp",
        alt: "Pembongkaran siamese connection lama pada pilar hydrant",
      },
      {
        src: "/images/layanan/fire-protection-13.webp",
        alt: "Pemasangan kembali siamese connection hydrant gedung",
      },
    ],
    galeri: "Pipa Hydrant",
  },
  {
    slug: "ipal-stp",
    nama: "IPAL, STP & Waste Management",
    judul: "IPAL & STP — Kontraktor IPAL dan Instalasi Pengolahan Air Limbah",
    icon: Droplets,
    ringkas:
      "Kontraktor IPAL, STP, modernisasi instalasi existing, dan pengelolaan sampah.",
    uraian: [
      "Pengolahan air limbah berkaitan langsung dengan kepatuhan lingkungan, dan masalahnya baru terasa saat baku mutu tidak terpenuhi atau inspeksi datang.",
      "Kami menangani pembuatan, perawatan, dan modernisasi instalasi pengolahan air limbah pada gedung komersial maupun kawasan industri, termasuk pengelolaan sampah dan limbah B3.",
    ],
    lingkup: [
      "Kontraktor IPAL: pembuatan dan perawatan instalasi pengolahan air limbah",
      "Instalasi dan maintenance STP",
      "Memodernisasi IPAL dan STP existing",
      "Pengelolaan sampah, TPS, dan limbah B3",
    ],
    foto: [
      {
        src: "/images/layanan/ipal-stp-2.webp",
        alt: "Penataan tempat penyimpanan limbah B3",
      },
      {
        src: "/images/layanan/ipal-stp-3.webp",
        alt: "Bangunan TPS limbah di kawasan industri",
      },
    ],
  },
  {
    slug: "plumbing",
    nama: "Plumbing & Water Supply",
    judul:
      "Plumbing & Water Supply — Jasa Instalasi Pipa PPR dan Sistem Air Bersih",
    icon: Waves,
    ringkas:
      "Modernisasi air bersih, instalasi plumbing PPR, mesin air bersih, dan PRV.",
    uraian: [
      "Tekanan air yang tidak merata antar lantai dan kebocoran pada jalur lama adalah dua keluhan yang paling sering muncul di gedung yang sudah berumur.",
      "Kami mengerjakan instalasi pipa PPR, penggantian jalur distribusi, serta pemasangan mesin dan pengatur tekanan agar pasokan air bersih stabil sampai lantai teratas.",
    ],
    lingkup: [
      "Modernisasi sistem air bersih gedung",
      "Instalasi plumbing PPR dan penggantian jalur distribusi",
      "Mesin air bersih dan pengatur tekanan air PRV",
      "Pemeriksaan pompa dan sistem distribusi air",
    ],
    foto: [
      {
        src: "/images/layanan/plumbing-1.webp",
        alt: "Instalasi pipa PPR dan tangki air bersih di atap gedung",
      },
      {
        src: "/images/layanan/plumbing-2.webp",
        alt: "Jalur distribusi air bersih rooftop",
      },
      {
        src: "/images/layanan/plumbing-3.webp",
        alt: "Pemasangan pressure reducing valve PRV",
      },
      {
        src: "/images/layanan/plumbing-4.webp",
        alt: "Riser pipa PPR dengan valve kontrol",
      },
      {
        src: "/images/layanan/plumbing-5.webp",
        alt: "Water meter dan valve pada jalur air bersih",
      },
      {
        src: "/images/layanan/plumbing-6.webp",
        alt: "Jalur pipa air bersih di plafon gedung",
      },
      {
        src: "/images/layanan/plumbing-7.webp",
        alt: "Pemasangan pipa air bersih pada area proyek",
      },
      {
        src: "/images/layanan/plumbing-8.webp",
        alt: "Stok material pipa untuk pekerjaan plumbing",
      },
      {
        src: "/images/layanan/plumbing-9.webp",
        alt: "Instalasi pipa PPR pada dinding gedung",
      },
      {
        src: "/images/layanan/plumbing-10.webp",
        alt: "Jalur pipa air bersih dan drainase di plafon",
      },
      {
        src: "/images/layanan/plumbing-11.webp",
        alt: "Gate valve stainless untuk sistem distribusi air",
      },
      {
        src: "/images/layanan/plumbing-12.webp",
        alt: "Perbaikan jalur pipa utama di area basement gedung",
      },
    ],
    galeri: "Mesin Air Bersih PRV",
  },
  {
    slug: "building-maintenance",
    nama: "Building Maintenance & Retrofitting",
    judul:
      "Building Maintenance — Jasa Maintenance Gedung, Perawatan dan Pemeliharaan",
    icon: Wrench,
    ringkas:
      "Jasa maintenance gedung, perawatan gedung, dan pemeliharaan gedung terjadwal.",
    uraian: [
      "Pemeliharaan yang terencana membuat masalah ketahuan sebelum berkembang jadi kerusakan besar. Biayanya jauh lebih terkendali dibanding memperbaiki setelah fasilitas berhenti bekerja.",
      "Program maintenance gedung kami disusun setelah assessment kondisi aktual, bukan paket seragam untuk semua bangunan.",
    ],
    lingkup: [
      "Program perawatan gedung dan pemeliharaan gedung berkala",
      "Preventive maintenance plumbing, electrical, dan utilitas gedung",
      "Upgrading sistem mekanikal dan elektrikal",
      "Retrofitting instalasi lama",
      "Safety-critical systems dan building optimization",
      "Penyediaan tenaga teknis on site",
    ],
    foto: [
      {
        src: "/images/layanan/building-maintenance-1.webp",
        alt: "Fabrikasi railing pengaman tangga gedung",
      },
      {
        src: "/images/layanan/building-maintenance-2.webp",
        alt: "Pengerjaan handrail baja pada area tangga",
      },
      {
        src: "/images/layanan/building-maintenance-3.webp",
        alt: "Pemasangan railing dan grating pada tangga gedung",
      },
      {
        src: "/images/layanan/building-maintenance-4.webp",
        alt: "Perawatan railing pengaman di area gedung",
      },
    ],
  },
  {
    slug: "cleaning-gedung",
    nama: "Cleaning Lantai & Kaca Gedung",
    judul: "Cleaning Gedung — Jasa Pembersihan Kaca Gedung Bertingkat",
    icon: Sparkles,
    ringkas:
      "Cleaning gedung, jasa pembersihan kaca gedung, dan tenaga kebersihan.",
    uraian: [
      "Kebersihan adalah hal pertama yang dinilai tamu dan penyewa saat masuk gedung. Untuk bangunan bertingkat, pembersihan kaca bagian luar menuntut peralatan dan prosedur keselamatan tersendiri.",
      "Kami menyediakan tenaga kebersihan harian maupun pekerjaan berkala sesuai kebutuhan fasilitas.",
    ],
    lingkup: [
      "Cleaning service gedung dan perkantoran",
      "Jasa pembersihan kaca gedung dan high-rise cleaning",
      "General cleaning dan cleaning lantai berkala",
      "Penyediaan tenaga kebersihan outsourcing",
    ],
    foto: [
      {
        src: "/images/layanan/cleaning-gedung-1.webp",
        alt: "Pembersihan kaca gedung bertingkat dengan rope access",
      },
      {
        src: "/images/layanan/cleaning-gedung-2.webp",
        alt: "Dua teknisi membersihkan fasad kaca gedung tinggi",
      },
    ],
  },
  {
    slug: "landscaping-taman",
    nama: "Landscaping & Taman",
    judul: "Landscaping & Taman — Jasa Pembuatan dan Perawatan Taman Kantor",
    icon: Trees,
    ringkas: "Jasa pembuatan taman, perawatan taman, dan penataan area hijau.",
    uraian: [
      "Area hijau yang terawat memengaruhi kesan pertama terhadap sebuah properti, sekaligus menjadi bagian dari kenyamanan penghuni.",
      "Kami mengerjakan pembuatan taman baru maupun perawatan rutin area hijau pada properti komersial dan kawasan industri.",
    ],
    lingkup: [
      "Jasa pembuatan taman dan penataan landscape",
      "Perawatan taman dan area hijau berkala",
      "Penataan softscape dan hardscape",
      "Pemangkasan dan penggantian tanaman",
      "Perawatan area hijau kawasan industri",
    ],
    foto: [
      {
        src: "/images/layanan/landscaping-taman-1.webp",
        alt: "Penataan area hijau dan ruang santai outdoor",
      },
      {
        src: "/images/layanan/landscaping-taman-2.webp",
        alt: "Area taman dengan shade sail pada fasilitas komersial",
      },
      {
        src: "/images/layanan/landscaping-taman-3.webp",
        alt: "Taman dan tanaman hias di depan bangunan",
      },
      {
        src: "/images/layanan/landscaping-taman-4.webp",
        alt: "Pemasangan kanopi pada area taman gedung",
      },
    ],
  },
  {
    slug: "finishing",
    nama: "Pengecatan, Waterproofing & Epoxy",
    judul:
      "Pengecatan, Waterproofing & Epoxy — Jasa Waterproofing Gedung dan Epoxy Lantai",
    icon: Paintbrush,
    ringkas:
      "Pengecatan gedung, waterproofing gedung, injeksi beton, dan epoxy lantai.",
    uraian: [
      "Pekerjaan finishing bukan sekadar soal tampilan. Lapisan pelindung yang tepat memperpanjang umur struktur dan mencegah kebocoran yang mahal diperbaiki.",
      "Kami mengerjakan pengecatan gedung bertingkat, perbaikan kebocoran dengan sistem injeksi, dan pelapisan lantai area industri.",
    ],
    lingkup: [
      "Pengecatan gedung dan fasad bangunan",
      "Jasa waterproofing atap, basement, dan area basah",
      "Perbaikan kebocoran dan rembesan dengan sistem injeksi beton",
      "Epoxy lantai dan epoxy flooring untuk pabrik dan gudang",
      "Coating pelindung permukaan",
    ],
    foto: [
      {
        src: "/images/layanan/finishing-1.webp",
        alt: "Pengecatan fasad gedung dengan scaffolding",
      },
      {
        src: "/images/layanan/finishing-2.webp",
        alt: "Hasil pengecatan fasad bangunan komersial",
      },
      {
        src: "/images/layanan/finishing-3.webp",
        alt: "Pengerjaan dinding interior gedung",
      },
      {
        src: "/images/layanan/finishing-4.webp",
        alt: "Perbaikan dan pelapisan permukaan dinding",
      },
      {
        src: "/images/layanan/finishing-5.webp",
        alt: "Hasil finishing interior koridor gedung",
      },
    ],
    galeri: "Pengecatan Gedung",
  },
  {
    slug: "renovation",
    nama: "Renovation",
    judul: "Renovation — Jasa Renovasi Gedung, Interior, dan Project Take Over",
    icon: Hammer,
    ringkas:
      "Renovasi ruang, pekerjaan arsitektur dan interior, serta project take over.",
    uraian: [
      "Gedung yang sudah berjalan bertahun-tahun sering membutuhkan penyesuaian, baik karena perubahan fungsi ruang maupun karena tampilannya sudah tertinggal.",
      "Pekerjaan renovasi kami rencanakan agar gangguan terhadap operasional gedung seminimal mungkin, termasuk mengambil alih proyek yang terhenti di tengah jalan.",
    ],
    lingkup: [
      "Renovasi ruang dan area fasilitas",
      "Pekerjaan arsitektur dan interior",
      "Project take over dari pekerjaan yang terhenti",
    ],
    foto: [
      {
        src: "/images/layanan/renovation-1.webp",
        alt: "Ruang rapat hasil renovasi interior",
      },
      {
        src: "/images/layanan/renovation-2.webp",
        alt: "Interior restoran hasil pengerjaan fit out",
      },
      {
        src: "/images/layanan/renovation-3.webp",
        alt: "Pekerjaan plafon pada renovasi ruang",
      },
      {
        src: "/images/layanan/renovation-4.webp",
        alt: "Pengerjaan interior ruang dengan scaffolding",
      },
      {
        src: "/images/layanan/renovation-5.webp",
        alt: "Proses pembangunan area komersial",
      },
      {
        src: "/images/layanan/renovation-6.webp",
        alt: "Pekerjaan struktur dan besi pada proyek renovasi",
      },
      {
        src: "/images/layanan/renovation-7.webp",
        alt: "Renovasi tampak depan bangunan komersial",
      },
      {
        src: "/images/layanan/renovation-8.webp",
        alt: "Pengerjaan area outdoor fasilitas komersial",
      },
      {
        src: "/images/layanan/renovation-9.webp",
        alt: "Pemasangan panel interior oleh tim finishing",
      },
      {
        src: "/images/layanan/renovation-10.webp",
        alt: "Pekerjaan interior pada area gelap bangunan",
      },
      {
        src: "/images/layanan/renovation-11.webp",
        alt: "Penyelesaian detail interior ruang",
      },
      {
        src: "/images/layanan/renovation-12.webp",
        alt: "Pemasangan kusen pintu pada renovasi ruang",
      },
      {
        src: "/images/layanan/renovation-13.webp",
        alt: "Bangunan selesai direnovasi dan siap digunakan",
      },
    ],
    galeri: "Project Takeover",
  },
  {
    slug: "energy-efficiency",
    nama: "Energy & Efficiency for Smart Building",
    judul:
      "Energy & Efficiency for Smart Building — Audit dan Efisiensi Energi Gedung",
    icon: Gauge,
    ringkas:
      "Program efisiensi energi, pemasangan panel surya, dan upgrading sistem energi.",
    uraian: [
      "Biaya listrik biasanya menjadi komponen terbesar dalam operasional gedung. Sebagian besar pemborosan datang dari peralatan yang bekerja di luar titik efisiennya.",
      "Kami membantu mengidentifikasi sumber pemborosan, menyusun langkah perbaikannya, sampai memasang sumber energi alternatif.",
    ],
    lingkup: [
      "Program efisiensi energi gedung",
      "Pemasangan panel surya",
      "Upgrading sistem energi existing",
      "Audit dan optimasi peralatan utama",
    ],
    foto: [],
  },
  {
    slug: "procurement",
    nama: "Material & Supply",
    judul: "Material & Supply — Pengadaan Spare Part dan Material Teknis",
    icon: Package,
    ringkas:
      "Pengadaan equipment MEP, spare part, dan material sipil sesuai spesifikasi.",
    uraian: [
      "Ketersediaan suku cadang menentukan berapa lama sebuah kerusakan berlangsung. Menunggu komponen datang sering memakan waktu lebih lama daripada perbaikannya sendiri.",
      "Kami membantu pengadaan material dan suku cadang sesuai spesifikasi teknis fasilitas Anda.",
    ],
    lingkup: [
      "Pengadaan equipment mekanikal, elektrikal, dan plumbing (MEP)",
      "Penyediaan spare part dan suku cadang",
      "Supply material sipil dan instalasi",
    ],
    foto: [
      {
        src: "/images/layanan/procurement-1.webp",
        alt: "Katalog fitting pipa yang disuplai Service Bangunan ID",
      },
      {
        src: "/images/layanan/procurement-2.webp",
        alt: "Ragam spare part dan material instalasi",
      },
    ],
  },
];

export function cariLayanan(slug: string) {
  return layananList.find((l) => l.slug === slug);
}
