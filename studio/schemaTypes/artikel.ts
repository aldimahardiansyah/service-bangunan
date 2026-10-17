import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'artikel',
	title: 'Artikel',
	type: 'document',
	groups: [
		{ name: 'isi', title: 'Isi Artikel', default: true },
		{ name: 'seo', title: 'SEO' },
		{ name: 'gambar', title: 'Gambar Sampul' }
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Judul artikel',
			description: 'Judul yang tampil di halaman dan di kartu daftar artikel.',
			type: 'string',
			group: 'isi',
			validation: (r) => r.required().max(120)
		}),
		defineField({
			name: 'slug',
			title: 'Slug (alamat halaman)',
			description:
				'Bagian akhir alamat, contoh: jasa-maintenance-hvac. Jangan diubah setelah artikel terbit, karena alamat lama akan mati di Google.',
			type: 'slug',
			group: 'isi',
			options: { source: 'title', maxLength: 70 },
			validation: (r) => r.required()
		}),
		defineField({
			name: 'category',
			title: 'Kategori',
			type: 'string',
			group: 'isi',
			initialValue: 'Facility Management',
			options: {
				list: [
					'Facility Management',
					'Maintenance Gedung',
					'MEP & Engineering',
					'Plumbing & Air',
					'Kebersihan & Lingkungan'
				]
			},
			validation: (r) => r.required()
		}),
		defineField({
			name: 'date',
			title: 'Tanggal terbit',
			type: 'date',
			group: 'isi',
			options: { dateFormat: 'DD MMMM YYYY' },
			initialValue: () => new Date().toISOString().slice(0, 10),
			validation: (r) => r.required()
		}),
		defineField({
			name: 'excerpt',
			title: 'Ringkasan singkat',
			description: 'Satu sampai dua kalimat. Tampil di kartu daftar artikel.',
			type: 'text',
			rows: 3,
			group: 'isi',
			validation: (r) => r.required().max(220)
		}),
		defineField({
			name: 'body',
			title: 'Isi tulisan',
			type: 'array',
			group: 'isi',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Paragraf', value: 'normal' },
						{ title: 'Judul Bagian', value: 'h2' },
						{ title: 'Sub Judul', value: 'h3' },
						{ title: 'Kutipan', value: 'blockquote' }
					],
					lists: [
						{ title: 'Poin', value: 'bullet' },
						{ title: 'Nomor', value: 'number' }
					],
					marks: {
						decorators: [
							{ title: 'Tebal', value: 'strong' },
							{ title: 'Miring', value: 'em' }
						],
						annotations: [
							{
								name: 'link',
								title: 'Tautan',
								type: 'object',
								fields: [{ name: 'href', title: 'Alamat', type: 'url' }]
							}
						]
					}
				},
				{
					type: 'image',
					title: 'Gambar di dalam tulisan',
					options: { hotspot: true },
					fields: [{ name: 'alt', title: 'Keterangan gambar', type: 'string' }]
				}
			],
			validation: (r) => r.required()
		}),

		defineField({
			name: 'seoTitle',
			title: 'Judul untuk Google',
			description:
				'Yang tampil di hasil pencarian. Usahakan di bawah 60 karakter agar tidak terpotong. Kosongkan untuk memakai judul artikel.',
			type: 'string',
			group: 'seo',
			validation: (r) => r.max(80)
		}),
		defineField({
			name: 'description',
			title: 'Deskripsi untuk Google',
			description: 'Dua kalimat yang muncul di bawah judul pada hasil pencarian. Maksimal 160 karakter.',
			type: 'text',
			rows: 3,
			group: 'seo',
			validation: (r) => r.required().max(160)
		}),

		defineField({
			name: 'cover',
			title: 'Gambar sampul',
			description: 'Pakai foto mendatar. Tampil di kartu daftar artikel dan saat dibagikan ke WhatsApp.',
			type: 'image',
			group: 'gambar',
			options: { hotspot: true },
			validation: (r) => r.required()
		}),
		defineField({
			name: 'coverAlt',
			title: 'Keterangan gambar',
			description: 'Menjelaskan isi foto untuk Google dan pembaca dengan gangguan penglihatan.',
			type: 'string',
			group: 'gambar',
			validation: (r) => r.required().max(120)
		}),
		defineField({
			name: 'coverCredit',
			title: 'Kredit foto',
			description: 'Isi hanya jika fotonya milik orang lain, contoh: pexels.com/@nama. Kosongkan untuk foto sendiri.',
			type: 'string',
			group: 'gambar'
		})
	],
	orderings: [
		{ title: 'Terbaru', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }
	],
	preview: {
		select: { title: 'title', subtitle: 'date', media: 'cover' }
	}
});
