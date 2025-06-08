# SapaMajalengka WebGIS Landing Page

## Struktur Folder untuk Assets

Untuk menambahkan gambar/simbol custom pada fitur fasilitas, buat struktur folder sebagai berikut:

\`\`\`
project-folder/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── icons/
│   │   ├── hospital.svg          # Ikon untuk Fasilitas Kesehatan
│   │   ├── accessibility.svg     # Ikon untuk Sarana Aksesibilitas
│   │   ├── school.svg           # Ikon untuk Fasilitas Pendidikan
│   │   ├── transport.svg        # Ikon untuk Transportasi Umum
│   │   ├── public.svg           # Ikon untuk Fasilitas Umum
│   │   └── security.svg         # Ikon untuk Keamanan & Darurat
│   ├── images/
│   │   ├── logo.png
│   │   └── hero-bg.jpg
│   └── fonts/
│       └── custom-fonts.woff2
\`\`\`

## Cara Menambahkan Custom Icons

### 1. Buat Folder Assets
Buat folder `assets/icons/` di direktori yang sama dengan `index.html`

### 2. Siapkan File Ikon
Simpan file ikon dengan format:
- **SVG** (Recommended) - Scalable dan ringan
- **PNG** - Dengan background transparan
- **JPG** - Untuk foto/gambar kompleks

### 3. Nama File yang Digunakan
- `hospital.svg` - Fasilitas Kesehatan
- `accessibility.svg` - Sarana Aksesibilitas  
- `school.svg` - Fasilitas Pendidikan
- `transport.svg` - Transportasi Umum
- `public.svg` - Fasilitas Umum
- `security.svg` - Keamanan & Darurat

### 4. Ukuran Ikon yang Disarankan
- **SVG**: Viewbox 24x24 atau 32x32
- **PNG**: 64x64px hingga 128x128px
- **Format**: Transparan background

### 5. Fallback System
Kode sudah dilengkapi dengan fallback system:
- Jika gambar custom tidak ditemukan, akan menggunakan Lucide icons
- Error handling otomatis dengan `onerror` attribute

## Contoh Implementasi

\`\`\`html
<!-- Contoh untuk Fasilitas Kesehatan -->
<div class="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-pink-500">
    <img src="assets/icons/hospital.svg" 
         alt="Fasilitas Kesehatan" 
         class="h-10 w-10 text-white" 
         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <i data-lucide="building-2" class="h-8 w-8 text-white" style="display: none;"></i>
</div>
\`\`\`

## Tips untuk Ikon Custom

### Format SVG (Recommended)
\`\`\`svg
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="..." fill="currentColor"/>
</svg>
\`\`\`

### Optimasi Ikon
1. **Gunakan SVG** untuk scalability terbaik
2. **Optimasi file size** dengan tools seperti SVGO
3. **Konsisten style** - gunakan outline atau filled style
4. **Warna putih/transparan** agar sesuai dengan background gradient

## Sumber Ikon Gratis

1. **Heroicons** - https://heroicons.com/
2. **Feather Icons** - https://feathericons.com/
3. **Tabler Icons** - https://tabler-icons.io/
4. **Phosphor Icons** - https://phosphoricons.com/
5. **Lucide** - https://lucide.dev/

## Testing

Setelah menambahkan ikon:
1. Refresh halaman di browser
2. Periksa console untuk error loading
3. Test responsivitas di berbagai ukuran layar
4. Pastikan fallback icons berfungsi

## Troubleshooting

**Ikon tidak muncul?**
- Periksa path file: `assets/icons/filename.svg`
- Pastikan file exists dan readable
- Check browser console untuk error 404

**Ikon terlalu besar/kecil?**
- Adjust class size: `h-8 w-8`, `h-10 w-10`, `h-12 w-12`
- Untuk SVG, pastikan viewBox proporsional

**Warna tidak sesuai?**
- Gunakan `fill="currentColor"` di SVG
- Atau `fill="white"` untuk warna putih
