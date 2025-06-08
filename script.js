// Wrap everything in an IIFE to avoid global scope pollution
;(() => {
  // Check if already initialized to prevent double loading
  if (window.SapaMajalengkaInitialized) {
    console.log("SapaMajalengka already initialized")
    return
  }

  // Enhanced data structure with comprehensive information for all 26 kecamatan
  const kecamatanData = {
    majalengka: {
      name: "Majalengka",
      type: "Kecamatan",
      region: "tengah",
      area: "32.55",
      population: "89,456",
      villages: 12,
      postalCode: "45411-45418",
      coordinates: { lat: -6.8361, lng: 108.2275 },
      description: "Pusat pemerintahan Kabupaten Majalengka dengan fasilitas lengkap dan aksesibilitas terbaik",
      facilities: {
        health: ["RSUD Majalengka", "RS Hermina", "Puskesmas Majalengka Kota", "8 Klinik Pratama", "15 Apotek"],
        education: ["Universitas Majalengka", "SMAN 1 Majalengka", "SMPN 1 Majalengka", "25 SD/MI", "5 PAUD"],
        transportation: ["Terminal Majalengka", "Stasiun Majalengka", "5 SPBU", "Halte Trans Majalengka"],
        tourism: ["Alun-alun Majalengka", "Masjid Agung", "Situ Cipanten", "Museum Daerah"],
        culinary: ["Nasi Lengko Bu Imas", "Pasar Majalengka", "Food Court Modern", "25+ Warung Tradisional"],
      },
      headOffice: "Jl. Ahmad Yani No. 1",
      phone: "(0233) 281234",
      website: "majalengka.go.id",
    },
    jatiwangi: {
      name: "Jatiwangi",
      type: "Kecamatan",
      region: "utara",
      area: "28.45",
      population: "67,234",
      villages: 10,
      postalCode: "45454-45459",
      coordinates: { lat: -6.7234, lng: 108.2567 },
      description: "Pusat industri keramik dan gerabah terkenal di Jawa Barat dengan sentra kerajinan terbesar",
      facilities: {
        health: ["RS Hermina Majalengka", "Puskesmas Jatiwangi", "5 Klinik Pratama", "8 Apotek"],
        education: ["SMK Keramik Jatiwangi", "SMAN Jatiwangi", "SMPN 1-2 Jatiwangi", "18 SD/MI", "3 PAUD"],
        transportation: ["Terminal Jatiwangi", "Stasiun Jatiwangi", "3 SPBU"],
        tourism: ["Museum Keramik", "Sentra Keramik", "Galeri Seni", "Workshop Keramik"],
        culinary: ["Warung Keramik", "Pasar Jatiwangi", "Kopi Jatiwangi Heritage", "15+ Warung"],
      },
      headOffice: "Jl. Raya Jatiwangi No. 45",
      phone: "(0233) 285678",
      specialties: ["Industri Keramik", "Kerajinan Gerabah", "Seni Tradisional"],
    },
    kadipaten: {
      name: "Kadipaten",
      type: "Kecamatan",
      region: "utara",
      area: "45.67",
      population: "78,901",
      villages: 14,
      postalCode: "45452-45453",
      coordinates: { lat: -6.7456, lng: 108.1234 },
      description: "Daerah pertanian dengan potensi wisata alam dan agrowisata yang berkembang pesat",
      facilities: {
        health: ["Puskesmas Kadipaten", "3 Klinik Pratama", "6 Apotek", "2 Laboratorium"],
        education: ["SMAN Kadipaten", "SMPN 1-2 Kadipaten", "22 SD/MI", "4 PAUD"],
        transportation: ["Halte Bus Kadipaten", "2 SPBU", "Terminal Mini"],
        tourism: ["Curug Cipeuteuy", "Wisata Agro", "Kebun Teh", "Camping Ground"],
        culinary: ["Warung Sunda", "Pasar Kadipaten", "Kuliner Agro", "12+ Warung"],
      },
      headOffice: "Jl. Raya Kadipaten No. 12",
      phone: "(0233) 287890",
      specialties: ["Pertanian", "Agrowisata", "Wisata Alam"],
    },
    dawuan: {
      name: "Dawuan",
      type: "Kecamatan",
      region: "utara",
      area: "52.34",
      population: "45,678",
      villages: 11,
      postalCode: "45461-45463",
      coordinates: { lat: -6.7123, lng: 108.3456 },
      description: "Daerah pegunungan dengan udara sejuk, pemandangan indah, dan akses ke Gunung Ciremai",
      facilities: {
        health: ["Puskesmas Dawuan", "2 Klinik Pratama", "4 Apotek"],
        education: ["SMPN 1 Dawuan", "15 SD/MI", "2 PAUD"],
        transportation: ["Angkutan Pedesaan", "1 SPBU"],
        tourism: ["Gunung Ciremai", "Wisata Alam", "Jalur Pendakian", "Camping"],
        culinary: ["Warung Gunung", "Kopi Dawuan", "Kuliner Pegunungan", "8+ Warung"],
      },
      headOffice: "Jl. Raya Dawuan No. 8",
      phone: "(0233) 289012",
      specialties: ["Wisata Gunung", "Udara Sejuk", "Pendakian"],
    },
    jatitujuh: {
      name: "Jatitujuh",
      type: "Kecamatan",
      region: "utara",
      area: "38.92",
      population: "56,789",
      villages: 9,
      postalCode: "45464-45466",
      coordinates: { lat: -6.7345, lng: 108.4567 },
      description: "Daerah pertanian dengan produksi padi dan palawija, serta pengembangan teknologi pertanian",
      facilities: {
        health: ["Puskesmas Jatitujuh", "2 Klinik Pratama", "5 Apotek"],
        education: ["SMPN 1 Jatitujuh", "12 SD/MI", "3 PAUD"],
        transportation: ["Angkutan Umum", "1 SPBU"],
        tourism: ["Sawah Terasering", "Wisata Desa", "Agrowisata Padi"],
        culinary: ["Warung Sawah", "Pasar Jatitujuh", "Nasi Liwet", "10+ Warung"],
      },
      headOffice: "Jl. Raya Jatitujuh No. 15",
      phone: "(0233) 290123",
      specialties: ["Pertanian Padi", "Teknologi Pertanian", "Agrowisata"],
    },
    kertajati: {
      name: "Kertajati",
      type: "Kecamatan",
      region: "utara",
      area: "67.45",
      population: "34,567",
      villages: 8,
      postalCode: "45467-45469",
      coordinates: { lat: -6.6789, lng: 108.1789 },
      description: "Lokasi Bandara Internasional Jawa Barat (BIJB) dengan perkembangan infrastruktur modern",
      facilities: {
        health: ["Puskesmas Kertajati", "Klinik Bandara", "3 Apotek", "Medical Center BIJB"],
        education: ["SMPN 1 Kertajati", "10 SD/MI", "2 PAUD", "Sekolah Penerbangan"],
        transportation: ["Bandara BIJB", "Terminal Bandara", "Akses Tol", "3 SPBU"],
        tourism: ["Bandara BIJB", "Wisata Aviasi", "Observation Deck", "Airport Mall"],
        culinary: ["Food Court Bandara", "Warung Kertajati", "Restaurant International", "12+ Outlet"],
      },
      headOffice: "Jl. Raya Kertajati No. 20",
      phone: "(0233) 291234",
      specialties: ["Bandara Internasional", "Transportasi Udara", "Infrastruktur Modern"],
    },
    sukahaji: {
      name: "Sukahaji",
      type: "Kecamatan",
      region: "tengah",
      area: "41.23",
      population: "43,210",
      villages: 10,
      postalCode: "45419-45421",
      coordinates: { lat: -6.8567, lng: 108.1456 },
      description: "Daerah pertanian dengan potensi agrowisata dan pengembangan desa wisata",
      facilities: {
        health: ["Puskesmas Sukahaji", "2 Klinik Pratama", "4 Apotek"],
        education: ["SMPN 1 Sukahaji", "14 SD/MI", "3 PAUD"],
        transportation: ["Angkutan Pedesaan", "1 SPBU"],
        tourism: ["Agrowisata", "Wisata Desa", "Kebun Organik", "Camping Ground"],
        culinary: ["Warung Tradisional", "Pasar Sukahaji", "Kuliner Organik", "9+ Warung"],
      },
      headOffice: "Jl. Raya Sukahaji No. 25",
      phone: "(0233) 292345",
      specialties: ["Agrowisata", "Pertanian Organik", "Desa Wisata"],
    },
    rajagaluh: {
      name: "Rajagaluh",
      type: "Kecamatan",
      region: "tengah",
      area: "35.78",
      population: "52,345",
      villages: 11,
      postalCode: "45422-45424",
      coordinates: { lat: -6.8789, lng: 108.3789 },
      description: "Pusat perdagangan regional dengan pasar tradisional besar dan aktivitas ekonomi tinggi",
      facilities: {
        health: ["Puskesmas Rajagaluh", "3 Klinik Pratama", "7 Apotek", "Laboratorium"],
        education: ["SMAN Rajagaluh", "SMPN 1-2 Rajagaluh", "18 SD/MI", "4 PAUD"],
        transportation: ["Terminal Rajagaluh", "2 SPBU", "Halte Bus"],
        tourism: ["Pasar Tradisional", "Masjid Bersejarah", "Pusat Perdagangan"],
        culinary: ["Kuliner Pasar", "Warung Rajagaluh", "Food Street", "20+ Warung"],
      },
      headOffice: "Jl. Raya Rajagaluh No. 30",
      phone: "(0233) 293456",
      specialties: ["Perdagangan", "Pasar Tradisional", "Ekonomi Regional"],
    },
    cigasong: {
      name: "Cigasong",
      type: "Kecamatan",
      region: "tengah",
      area: "29.56",
      population: "38,901",
      villages: 8,
      postalCode: "45425-45427",
      coordinates: { lat: -6.9012, lng: 108.2345 },
      description: "Daerah industri kecil dan kerajinan tangan",
      facilities: {
        health: ["Puskesmas Cigasong", "1 Klinik Pratama"],
        education: ["SMPN 1 Cigasong", "12 SD/MI"],
        transportation: ["Angkutan Umum"],
        tourism: ["Sentra Kerajinan", "Wisata Industri"],
        culinary: ["Warung Kerajinan", "Pasar Cigasong"],
      },
      headOffice: "Jl. Raya Cigasong No. 18",
      phone: "(0233) 294567",
    },
    leuwimunding: {
      name: "Leuwimunding",
      type: "Kecamatan",
      region: "tengah",
      area: "44.67",
      population: "47,234",
      villages: 12,
      postalCode: "45428-45430",
      coordinates: { lat: -6.8234, lng: 108.4123 },
      description: "Daerah pertanian dengan irigasi teknis yang baik",
      facilities: {
        health: ["Puskesmas Leuwimunding", "2 Klinik Pratama"],
        education: ["SMPN 1 Leuwimunding", "16 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Wisata Sawah", "Bendungan"],
        culinary: ["Warung Sawah", "Ikan Bakar"],
      },
      headOffice: "Jl. Raya Leuwimunding No. 22",
      phone: "(0233) 295678",
    },
    palasah: {
      name: "Palasah",
      type: "Kecamatan",
      region: "tengah",
      area: "33.89",
      population: "41,567",
      villages: 9,
      postalCode: "45431-45433",
      coordinates: { lat: -6.8456, lng: 108.1789 },
      description: "Daerah perbukitan dengan potensi wisata alam",
      facilities: {
        health: ["Puskesmas Palasah", "1 Klinik Pratama"],
        education: ["SMPN 1 Palasah", "13 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Bukit Palasah", "Wisata Alam"],
        culinary: ["Warung Bukit", "Kopi Palasah"],
      },
      headOffice: "Jl. Raya Palasah No. 14",
      phone: "(0233) 296789",
    },
    cikijing: {
      name: "Cikijing",
      type: "Kecamatan",
      region: "selatan",
      area: "48.23",
      population: "54,321",
      villages: 13,
      postalCode: "45434-45436",
      coordinates: { lat: -6.9234, lng: 108.2567 },
      description: "Daerah industri tekstil dan garmen",
      facilities: {
        health: ["Puskesmas Cikijing", "3 Klinik Pratama"],
        education: ["SMAN Cikijing", "SMPN 1-2 Cikijing", "20 SD/MI"],
        transportation: ["Terminal Cikijing"],
        tourism: ["Wisata Industri", "Outlet Garmen"],
        culinary: ["Food Court", "Warung Cikijing"],
      },
      headOffice: "Jl. Raya Cikijing No. 35",
      phone: "(0233) 297890",
    },
    cingambul: {
      name: "Cingambul",
      type: "Kecamatan",
      region: "selatan",
      area: "36.45",
      population: "39,876",
      villages: 10,
      postalCode: "45437-45439",
      coordinates: { lat: -6.9456, lng: 108.3234 },
      description: "Daerah pertanian dengan produksi sayuran",
      facilities: {
        health: ["Puskesmas Cingambul", "1 Klinik Pratama"],
        education: ["SMPN 1 Cingambul", "14 SD/MI"],
        transportation: ["Angkutan Umum"],
        tourism: ["Agrowisata Sayuran", "Pasar Sayur"],
        culinary: ["Warung Sayur", "Gado-gado Cingambul"],
      },
      headOffice: "Jl. Raya Cingambul No. 16",
      phone: "(0233) 298901",
    },
    talaga: {
      name: "Talaga",
      type: "Kecamatan",
      region: "selatan",
      area: "42.78",
      population: "46,543",
      villages: 11,
      postalCode: "45440-45442",
      coordinates: { lat: -6.9678, lng: 108.1567 },
      description: "Daerah dengan danau alami dan wisata air",
      facilities: {
        health: ["Puskesmas Talaga", "2 Klinik Pratama"],
        education: ["SMPN 1 Talaga", "15 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Danau Talaga", "Wisata Air"],
        culinary: ["Ikan Bakar Talaga", "Warung Danau"],
      },
      headOffice: "Jl. Raya Talaga No. 28",
      phone: "(0233) 299012",
    },
    banjaran: {
      name: "Banjaran",
      type: "Kecamatan",
      region: "selatan",
      area: "39.12",
      population: "42,109",
      villages: 9,
      postalCode: "45443-45445",
      coordinates: { lat: -6.989, lng: 108.289 },
      description: "Daerah perbukitan dengan udara sejuk",
      facilities: {
        health: ["Puskesmas Banjaran", "1 Klinik Pratama"],
        education: ["SMPN 1 Banjaran", "12 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Bukit Banjaran", "Wisata Alam"],
        culinary: ["Warung Bukit", "Kopi Banjaran"],
      },
      headOffice: "Jl. Raya Banjaran No. 19",
      phone: "(0233) 300123",
    },
    argapura: {
      name: "Argapura",
      type: "Kecamatan",
      region: "selatan",
      area: "55.34",
      population: "37,654",
      villages: 8,
      postalCode: "45446-45448",
      coordinates: { lat: -6.92, lng: 108.35 },
      description: "Terkenal dengan Terasering Panyaweuyan yang menakjubkan",
      facilities: {
        health: ["Puskesmas Argapura", "1 Klinik Pratama"],
        education: ["SMPN 1 Argapura", "10 SD/MI"],
        transportation: ["Angkutan Wisata"],
        tourism: ["Terasering Panyaweuyan", "Wisata Foto"],
        culinary: ["Warung Terasering", "Kopi Argapura"],
      },
      headOffice: "Jl. Raya Argapura No. 21",
      phone: "(0233) 301234",
    },
    maja: {
      name: "Maja",
      type: "Kecamatan",
      region: "selatan",
      area: "31.67",
      population: "35,432",
      villages: 7,
      postalCode: "45449-45451",
      coordinates: { lat: -6.9567, lng: 108.4234 },
      description: "Daerah pertanian dengan produksi buah-buahan",
      facilities: {
        health: ["Puskesmas Maja", "1 Klinik Pratama"],
        education: ["SMPN 1 Maja", "9 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Kebun Buah", "Agrowisata"],
        culinary: ["Warung Buah", "Jus Segar Maja"],
      },
      headOffice: "Jl. Raya Maja No. 13",
      phone: "(0233) 302345",
    },
    lemahsugih: {
      name: "Lemahsugih",
      type: "Kecamatan",
      region: "selatan",
      area: "46.89",
      population: "49,876",
      villages: 12,
      postalCode: "45471-45473",
      coordinates: { lat: -6.9123, lng: 108.189 },
      description: "Daerah pertanian subur dengan irigasi yang baik",
      facilities: {
        health: ["Puskesmas Lemahsugih", "2 Klinik Pratama"],
        education: ["SMPN 1 Lemahsugih", "17 SD/MI"],
        transportation: ["Angkutan Umum"],
        tourism: ["Wisata Sawah", "Desa Wisata"],
        culinary: ["Warung Sawah", "Nasi Liwet"],
      },
      headOffice: "Jl. Raya Lemahsugih No. 26",
      phone: "(0233) 303456",
    },
    bantarujeg: {
      name: "Bantarujeg",
      type: "Kecamatan",
      region: "selatan",
      area: "34.56",
      population: "33,210",
      villages: 8,
      postalCode: "45474-45476",
      coordinates: { lat: -6.9345, lng: 108.2123 },
      description: "Daerah perbatasan dengan potensi wisata alam",
      facilities: {
        health: ["Puskesmas Bantarujeg", "1 Klinik Pratama"],
        education: ["SMPN 1 Bantarujeg", "11 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Wisata Alam", "Hutan Pinus"],
        culinary: ["Warung Pinus", "Kopi Bantarujeg"],
      },
      headOffice: "Jl. Raya Bantarujeg No. 17",
      phone: "(0233) 304567",
    },
    sindang: {
      name: "Sindang",
      type: "Kecamatan",
      region: "selatan",
      area: "40.23",
      population: "44,567",
      villages: 10,
      postalCode: "45477-45479",
      coordinates: { lat: -6.9567, lng: 108.289 },
      description: "Daerah industri kecil dan perdagangan",
      facilities: {
        health: ["Puskesmas Sindang", "2 Klinik Pratama"],
        education: ["SMPN 1 Sindang", "14 SD/MI"],
        transportation: ["Terminal Sindang"],
        tourism: ["Pasar Tradisional", "Sentra UKM"],
        culinary: ["Warung Sindang", "Pasar Kuliner"],
      },
      headOffice: "Jl. Raya Sindang No. 24",
      phone: "(0233) 305678",
    },
    sindangwangi: {
      name: "Sindangwangi",
      type: "Kecamatan",
      region: "selatan",
      area: "37.45",
      population: "38,901",
      villages: 9,
      postalCode: "45480-45482",
      coordinates: { lat: -6.9789, lng: 108.3456 },
      description: "Daerah pertanian dengan produksi padi unggulan",
      facilities: {
        health: ["Puskesmas Sindangwangi", "1 Klinik Pratama"],
        education: ["SMPN 1 Sindangwangi", "12 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Wisata Sawah", "Desa Wisata"],
        culinary: ["Warung Sawah", "Nasi Sindangwangi"],
      },
      headOffice: "Jl. Raya Sindangwangi No. 15",
      phone: "(0233) 306789",
    },
    ligung: {
      name: "Ligung",
      type: "Kecamatan",
      region: "selatan",
      area: "43.78",
      population: "51,234",
      villages: 11,
      postalCode: "45483-45485",
      coordinates: { lat: -6.9012, lng: 108.4567 },
      description: "Pusat perdagangan regional bagian selatan",
      facilities: {
        health: ["Puskesmas Ligung", "3 Klinik Pratama"],
        education: ["SMAN Ligung", "SMPN 1-2 Ligung", "19 SD/MI"],
        transportation: ["Terminal Ligung"],
        tourism: ["Pasar Besar", "Masjid Agung Ligung"],
        culinary: ["Kuliner Pasar", "Warung Ligung"],
      },
      headOffice: "Jl. Raya Ligung No. 32",
      phone: "(0233) 307890",
    },
    sumberjaya: {
      name: "Sumberjaya",
      type: "Kecamatan",
      region: "selatan",
      area: "35.67",
      population: "36,789",
      villages: 8,
      postalCode: "45486-45488",
      coordinates: { lat: -6.9234, lng: 108.1234 },
      description: "Daerah sumber mata air dengan wisata alam",
      facilities: {
        health: ["Puskesmas Sumberjaya", "1 Klinik Pratama"],
        education: ["SMPN 1 Sumberjaya", "10 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Sumber Mata Air", "Wisata Alam"],
        culinary: ["Warung Sumber", "Air Kelapa Muda"],
      },
      headOffice: "Jl. Raya Sumberjaya No. 18",
      phone: "(0233) 308901",
    },
    panyingkiran: {
      name: "Panyingkiran",
      type: "Kecamatan",
      region: "selatan",
      area: "29.89",
      population: "32,456",
      villages: 7,
      postalCode: "45489-45491",
      coordinates: { lat: -6.9456, lng: 108.2567 },
      description: "Daerah perbukitan dengan udara sejuk",
      facilities: {
        health: ["Puskesmas Panyingkiran", "1 Klinik Pratama"],
        education: ["SMPN 1 Panyingkiran", "8 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Bukit Panyingkiran", "Wisata Alam"],
        culinary: ["Warung Bukit", "Kopi Panyingkiran"],
      },
      headOffice: "Jl. Raya Panyingkiran No. 12",
      phone: "(0233) 309012",
    },
    kasokandel: {
      name: "Kasokandel",
      type: "Kecamatan",
      region: "selatan",
      area: "38.12",
      population: "40,123",
      villages: 9,
      postalCode: "45492-45494",
      coordinates: { lat: -6.9678, lng: 108.389 },
      description: "Daerah pertanian dengan irigasi tradisional",
      facilities: {
        health: ["Puskesmas Kasokandel", "1 Klinik Pratama"],
        education: ["SMPN 1 Kasokandel", "13 SD/MI"],
        transportation: ["Angkutan Pedesaan"],
        tourism: ["Wisata Sawah", "Sistem Irigasi Tradisional"],
        culinary: ["Warung Sawah", "Pecel Kasokandel"],
      },
      headOffice: "Jl. Raya Kasokandel No. 20",
      phone: "(0233) 310123",
    },
    malausma: {
      name: "Malausma",
      type: "Kecamatan",
      region: "selatan",
      area: "41.56",
      population: "43,789",
      villages: 10,
      postalCode: "45495-45497",
      coordinates: { lat: -6.989, lng: 108.1567 },
      description: "Daerah perbatasan dengan potensi wisata religi",
      facilities: {
        health: ["Puskesmas Malausma", "2 Klinik Pratama"],
        education: ["SMPN 1 Malausma", "15 SD/MI"],
        transportation: ["Angkutan Umum"],
        tourism: ["Makam Bersejarah", "Wisata Religi"],
        culinary: ["Warung Malausma", "Soto Malausma"],
      },
      headOffice: "Jl. Raya Malausma No. 23",
      phone: "(0233) 311234",
    },
  }

  // Enhanced services data with comprehensive information
  const servicesData = {
    kesehatan: {
      title: "Fasilitas Kesehatan",
      description:
        "Rumah sakit, puskesmas, klinik, apotek, dan fasilitas kesehatan lainnya dengan aksesibilitas lengkap di 26 kecamatan Kabupaten Majalengka",
      icon: "heart-pulse",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      count: "285+",
      overview: {
        totalFacilities: 285,
        hospitals: 5,
        puskesmas: 26,
        puskesmasPembantu: 45,
        clinics: 78,
        pharmacies: 95,
        laboratories: 25,
        accessibleFacilities: 268,
        emergencyServices: "24/7",
        coverage: "100% Kecamatan",
        totalBeds: "850+",
        totalDoctors: "180+",
        ambulances: "35 Unit",
      },
      services: [
        "Pelayanan Gawat Darurat 24/7",
        "Rawat Inap & Rawat Jalan",
        "Pelayanan Ibu dan Anak (KIA)",
        "Imunisasi dan Vaksinasi Lengkap",
        "Pelayanan Lansia Terpadu",
        "Rehabilitasi Medik",
        "Laboratorium Lengkap",
        "Radiologi & USG",
        "Farmasi 24 Jam",
        "Ambulans & Emergency Response",
        "Pelayanan Gigi & Mulut",
        "Kesehatan Jiwa",
        "Pelayanan KB",
        "Medical Check Up",
        "Hemodialisa",
        "Fisioterapi",
        "Konsultasi Gizi",
        "Pelayanan Home Care",
      ],
      facilities: [
        {
          name: "RSUD Majalengka",
          address: "Jl. Raya Majalengka-Cirebon No. 1",
          kecamatan: "Majalengka",
          type: "Rumah Sakit Umum Daerah",
          class: "Kelas B",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus, Parkir Difabel)",
          phone: "(0233) 281234",
          emergency: "(0233) 281235",
          operatingHours: "24 Jam",
          services: [
            "IGD",
            "Rawat Inap",
            "Poliklinik Spesialis",
            "Laboratorium",
            "Radiologi",
            "ICU",
            "NICU",
            "Hemodialisa",
            "Bedah",
            "Farmasi",
          ],
          beds: 250,
          doctors: 45,
          nurses: 180,
          specialists: ["Penyakit Dalam", "Bedah", "Anak", "Kandungan", "Mata", "THT", "Saraf", "Jantung", "Paru"],
          ambulance: "5 Unit (24 Jam)",
          parking: "300 Slot dengan 15 Slot Difabel",
          accreditation: "Akreditasi Paripurna",
          insurance: ["BPJS", "Asuransi Swasta", "Umum"],
          rating: "4.2/5",
          established: "1985",
          lat: -6.836,
          lng: 108.227,
        },
        {
          name: "RS Hermina Majalengka",
          address: "Jl. Raya Jatiwangi No. 88",
          kecamatan: "Jatiwangi",
          type: "Rumah Sakit Swasta",
          class: "Kelas B",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus)",
          phone: "(0233) 505000",
          emergency: "(0233) 505911",
          operatingHours: "24 Jam",
          services: [
            "IGD",
            "Rawat Inap VIP",
            "Poliklinik",
            "Laboratorium",
            "Radiologi",
            "ICU",
            "NICU",
            "Bedah Plastik",
            "Farmasi",
          ],
          beds: 150,
          doctors: 35,
          nurses: 120,
          specialists: ["Penyakit Dalam", "Bedah", "Anak", "Kandungan", "Mata", "THT", "Bedah Plastik", "Anestesi"],
          ambulance: "3 Unit",
          parking: "200 Slot dengan 10 Slot Difabel",
          accreditation: "Akreditasi Paripurna",
          insurance: ["BPJS", "Asuransi Swasta"],
          rating: "4.5/5",
          established: "2010",
          lat: -6.7234,
          lng: 108.2567,
        },
        {
          name: "Puskesmas Majalengka Kota",
          address: "Jl. Ahmad Yani No. 45",
          kecamatan: "Majalengka",
          type: "Puskesmas Rawat Inap",
          accessibility: "Ramp, Toilet Khusus, Parkir Difabel",
          phone: "(0233) 281567",
          operatingHours: "24 Jam (IGD), 07:00-14:00 (Poliklinik)",
          services: [
            "IGD",
            "Rawat Inap",
            "Pemeriksaan Umum",
            "KIA",
            "Imunisasi",
            "Gigi",
            "Laboratorium",
            "Farmasi",
            "Ambulans",
          ],
          beds: 20,
          doctors: 12,
          nurses: 25,
          specialists: ["Dokter Umum", "Dokter Gigi", "Bidan"],
          ambulance: "2 Unit",
          parking: "50 Slot dengan 3 Slot Difabel",
          programs: ["Posyandu", "Lansia", "TB", "Hipertensi", "Diabetes"],
          coverage: "12 Desa/Kelurahan",
          rating: "4.0/5",
          lat: -6.834,
          lng: 108.228,
        },
        {
          name: "Puskesmas Jatiwangi",
          address: "Jl. Raya Jatiwangi No. 25",
          kecamatan: "Jatiwangi",
          type: "Puskesmas Non Rawat Inap",
          accessibility: "Ramp, Toilet Khusus",
          phone: "(0233) 285678",
          operatingHours: "07:00-14:00 (Senin-Jumat), 07:00-12:00 (Sabtu)",
          services: ["Pemeriksaan Umum", "KIA", "Imunisasi", "Gigi", "Laboratorium Sederhana", "Farmasi"],
          doctors: 8,
          nurses: 15,
          specialists: ["Dokter Umum", "Dokter Gigi", "Bidan"],
          ambulance: "1 Unit",
          parking: "30 Slot",
          programs: ["Posyandu", "Lansia", "PHBS"],
          coverage: "10 Desa",
          rating: "3.8/5",
          lat: -6.7234,
          lng: 108.2567,
        },
        {
          name: "Klinik Pratama Sehat Bersama",
          address: "Jl. Veteran No. 12",
          kecamatan: "Majalengka",
          type: "Klinik Pratama",
          accessibility: "Ramp",
          phone: "(0233) 282890",
          operatingHours: "08:00-20:00 (Senin-Sabtu), 08:00-12:00 (Minggu)",
          services: ["Pemeriksaan Umum", "Gigi", "Laboratorium", "Medical Check Up", "Vaksinasi"],
          doctors: 6,
          nurses: 8,
          specialists: ["Dokter Umum", "Dokter Gigi"],
          parking: "20 Slot",
          insurance: ["BPJS", "Asuransi Swasta", "Umum"],
          rating: "4.1/5",
          established: "2015",
          lat: -6.838,
          lng: 108.225,
        },
        {
          name: "Apotek Kimia Farma Majalengka",
          address: "Jl. Ahmad Yani No. 123",
          kecamatan: "Majalengka",
          type: "Apotek",
          accessibility: "Akses Mudah",
          phone: "(0233) 283456",
          operatingHours: "08:00-21:00",
          services: ["Obat Resep", "Obat Bebas", "Alat Kesehatan", "Konsultasi Apoteker", "Delivery"],
          pharmacists: 3,
          parking: "15 Slot",
          rating: "4.3/5",
          lat: -6.835,
          lng: 108.226,
        },
      ],
    },
    pendidikan: {
      title: "Fasilitas Pendidikan",
      description:
        "Institusi pendidikan dari PAUD hingga perguruan tinggi dengan fasilitas lengkap dan aksesibilitas untuk semua kalangan di 26 kecamatan",
      icon: "graduation-cap",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      count: "650+",
      overview: {
        totalFacilities: 650,
        universities: 20,
        academies: 12,
        highSchools: 85,
        vocationalSchools: 45,
        middleSchools: 150,
        elementarySchools: 320,
        kindergartens: 18,
        accessibleFacilities: 580,
        students: "225.000+",
        teachers: "15.500+",
        libraries: "45+",
        laboratories: "180+",
      },
      services: [
        "Pendidikan Anak Usia Dini (PAUD)",
        "Pendidikan Dasar (SD/MI)",
        "Pendidikan Menengah (SMP/MTs)",
        "Pendidikan Menengah Atas (SMA/MA)",
        "Pendidikan Vokasi (SMK)",
        "Pendidikan Tinggi (Universitas/Institut)",
        "Pendidikan Khusus (SLB)",
        "Pelatihan Keterampilan",
        "Perpustakaan Digital",
        "Laboratorium Lengkap",
        "Fasilitas Olahraga",
        "Asrama Mahasiswa",
        "Program Beasiswa",
        "Pendidikan Inklusif",
        "Kursus Bahasa Asing",
        "Pelatihan Komputer",
        "Ekstrakurikuler Beragam",
        "Bimbingan Konseling",
      ],
      facilities: [
        {
          name: "SMAN 1 Majalengka",
          address: "Jl. Pendidikan No. 1",
          kecamatan: "Majalengka",
          type: "SMA Negeri",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus)",
          phone: "(0233) 283456",
          operatingHours: "07:00-15:00 (Senin-Jumat), 07:00-11:00 (Sabtu)",
          programs: ["IPA", "IPS", "Bahasa", "Lintas Minat"],
          students: 1200,
          teachers: 65,
          staff: 25,
          facilities: [
            "Lab IPA",
            "Lab Komputer",
            "Lab Bahasa",
            "Perpustakaan",
            "Lapangan Olahraga",
            "Aula",
            "Kantin",
            "Masjid",
          ],
          accreditation: "A (Unggul)",
          achievements: ["Juara OSN Provinsi 2023", "Sekolah Adiwiyata Nasional", "Juara Olimpiade Matematika"],
          extracurricular: ["Pramuka", "PMR", "Basket", "Futsal", "Teater", "Musik", "Jurnalistik"],
          tuition: "Gratis (Sekolah Negeri)",
          uniform: "Rp 300.000/set",
          rating: "4.6/5",
          established: "1965",
          lat: -6.835,
          lng: 108.223,
        },
        {
          name: "Universitas Majalengka",
          address: "Jl. K.H. Abdul Halim No. 103",
          kecamatan: "Majalengka",
          type: "Universitas Swasta",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus, Parkir Difabel)",
          phone: "(0233) 284567",
          website: "www.unma.ac.id",
          operatingHours: "07:00-21:00",
          faculties: ["Teknik", "Ekonomi", "Hukum", "Pertanian", "Keguruan", "Kesehatan"],
          programs: ["S1 (15 Prodi)", "S2 (5 Prodi)", "Diploma (8 Prodi)"],
          students: 8500,
          lecturers: 280,
          staff: 120,
          facilities: [
            "Perpustakaan Digital",
            "Lab Komputer",
            "Lab Teknik",
            "Auditorium",
            "Asrama",
            "Klinik",
            "Bank Mini",
            "Koperasi",
          ],
          accreditation: "B (Baik Sekali)",
          achievements: ["Terakreditasi BAN-PT", "Kerjasama Internasional", "Program Merdeka Belajar"],
          tuition: "Rp 3.500.000 - 8.000.000/semester",
          scholarships: ["Beasiswa Prestasi", "Beasiswa KIP", "Beasiswa Yayasan"],
          dormitory: "Tersedia (Rp 500.000/bulan)",
          rating: "4.2/5",
          established: "1984",
          lat: -6.837,
          lng: 108.23,
        },
        {
          name: "SMK Negeri 1 Jatiwangi",
          address: "Jl. Raya Jatiwangi No. 45",
          kecamatan: "Jatiwangi",
          type: "SMK Negeri",
          accessibility: "Ramp, Toilet Khusus",
          phone: "(0233) 286789",
          operatingHours: "07:00-15:30",
          majors: ["Teknik Mesin", "Teknik Elektro", "Teknik Komputer", "Akuntansi", "Pemasaran", "Multimedia"],
          students: 1500,
          teachers: 85,
          facilities: ["Workshop Mesin", "Lab Komputer", "Lab Elektro", "Perpustakaan", "Lapangan", "Kantin"],
          accreditation: "A",
          partnerships: ["Industri Keramik", "PT. Telkom", "Bank BRI", "Hotel Santika"],
          certification: ["Sertifikat Kompetensi", "Sertifikat Internasional"],
          jobPlacement: "85% Lulusan Terserap Kerja",
          tuition: "Gratis",
          rating: "4.4/5",
          lat: -6.7456,
          lng: 108.2789,
        },
        {
          name: "SMPN 1 Majalengka",
          address: "Jl. Sutisna Senjaya No. 25",
          kecamatan: "Majalengka",
          type: "SMP Negeri",
          accessibility: "Ramp, Toilet Khusus",
          phone: "(0233) 287890",
          operatingHours: "07:00-14:00",
          students: 900,
          teachers: 45,
          facilities: ["Lab IPA", "Lab Komputer", "Perpustakaan", "Lapangan Olahraga", "Mushola"],
          accreditation: "A",
          achievements: ["Juara OSN Kabupaten", "Sekolah Ramah Anak"],
          extracurricular: ["Pramuka", "Olahraga", "Seni", "Rohis"],
          tuition: "Gratis",
          rating: "4.3/5",
          lat: -6.834,
          lng: 108.225,
        },
        {
          name: "SDN Majalengka Kulon 1",
          address: "Jl. Veteran No. 78",
          kecamatan: "Majalengka",
          type: "SD Negeri",
          accessibility: "Ramp",
          phone: "(0233) 288901",
          operatingHours: "07:00-12:00",
          students: 450,
          teachers: 18,
          facilities: ["Perpustakaan", "Lab Komputer", "Lapangan", "Kantin", "UKS"],
          accreditation: "A",
          programs: ["Literasi", "Numerasi", "Pendidikan Karakter"],
          tuition: "Gratis",
          rating: "4.1/5",
          lat: -6.836,
          lng: 108.224,
        },
      ],
    },
    transportasi: {
      title: "Transportasi Umum",
      description:
        "Jaringan transportasi lengkap meliputi terminal, bandara, stasiun, halte, dan fasilitas pendukung mobilitas di seluruh kecamatan",
      icon: "bus",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      count: "125+",
      overview: {
        totalFacilities: 125,
        airports: 1,
        terminals: 12,
        trainStations: 8,
        busStops: 65,
        gasStations: 25,
        parkingAreas: 14,
        accessibleFacilities: 110,
        dailyPassengers: "45.000+",
        routes: "150+",
        fleetSize: "800+ Kendaraan",
        coverage: "26 Kecamatan",
      },
      services: [
        "Penerbangan Domestik & Internasional",
        "Transportasi Antar Kota Antar Provinsi",
        "Transportasi Antar Kota Dalam Provinsi",
        "Transportasi Lokal & Pedesaan",
        "Kereta Api Penumpang",
        "Kereta Api Barang",
        "Ojek Online",
        "Taksi & Rental",
        "Bus Sekolah",
        "Ambulans",
        "Parkir Umum",
        "Bengkel & Service",
        "SPBU & SPBE",
        "Rest Area",
        "Cargo & Logistik",
        "Travel Antar Kota",
      ],
      facilities: [
        {
          name: "Bandara Internasional Jawa Barat (BIJB)",
          address: "Kertajati, Majalengka",
          kecamatan: "Kertajati",
          type: "Bandara Internasional",
          class: "Kelas I",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus, Parkir Difabel, Kursi Roda)",
          phone: "(0233) 500000",
          emergency: "(0233) 500911",
          operatingHours: "24 Jam",
          services: ["Penerbangan Domestik", "Penerbangan Internasional", "Cargo", "Charter", "Maintenance"],
          capacity: "28 Juta Penumpang/Tahun",
          runways: "2 Runway (3.000m x 60m)",
          airlines: ["Garuda Indonesia", "Lion Air", "Citilink", "Batik Air", "AirAsia", "Scoot"],
          destinations: ["Jakarta", "Surabaya", "Medan", "Makassar", "Denpasar", "Kuala Lumpur", "Singapore"],
          facilities: ["Terminal Modern", "Hotel", "Food Court", "Duty Free", "ATM", "WiFi", "Mushola", "Nursery"],
          parking: "2.000 Slot (50 Slot Difabel)",
          security: "Tingkat Internasional",
          awards: ["Best Airport Service 2023"],
          established: "2018",
          lat: -6.6789,
          lng: 108.1789,
        },
        {
          name: "Terminal Majalengka",
          address: "Jl. Raya Terminal Majalengka",
          kecamatan: "Majalengka",
          type: "Terminal Bus Tipe A",
          accessibility: "Lengkap (Ramp, Toilet Khusus, Parkir Difabel)",
          phone: "(0233) 286789",
          operatingHours: "24 Jam",
          services: ["Bus AKAP", "Bus AKDP", "Angkot", "Ojek", "Taksi", "Travel"],
          capacity: "80 Bus Bersamaan",
          platforms: "12 Platform",
          routes: ["Jakarta", "Bandung", "Cirebon", "Tasikmalaya", "Kuningan", "Indramayu", "Subang"],
          operators: ["PO Haryanto", "PO Kramat Djati", "PO Sinar Jaya", "PO Budiman"],
          facilities: ["Ruang Tunggu AC", "Toilet", "Mushola", "Kantin", "ATM", "WiFi", "Loket Tiket", "Bagasi"],
          parking: "200 Slot (10 Slot Difabel)",
          security: "CCTV & Petugas 24 Jam",
          dailyPassengers: "5.000+ Penumpang",
          established: "1995",
          lat: -6.84,
          lng: 108.22,
        },
        {
          name: "Stasiun Jatiwangi",
          address: "Jl. Stasiun Jatiwangi",
          kecamatan: "Jatiwangi",
          type: "Stasiun Kereta Api",
          class: "Kelas III",
          accessibility: "Ramp, Toilet Khusus",
          phone: "(0233) 287654",
          operatingHours: "05:00-22:00",
          services: ["Kereta Penumpang", "Kereta Barang"],
          routes: ["Cirebon-Kroya", "Cirebon-Tegal", "Cirebon-Semarang"],
          trains: ["Ciremai Express", "Tegal Bahari", "Brantas"],
          facilities: ["Ruang Tunggu", "Toilet", "Kantin", "Loket", "Parkir"],
          platforms: "2 Platform",
          tracks: "4 Jalur",
          dailyPassengers: "800+ Penumpang",
          established: "1918",
          lat: -6.7234,
          lng: 108.2567,
        },
        {
          name: "Terminal Rajagaluh",
          address: "Jl. Raya Rajagaluh",
          kecamatan: "Rajagaluh",
          type: "Terminal Tipe B",
          accessibility: "Ramp, Toilet Khusus",
          phone: "(0233) 289012",
          operatingHours: "05:00-20:00",
          services: ["Bus AKDP", "Angkot", "Ojek"],
          capacity: "30 Bus",
          routes: ["Majalengka", "Cirebon", "Kuningan", "Indramayu"],
          facilities: ["Ruang Tunggu", "Toilet", "Kantin", "Parkir"],
          parking: "50 Slot",
          dailyPassengers: "1.500+ Penumpang",
          lat: -6.8789,
          lng: 108.3789,
        },
        {
          name: "SPBU Pertamina Majalengka",
          address: "Jl. Ahmad Yani No. 200",
          kecamatan: "Majalengka",
          type: "SPBU",
          accessibility: "Akses Mudah",
          phone: "(0233) 290123",
          operatingHours: "24 Jam",
          services: ["BBM", "Oli", "ATM", "Minimarket", "Toilet", "Mushola"],
          fuelTypes: ["Pertalite", "Pertamax", "Pertamax Turbo", "Solar", "Dexlite"],
          pumps: "8 Dispenser",
          facilities: ["Alfamart", "ATM BCA", "Toilet", "Mushola", "Parkir Luas"],
          rating: "4.2/5",
          lat: -6.835,
          lng: 108.228,
        },
      ],
    },
    umum: {
      title: "Fasilitas Umum",
      description:
        "Fasilitas publik lengkap meliputi tempat ibadah, taman, kantor pemerintah, pasar, dan sarana umum lainnya di 26 kecamatan",
      icon: "globe",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      count: "1.200+",
      overview: {
        totalFacilities: 1200,
        mosques: 650,
        churches: 25,
        temples: 8,
        parks: 65,
        governmentOffices: 95,
        markets: 78,
        libraries: 45,
        sportsCenters: 35,
        communityHalls: 85,
        cemeteries: 120,
        accessibleFacilities: 1050,
        dailyVisitors: "75.000+",
        coverage: "26 Kecamatan",
      },
      services: [
        "Tempat Ibadah Multi Agama",
        "Taman Rekreasi & Olahraga",
        "Pelayanan Administrasi",
        "Pasar Tradisional & Modern",
        "Perpustakaan Umum",
        "Pusat Olahraga",
        "Balai Pertemuan",
        "Pemakaman Umum",
        "Toilet Umum",
        "WiFi Gratis",
        "Pos Keamanan",
        "Pemadam Kebakaran",
        "Kantor Pos",
        "Bank & ATM",
        "Koperasi",
        "Wartel & Internet",
      ],
      facilities: [
        {
          name: "Alun-alun Majalengka",
          address: "Jl. Ahmad Yani (Pusat Kota)",
          kecamatan: "Majalengka",
          type: "Taman Kota",
          accessibility: "Lengkap (Ramp, Toilet Khusus, Parkir Difabel)",
          phone: "Satpol PP: (0233) 281111",
          operatingHours: "24 Jam",
          services: ["Rekreasi", "Olahraga", "Event", "Kuliner", "WiFi Gratis"],
          area: "3.5 Hektar",
          facilities: [
            "Jogging Track 800m",
            "Playground",
            "Amphitheater",
            "Toilet",
            "Parkir",
            "WiFi",
            "CCTV",
            "Pos Keamanan",
          ],
          events: ["Car Free Day (Minggu)", "Festival Budaya", "Konser", "Bazar", "Pameran"],
          security: "CCTV 24 Jam & Petugas",
          maintenance: "Harian",
          visitors: "2.000+ per hari",
          rating: "4.5/5",
          established: "1980",
          lat: -6.836,
          lng: 108.228,
        },
        {
          name: "Masjid Agung Majalengka",
          address: "Jl. Ahmad Yani No. 50",
          kecamatan: "Majalengka",
          type: "Masjid",
          accessibility: "Lengkap (Ramp, Toilet Khusus, Parkir Difabel)",
          phone: "(0233) 282345",
          operatingHours: "24 Jam",
          services: ["Sholat 5 Waktu", "Sholat Jumat", "Kajian", "TPA", "Perpustakaan"],
          capacity: "2.000 Jamaah",
          facilities: [
            "Mihrab",
            "Mimbar",
            "AC",
            "Sound System",
            "Perpustakaan",
            "TPA",
            "Toilet",
            "Parkir",
            "Tempat Wudhu",
          ],
          programs: ["Kajian Rutin", "TPA", "Santunan", "Baksos"],
          imam: "KH. Ahmad Dahlan",
          established: "1950",
          architecture: "Arsitektur Jawa Modern",
          lat: -6.835,
          lng: 108.227,
        },
        {
          name: "Pasar Majalengka",
          address: "Jl. Pasar No. 1",
          kecamatan: "Majalengka",
          type: "Pasar Tradisional",
          accessibility: "Ramp, Toilet Khusus",
          phone: "(0233) 283456",
          operatingHours: "05:00-17:00",
          services: ["Perdagangan", "Kuliner", "ATM", "Toilet", "Parkir"],
          area: "2 Hektar",
          stalls: "500+ Kios",
          categories: ["Sayuran", "Buah", "Daging", "Ikan", "Pakaian", "Elektronik", "Kuliner"],
          facilities: ["Toilet", "Mushola", "Parkir", "ATM", "Pos Keamanan", "Pemadam Kebakaran"],
          visitors: "5.000+ per hari",
          established: "1965",
          lat: -6.836,
          lng: 108.227,
        },
        {
          name: "Kantor Bupati Majalengka",
          address: "Jl. Ahmad Yani No. 1",
          kecamatan: "Majalengka",
          type: "Kantor Pemerintahan",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus)",
          phone: "(0233) 281234",
          operatingHours: "08:00-16:00 (Senin-Jumat)",
          services: ["Pelayanan Administrasi", "Perizinan", "Pengaduan", "Informasi"],
          facilities: ["Ruang Tunggu AC", "Toilet", "Parkir", "WiFi", "Kantin", "Mushola"],
          departments: ["Sekretariat", "Bagian Umum", "Bagian Hukum", "Bagian Organisasi"],
          rating: "4.0/5",
          lat: -6.836,
          lng: 108.228,
        },
        {
          name: "Perpustakaan Daerah Majalengka",
          address: "Jl. Pendidikan No. 25",
          kecamatan: "Majalengka",
          type: "Perpustakaan Umum",
          accessibility: "Lengkap (Ramp, Lift, Toilet Khusus)",
          phone: "(0233) 284567",
          operatingHours: "08:00-20:00 (Senin-Sabtu)",
          services: ["Peminjaman Buku", "Ruang Baca", "Internet", "Fotokopi", "Diskusi"],
          collections: "50.000+ Buku",
          facilities: ["Ruang Baca", "Ruang Diskusi", "Komputer", "WiFi", "AC", "Toilet", "Parkir"],
          members: "5.000+ Anggota",
          programs: ["Literasi", "Bedah Buku", "Dongeng Anak"],
          rating: "4.3/5",
          established: "1985",
          lat: -6.835,
          lng: 108.225,
        },
      ],
    },
    makanan: {
      title: "Makanan Khas & Kuliner",
      description:
        "Kekayaan kuliner tradisional dan modern yang tersebar di seluruh kecamatan dengan cita rasa autentik Majalengka",
      icon: "utensils",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      count: "450+",
      overview: {
        totalRestaurants: 450,
        traditionalFood: 35,
        restaurants: 125,
        cafes: 85,
        streetFood: 205,
        accessibleVenues: 380,
        dailyVisitors: "25.000+",
        priceRange: "Rp 3.000 - 150.000",
        halalCertified: "95%",
        deliveryService: "200+ Tempat",
      },
      services: [
        "Makanan Tradisional Khas",
        "Restoran Modern",
        "Kafe & Coffee Shop",
        "Warung Makan",
        "Street Food",
        "Catering Event",
        "Delivery & Take Away",
        "Paket Wisata Kuliner",
        "Cooking Class",
        "Food Festival",
        "Kuliner Halal",
        "Makanan Sehat",
        "Makanan Vegetarian",
        "Dessert & Bakery",
        "Minuman Tradisional",
        "Oleh-oleh Khas",
      ],
      facilities: [
        {
          name: "Nasi Lengko Bu Imas",
          address: "Jl. Pasar Majalengka No. 15",
          kecamatan: "Majalengka",
          type: "Warung Tradisional",
          accessibility: "Akses Mudah, Parkir Tersedia",
          phone: "0812-3456-7890",
          operatingHours: "06:00-14:00 (Setiap Hari)",
          services: ["Dine In", "Take Away", "Catering"],
          capacity: "40 Orang",
          specialties: ["Nasi Lengko Original", "Sambal Khas Majalengka", "Kerupuk Udang", "Es Dawet"],
          price: "Rp 8.000 - 15.000",
          established: "1985",
          awards: ["Kuliner Legendaris Majalengka", "Warisan Budaya Kuliner"],
          rating: "4.7/5",
          reviews: "500+ Review",
          halal: "Bersertifikat Halal",
          payment: ["Cash", "QRIS", "GoPay", "OVO"],
          lat: -6.836,
          lng: 108.227,
        },
        {
          name: "Doclang Pak Udin",
          address: "Jl. Veteran No. 25",
          kecamatan: "Majalengka",
          type: "Warung Tradisional",
          accessibility: "Akses Mudah",
          phone: "0813-2345-6789",
          operatingHours: "16:00-22:00 (Setiap Hari)",
          services: ["Dine In", "Take Away"],
          capacity: "30 Orang",
          specialties: ["Doclang Spesial", "Bumbu Kacang Khas", "Kerupuk Melinjo", "Tahu Gejrot", "Es Cendol"],
          price: "Rp 5.000 - 12.000",
          established: "1990",
          awards: ["Favorit Wisatawan", "Kuliner Terpopuler"],
          rating: "4.5/5",
          reviews: "300+ Review",
          halal: "Halal",
          payment: ["Cash", "QRIS"],
          lat: -6.838,
          lng: 108.225,
        },
        {
          name: "Restoran Sunda Rasa",
          address: "Jl. Ahmad Yani No. 88",
          kecamatan: "Majalengka",
          type: "Restoran",
          accessibility: "Lengkap (Ramp, Toilet Khusus, Parkir)",
          phone: "(0233) 285678",
          operatingHours: "10:00-22:00 (Setiap Hari)",
          services: ["Dine In", "Take Away", "Delivery", "Catering", "Private Dining"],
          capacity: "150 Orang",
          specialties: ["Ikan Bakar", "Ayam Bakar", "Sayur Asem", "Lalapan", "Sambal Terasi"],
          price: "Rp 15.000 - 75.000",
          facilities: ["AC", "WiFi", "Toilet", "Parkir Luas", "Mushola", "Playground"],
          established: "2005",
          rating: "4.4/5",
          reviews: "800+ Review",
          halal: "Bersertifikat Halal",
          payment: ["Cash", "Debit", "Credit", "QRIS", "GoPay", "OVO"],
          lat: -6.835,
          lng: 108.226,
        },
        {
          name: "Kopi Jatiwangi Heritage",
          address: "Jl. Raya Jatiwangi No. 123",
          kecamatan: "Jatiwangi",
          type: "Coffee Shop",
          accessibility: "Ramp, Toilet Khusus",
          phone: "0815-6789-0123",
          operatingHours: "07:00-23:00 (Setiap Hari)",
          services: ["Dine In", "Take Away", "Delivery", "WiFi", "Meeting Room"],
          capacity: "80 Orang",
          specialties: ["Kopi Robusta Lokal", "Kopi Arabika", "Pastry", "Cake", "Sandwich"],
          price: "Rp 8.000 - 45.000",
          facilities: ["AC", "WiFi", "Toilet", "Parkir", "Outdoor Seating"],
          established: "2018",
          rating: "4.6/5",
          reviews: "400+ Review",
          payment: ["Cash", "QRIS", "GoPay", "OVO", "ShopeePay"],
          lat: -6.7234,
          lng: 108.2567,
        },
        {
          name: "Pasar Kuliner Malam Majalengka",
          address: "Jl. Stasiun (Depan Alun-alun)",
          kecamatan: "Majalengka",
          type: "Food Court",
          accessibility: "Akses Mudah, Parkir Luas",
          phone: "0816-7890-1234",
          operatingHours: "17:00-24:00 (Setiap Hari)",
          services: ["Food Court", "Live Music", "Event"],
          stalls: "50+ Tenant",
          specialties: ["Aneka Kuliner Nusantara", "Seafood", "Sate", "Bakso", "Mie Ayam", "Dessert"],
          price: "Rp 5.000 - 50.000",
          facilities: ["Toilet", "Parkir", "Sound System", "Panggung"],
          visitors: "1.000+ per malam",
          established: "2020",
          rating: "4.3/5",
          lat: -6.836,
          lng: 108.228,
        },
      ],
    },
    wisata: {
      title: "Tempat Wisata",
      description:
        "Destinasi wisata beragam mulai dari alam, budaya, religi, hingga edukasi yang tersebar di seluruh kecamatan",
      icon: "mountain",
      gradient: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50",
      count: "150+",
      overview: {
        totalDestinations: 150,
        naturalTourism: 75,
        culturalTourism: 35,
        religiousTourism: 25,
        educationalTourism: 15,
        accessibleSites: 125,
        annualVisitors: "1.200.000+",
        peakSeason: "Juni - Agustus & Desember",
        averageStay: "2-3 Hari",
        tourGuides: "50+ Guide Bersertifikat",
      },
      services: [
        "Wisata Alam & Petualangan",
        "Wisata Budaya & Sejarah",
        "Wisata Religi",
        "Wisata Edukasi",
        "Wisata Kuliner",
        "Agrowisata",
        "Homestay & Penginapan",
        "Guide Lokal Bersertifikat",
        "Paket Wisata Lengkap",
        "Outbound & Team Building",
        "Photography Tour",
        "Camping & Glamping",
        "Trekking & Hiking",
        "Wisata Keluarga",
        "Wisata Minat Khusus",
        "Event & Festival",
      ],
      facilities: [
        {
          name: "Terasering Panyaweuyan",
          address: "Desa Panyaweuyan, Kec. Argapura",
          kecamatan: "Argapura",
          type: "Wisata Alam",
          accessibility: "Jalur Trekking (Sedang), Toilet, Parkir",
          phone: "0815-6789-0123",
          operatingHours: "06:00-18:00 (Setiap Hari)",
          services: ["Trekking", "Photography", "Camping", "Guide", "Homestay"],
          area: "75 Hektar",
          elevation: "800-1.200 mdpl",
          facilities: ["Viewing Point", "Toilet", "Warung", "Parkir", "Mushola", "Camping Ground", "Homestay"],
          activities: ["Sunrise Hunting", "Trekking", "Camping", "Photography", "Bird Watching"],
          ticketPrice: "Rp 15.000 (Weekday), Rp 20.000 (Weekend)",
          parkingFee: "Rp 5.000 (Motor), Rp 10.000 (Mobil)",
          bestTime: "April - September (Musim Kemarau)",
          difficulty: "Sedang (2-3 Jam Trekking)",
          established: "2015",
          awards: ["Destinasi Wisata Terpopuler Jabar 2023"],
          visitors: "150.000+ per tahun",
          rating: "4.8/5",
          reviews: "2.000+ Review",
          lat: -6.92,
          lng: 108.35,
        },
        {
          name: "Curug Muara Jaya",
          address: "Desa Muara Jaya, Kec. Banjaranyar",
          kecamatan: "Banjaranyar",
          type: "Wisata Alam",
          accessibility: "Jalur Trekking (Mudah), Toilet, Parkir",
          phone: "0816-7890-1234",
          operatingHours: "07:00-17:00 (Setiap Hari)",
          services: ["Trekking", "Swimming", "Photography", "Picnic", "Guide"],
          area: "25 Hektar",
          waterfallHeight: "35 Meter",
          facilities: ["Gazebo", "Toilet", "Warung", "Parkir", "Changing Room", "Safety Equipment"],
          activities: ["Berenang", "Trekking Ringan", "Picnic", "Photography", "Cliff Jumping"],
          ticketPrice: "Rp 10.000",
          parkingFee: "Rp 3.000 (Motor), Rp 5.000 (Mobil)",
          bestTime: "Sepanjang Tahun",
          difficulty: "Mudah (30 Menit Trekking)",
          safety: "Life Guard, P3K",
          visitors: "80.000+ per tahun",
          rating: "4.6/5",
          reviews: "1.200+ Review",
          lat: -6.95,
          lng: 108.4,
        },
        {
          name: "Situ Cipanten",
          address: "Desa Cipanten, Kec. Majalengka",
          kecamatan: "Majalengka",
          type: "Wisata Alam",
          accessibility: "Lengkap (Ramp, Toilet Khusus, Parkir Difabel)",
          phone: "0817-8901-2345",
          operatingHours: "06:00-18:00 (Setiap Hari)",
          services: ["Boating", "Fishing", "Photography", "Picnic", "Camping"],
          area: "15 Hektar Danau",
          facilities: ["Dermaga", "Perahu", "Gazebo", "Toilet", "Warung", "Parkir", "Camping Ground"],
          activities: ["Perahu", "Memancing", "Picnic", "Photography", "Camping"],
          ticketPrice: "Rp 8.000",
          boatRental: "Rp 25.000/jam",
          fishingPermit: "Rp 15.000",
          bestTime: "Sepanjang Tahun",
          visitors: "60.000+ per tahun",
          rating: "4.4/5",
          lat: -6.845,
          lng: 108.235,
        },
        {
          name: "Museum Keramik Jatiwangi",
          address: "Jl. Raya Jatiwangi No. 200",
          kecamatan: "Jatiwangi",
          type: "Wisata Edukasi",
          accessibility: "Lengkap (Ramp, Toilet Khusus, Parkir)",
          phone: "(0233) 286543",
          operatingHours: "08:00-16:00 (Selasa-Minggu)",
          services: ["Museum", "Workshop", "Souvenir", "Guide", "Edukasi"],
          collections: "500+ Koleksi Keramik",
          facilities: ["Ruang Pamer", "Workshop", "Toko Souvenir", "Toilet", "Parkir", "Kafeteria"],
          activities: ["Tur Museum", "Workshop Keramik", "Belanja Souvenir"],
          ticketPrice: "Rp 12.000 (Dewasa), Rp 8.000 (Anak)",
          workshopFee: "Rp 50.000/orang",
          established: "2010",
          visitors: "25.000+ per tahun",
          rating: "4.5/5",
          lat: -6.7234,
          lng: 108.2567,
        },
        {
          name: "Makam Syekh Abdul Qodir",
          address: "Desa Argapura, Kec. Argapura",
          kecamatan: "Argapura",
          type: "Wisata Religi",
          accessibility: "Ramp, Toilet Khusus",
          phone: "0818-9012-3456",
          operatingHours: "24 Jam",
          services: ["Ziarah", "Kajian", "Penginapan", "Makan Gratis"],
          facilities: ["Masjid", "Toilet", "Tempat Wudhu", "Parkir", "Penginapan", "Dapur Umum"],
          activities: ["Ziarah", "Sholat Berjamaah", "Kajian", "Tadarus"],
          ticketPrice: "Gratis",
          donation: "Sukarela",
          visitors: "100.000+ per tahun",
          peakSeason: "Bulan Ramadhan & Maulid",
          established: "Abad ke-16",
          rating: "4.7/5",
          lat: -6.925,
          lng: 108.355,
        },
      ],
    },
  }

  // Global variables
  const currentMap = null

  // Initialize the application
  function initializeApp() {
    console.log("DOM Content Loaded - Initializing SapaMajalengka WebGIS...")

    // Initialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
      console.log("Lucide icons initialized")
    }

    // Initialize components
    initializeMobileMenu()
    initializeServiceCards()
    initializeKecamatanGrid()
    initializeSmoothScrolling()
    initializeSearch()

    console.log("SapaMajalengka WebGIS Application Loaded Successfully")
  }

  // Initialize mobile menu
  function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn")
    const mobileMenu = document.getElementById("mobileMenu")

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden")
        const icon = mobileMenuBtn.querySelector("[data-lucide]")

        if (isHidden) {
          mobileMenu.classList.remove("hidden")
          icon.setAttribute("data-lucide", "x")
        } else {
          mobileMenu.classList.add("hidden")
          icon.setAttribute("data-lucide", "menu")
        }

        if (typeof lucide !== "undefined") {
          lucide.createIcons()
        }
      })

      // Close mobile menu when clicking on links
      const mobileLinks = mobileMenu.querySelectorAll("a")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden")
          const icon = mobileMenuBtn.querySelector("[data-lucide]")
          icon.setAttribute("data-lucide", "menu")
          if (typeof lucide !== "undefined") {
            lucide.createIcons()
          }
        })
      })
      console.log("Mobile menu initialized")
    }
  }

  // Initialize service cards
  function initializeServiceCards() {
    const serviceCards = document.querySelectorAll(".service-card")
    console.log(`Found ${serviceCards.length} service cards`)

    serviceCards.forEach((card, index) => {
      const serviceType = card.getAttribute("data-service")
      console.log(`Card ${index}: service type = ${serviceType}`)

      card.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(`Service card clicked: ${serviceType}`)

        if (serviceType && servicesData[serviceType]) {
          console.log(`Opening modal for: ${serviceType}`)
          openServiceDetailModal(serviceType)
        } else {
          console.error(`Service data not found for: ${serviceType}`)
        }
      })

      // Add keyboard accessibility
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          if (serviceType && servicesData[serviceType]) {
            openServiceDetailModal(serviceType)
          }
        }
      })

      // Make cards focusable
      card.setAttribute("tabindex", "0")
      card.setAttribute("role", "button")
      card.setAttribute("aria-label", `Lihat detail ${servicesData[serviceType]?.title || serviceType}`)
    })
  }

  // Initialize kecamatan grid
  function initializeKecamatanGrid() {
    const grid = document.getElementById("kecamatanGrid")
    if (!grid) return

    // Generate kecamatan cards
    Object.keys(kecamatanData).forEach((key) => {
      const kecamatan = kecamatanData[key]
      const card = createKecamatanCard(key, kecamatan)
      grid.appendChild(card)
    })

    console.log("Kecamatan grid initialized with " + Object.keys(kecamatanData).length + " kecamatan")
  }

  // Create kecamatan card
  function createKecamatanCard(key, kecamatan) {
    const card = document.createElement("div")
    card.className =
      "kecamatan-card cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6"
    card.setAttribute("data-kecamatan", key)
    card.setAttribute("data-region", kecamatan.region)
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")
    card.setAttribute("aria-label", `Lihat detail Kecamatan ${kecamatan.name}`)

    const regionColors = {
      utara: "from-blue-500 to-cyan-500",
      tengah: "from-green-500 to-emerald-500",
      selatan: "from-purple-500 to-pink-500",
    }

    const regionLabels = {
      utara: "Wilayah Utara",
      tengah: "Wilayah Tengah",
      selatan: "Wilayah Selatan",
    }

    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">${kecamatan.name}</h3>
          <p class="text-sm text-gray-600">${kecamatan.type}</p>
        </div>
        <span class="px-2 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${regionColors[kecamatan.region]}">
          ${regionLabels[kecamatan.region]}
        </span>
      </div>
      
      <div class="space-y-2 text-sm text-gray-600 mb-4">
        <div class="flex items-center">
          <i data-lucide="map-pin" class="h-4 w-4 mr-2 text-gray-400"></i>
          ${kecamatan.area} km²
        </div>
        <div class="flex items-center">
          <i data-lucide="users" class="h-4 w-4 mr-2 text-gray-400"></i>
          ${kecamatan.population} jiwa
        </div>
        <div class="flex items-center">
          <i data-lucide="home" class="h-4 w-4 mr-2 text-gray-400"></i>
          ${kecamatan.villages} desa/kelurahan
        </div>
      </div>
      
      <p class="text-sm text-gray-700 mb-4">${kecamatan.description}</p>
      
      <div class="flex items-center justify-between">
        <div class="flex space-x-1">
          <span class="w-2 h-2 bg-red-400 rounded-full" title="Kesehatan"></span>
          <span class="w-2 h-2 bg-green-400 rounded-full" title="Pendidikan"></span>
          <span class="w-2 h-2 bg-yellow-400 rounded-full" title="Transportasi"></span>
          <span class="w-2 h-2 bg-purple-400 rounded-full" title="Wisata"></span>
        </div>
        <i data-lucide="arrow-right" class="h-4 w-4 text-gray-400"></i>
      </div>
    `

    card.addEventListener("click", () => {
      openKecamatanDetailModal(key, kecamatan)
    })

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        openKecamatanDetailModal(key, kecamatan)
      }
    })

    return card
  }

  // Initialize search functionality
  function initializeSearch() {
    const searchInput = document.getElementById("searchKecamatan")
    const filterSelect = document.getElementById("filterKecamatan")

    if (searchInput) {
      searchInput.addEventListener("input", filterKecamatan)
    }

    if (filterSelect) {
      filterSelect.addEventListener("change", filterKecamatan)
    }
  }

  // Filter kecamatan
  function filterKecamatan() {
    const searchTerm = document.getElementById("searchKecamatan")?.value.toLowerCase() || ""
    const regionFilter = document.getElementById("filterKecamatan")?.value || ""
    const cards = document.querySelectorAll(".kecamatan-card")

    cards.forEach((card) => {
      const kecamatanKey = card.getAttribute("data-kecamatan")
      const kecamatan = kecamatanData[kecamatanKey]
      const region = card.getAttribute("data-region")

      const matchesSearch =
        kecamatan.name.toLowerCase().includes(searchTerm) || kecamatan.description.toLowerCase().includes(searchTerm)
      const matchesRegion = !regionFilter || region === regionFilter

      if (matchesSearch && matchesRegion) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  }

  // Open service detail modal
  function openServiceDetailModal(serviceType) {
    console.log("Opening modal for service: " + serviceType)
    const service = servicesData[serviceType]

    if (!service) {
      console.error("Service not found: " + serviceType)
      return
    }

    const modal = document.getElementById("serviceDetailModal")
    const modalContent = modal.querySelector(".bg-white")

    if (!modal || !modalContent) {
      console.error("Modal elements not found")
      return
    }

    // Generate comprehensive modal content
    modalContent.innerHTML = generateServiceDetailHTML(service)

    // Show modal
    modal.classList.remove("hidden")
    modal.classList.add("flex")

    // Initialize close functionality
    initializeModalClose()

    // Reinitialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }

    // Focus management for accessibility
    const closeButton = modal.querySelector("#closeServiceModal")
    if (closeButton) {
      closeButton.focus()
    }
  }

  // Generate service detail HTML
  function generateServiceDetailHTML(service) {
    return `
    <div class="p-6 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-4">
          <div class="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${service.gradient}">
            <i data-lucide="${service.icon}" class="h-8 w-8 text-white"></i>
          </div>
          <div>
            <h1 class="text-3xl font-bold mb-2">${service.title}</h1>
            <p class="text-xl text-gray-600">${service.count} Lokasi Tersedia</p>
          </div>
        </div>
        <button id="closeServiceModal" class="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Tutup modal">
          <i data-lucide="x" class="h-6 w-6"></i>
        </button>
      </div>
      
      <p class="text-lg text-gray-700 mb-8">${service.description}</p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-red-600">${service.count}</div>
          <div class="text-sm text-gray-600">Total Lokasi</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-green-600">${service.overview.totalFacilities || service.overview.totalRestaurants || service.overview.totalDestinations || service.count}</div>
          <div class="text-sm text-gray-600">Fasilitas</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-blue-600">26</div>
          <div class="text-sm text-gray-600">Kecamatan</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-purple-600">${service.overview.accessibleFacilities || service.overview.accessibleVenues || service.overview.accessibleSites || "100+"}</div>
          <div class="text-sm text-gray-600">Aksesibel</div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Layanan Tersedia</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${service.services
            .map(
              (serviceItem) => `
            <div class="flex items-center p-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${service.gradient}">
              <i data-lucide="check" class="h-4 w-4 mr-2 flex-shrink-0"></i>
              <span>${serviceItem}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

      ${generateOverviewSection(service)}
      
      ${generateLocationSection(service)}
    </div>
  `
  }

  // Tambahkan fungsi baru untuk generate section lokasi
  function generateLocationSection(service) {
    if (!service.facilities || service.facilities.length === 0) {
      return ""
    }

    return `
    <div class="bg-white border border-gray-200 rounded-lg p-6 mt-6">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 flex items-center">
        <i data-lucide="map-pin" class="h-6 w-6 mr-2 text-blue-600"></i>
        Lokasi & Fasilitas Utama
      </h2>
      <div class="space-y-6">
        ${service.facilities
          .slice(0, 5)
          .map((facility) => generateFacilityCard(facility))
          .join("")}
      </div>
      ${
        service.facilities.length > 5
          ? `
        <div class="mt-4 text-center">
          <button class="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium">
            Lihat Semua ${service.facilities.length} Lokasi
            <i data-lucide="arrow-right" class="h-4 w-4 ml-1 inline"></i>
          </button>
        </div>
      `
          : ""
      }
    </div>
  `
  }

  // Tambahkan fungsi untuk generate kartu fasilitas individual
  function generateFacilityCard(facility) {
    return `
    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div class="flex items-start justify-between mb-3">
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900 mb-1">${facility.name}</h3>
          <div class="flex items-center text-sm text-gray-600 mb-2">
            <i data-lucide="map-pin" class="h-4 w-4 mr-1"></i>
            <span>${facility.address}</span>
          </div>
          <div class="flex items-center text-sm text-gray-600 mb-2">
            <i data-lucide="building" class="h-4 w-4 mr-1"></i>
            <span>Kec. ${facility.kecamatan}</span>
            ${facility.type ? `<span class="mx-2">•</span><span>${facility.type}</span>` : ""}
          </div>
        </div>
        ${
          facility.rating
            ? `
          <div class="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            <i data-lucide="star" class="h-3 w-3 mr-1 fill-current"></i>
            ${facility.rating}
          </div>
        `
            : ""
        }
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        ${
          facility.phone
            ? `
          <div class="flex items-center text-sm text-gray-600">
            <i data-lucide="phone" class="h-4 w-4 mr-2 text-blue-500"></i>
            <span>${facility.phone}</span>
          </div>
        `
            : ""
        }
        ${
          facility.operatingHours
            ? `
          <div class="flex items-center text-sm text-gray-600">
            <i data-lucide="clock" class="h-4 w-4 mr-2 text-green-500"></i>
            <span>${facility.operatingHours}</span>
          </div>
        `
            : ""
        }
        ${
          facility.accessibility
            ? `
          <div class="flex items-center text-sm text-gray-600">
            <i data-lucide="accessibility" class="h-4 w-4 mr-2 text-purple-500"></i>
            <span>${facility.accessibility}</span>
          </div>
        `
            : ""
        }
        ${
          facility.parking
            ? `
          <div class="flex items-center text-sm text-gray-600">
            <i data-lucide="car" class="h-4 w-4 mr-2 text-orange-500"></i>
            <span>${facility.parking}</span>
          </div>
        `
            : ""
        }
      </div>

      ${
        facility.services && facility.services.length > 0
          ? `
        <div class="mb-4">
          <h4 class="text-sm font-medium text-gray-700 mb-2">Layanan:</h4>
          <div class="flex flex-wrap gap-1">
            ${facility.services
              .slice(0, 6)
              .map(
                (service) => `
              <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">${service}</span>
            `,
              )
              .join("")}
            ${
              facility.services.length > 6
                ? `
              <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">+${facility.services.length - 6} lainnya</span>
            `
                : ""
            }
          </div>
        </div>
      `
          : ""
      }

      ${
        facility.specialties && facility.specialties.length > 0
          ? `
        <div class="mb-4">
          <h4 class="text-sm font-medium text-gray-700 mb-2">Spesialisasi:</h4>
          <div class="flex flex-wrap gap-1">
            ${facility.specialties
              .map(
                (specialty) => `
              <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">${specialty}</span>
            `,
              )
              .join("")}
          </div>
        </div>
      `
          : ""
      }

      ${
        facility.price
          ? `
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-600">Kisaran Harga:</span>
          <span class="font-medium text-green-600">${facility.price}</span>
        </div>
      `
          : ""
      }

      ${
        facility.ticketPrice
          ? `
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-600">Tiket Masuk:</span>
          <span class="font-medium text-green-600">${facility.ticketPrice}</span>
        </div>
      `
          : ""
      }

      <div class="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
        <div class="flex items-center space-x-4 text-xs text-gray-500">
          ${facility.established ? `<span>Est. ${facility.established}</span>` : ""}
          ${facility.visitors ? `<span>${facility.visitors} pengunjung</span>` : ""}
          ${facility.capacity ? `<span>Kapasitas: ${facility.capacity}</span>` : ""}
        </div>
        <button class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
          Detail
          <i data-lucide="external-link" class="h-3 w-3 ml-1"></i>
        </button>
      </div>
    </div>
  `
  }

  // Format overview labels
  function formatOverviewLabel(key) {
    const labels = {
      totalFacilities: "Total Fasilitas",
      totalRestaurants: "Total Restoran",
      totalDestinations: "Total Destinasi",
      hospitals: "Rumah Sakit",
      puskesmas: "Puskesmas",
      clinics: "Klinik",
      pharmacies: "Apotek",
      universities: "Universitas",
      highSchools: "SMA/SMK",
      middleSchools: "SMP",
      elementarySchools: "SD",
      airports: "Bandara",
      terminals: "Terminal",
      trainStations: "Stasiun KA",
      busStops: "Halte Bus",
      gasStations: "SPBU",
      mosques: "Masjid",
      churches: "Gereja",
      parks: "Taman",
      markets: "Pasar",
      libraries: "Perpustakaan",
      traditionalFood: "Makanan Tradisional",
      restaurants: "Restoran",
      cafes: "Kafe",
      streetFood: "Street Food",
      naturalTourism: "Wisata Alam",
      culturalTourism: "Wisata Budaya",
      religiousTourism: "Wisata Religi",
      educationalTourism: "Wisata Edukasi",
      accessibleFacilities: "Fasilitas Aksesibel",
      accessibleVenues: "Tempat Aksesibel",
      accessibleSites: "Lokasi Aksesibel",
      emergencyServices: "Layanan Darurat",
      coverage: "Cakupan",
      totalBeds: "Total Tempat Tidur",
      totalDoctors: "Total Dokter",
      ambulances: "Ambulans",
      students: "Siswa/Mahasiswa",
      teachers: "Guru/Dosen",
      laboratories: "Laboratorium",
      dailyPassengers: "Penumpang Harian",
      routes: "Rute",
      fleetSize: "Armada",
      dailyVisitors: "Pengunjung Harian",
      priceRange: "Kisaran Harga",
      halalCertified: "Bersertifikat Halal",
      deliveryService: "Layanan Delivery",
      annualVisitors: "Pengunjung Tahunan",
      peakSeason: "Musim Ramai",
      averageStay: "Rata-rata Menginap",
      tourGuides: "Pemandu Wisata",
    }
    return labels[key] || key
  }

  // Generate overview section HTML
  function generateOverviewSection(service) {
    const overview = service.overview
    if (!overview) {
      return ""
    }

    const overviewItems = Object.keys(overview)
      .map((key) => {
        if (typeof overview[key] === "number" || typeof overview[key] === "string") {
          return `
          <div class="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <span class="text-sm font-medium text-gray-700">${formatOverviewLabel(key)}</span>
            <span class="text-lg font-semibold text-gray-900">${overview[key]}</span>
          </div>
        `
        }
        return ""
      })
      .join("")

    return `
      <div class="bg-white border border-gray-200 rounded-lg p-6 mt-6">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 flex items-center">
          <i data-lucide="eye" class="h-6 w-6 mr-2 text-blue-600"></i>
          Sekilas Informasi
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${overviewItems}
        </div>
      </div>
    `
  }
  // Open kecamatan detail modal
  function openKecamatanDetailModal(key, kecamatan) {
    console.log("Opening kecamatan modal for: " + kecamatan.name)

    const modal = document.getElementById("kecamatanDetailModal")
    const modalContent = modal.querySelector(".bg-white")

    if (!modal || !modalContent) {
      console.error("Kecamatan modal elements not found")
      return
    }

    // Generate comprehensive modal content
    modalContent.innerHTML = generateKecamatanDetailHTML(kecamatan)

    // Show modal
    modal.classList.remove("hidden")
    modal.classList.add("flex")

    // Initialize close functionality
    const closeBtn = document.getElementById("closeKecamatanModal")
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden")
        modal.classList.remove("flex")
      })
      closeBtn.focus()
    }

    // Reinitialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }
  }

  // Generate kecamatan detail HTML
  function generateKecamatanDetailHTML(kecamatan) {
    const regionColors = {
      utara: "from-blue-500 to-cyan-500",
      tengah: "from-green-500 to-emerald-500",
      selatan: "from-purple-500 to-pink-500",
    }

    return `
      <div class="p-6 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-4">
            <div class="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${regionColors[kecamatan.region]}">
              <i data-lucide="map-pin" class="h-8 w-8 text-white"></i>
            </div>
            <div>
              <h1 class="text-3xl font-bold mb-2">Kecamatan ${kecamatan.name}</h1>
              <p class="text-xl text-gray-600">${kecamatan.villages} Desa/Kelurahan</p>
            </div>
          </div>
          <button id="closeKecamatanModal" class="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Tutup modal">
            <i data-lucide="x" class="h-6 w-6"></i>
          </button>
        </div>
        
        <p class="text-lg text-gray-700 mb-8">${kecamatan.description}</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-600">${kecamatan.area}</div>
            <div class="text-sm text-gray-600">km²</div>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl font-bold text-green-600">${kecamatan.population}</div>
            <div class="text-sm text-gray-600">Penduduk</div>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl font-bold text-purple-600">${kecamatan.villages}</div>
            <div class="text-sm text-gray-600">Desa/Kelurahan</div>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <div class="text-2xl font-bold text-orange-600">${kecamatan.postalCode}</div>
            <div class="text-sm text-gray-600">Kode Pos</div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-red-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <i data-lucide="heart-pulse" class="h-5 w-5 mr-2"></i>
              Fasilitas Kesehatan
            </h3>
            <ul class="text-sm text-red-700 space-y-1">
              ${kecamatan.facilities.health.map((facility) => `<li>• ${facility}</li>`).join("")}
            </ul>
          </div>
          
          <div class="bg-green-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <i data-lucide="graduation-cap" class="h-5 w-5 mr-2"></i>
              Fasilitas Pendidikan
            </h3>
            <ul class="text-sm text-green-700 space-y-1">
              ${kecamatan.facilities.education.map((facility) => `<li>• ${facility}</li>`).join("")}
            </ul>
          </div>

          <div class="bg-yellow-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
              <i data-lucide="bus" class="h-5 w-5 mr-2"></i>
              Transportasi
            </h3>
            <ul class="text-sm text-yellow-700 space-y-1">
              ${kecamatan.facilities.transportation.map((facility) => `<li>• ${facility}</li>`).join("")}
            </ul>
          </div>

          <div class="bg-blue-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <i data-lucide="mountain" class="h-5 w-5 mr-2"></i>
              Wisata & Kuliner
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-blue-700 mb-2">Tempat Wisata:</h4>
                <ul class="text-sm text-blue-600 space-y-1">
                  ${kecamatan.facilities.tourism.map((facility) => `<li>• ${facility}</li>`).join("")}
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-700 mb-2">Kuliner:</h4>
                <ul class="text-sm text-blue-600 space-y-1">
                  ${kecamatan.facilities.culinary.map((facility) => `<li>• ${facility}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <i data-lucide="building" class="h-5 w-5 mr-2"></i>
              Informasi Kontak
            </h3>
            <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p><strong>Alamat Kantor:</strong> ${kecamatan.headOffice}</p>
                <p><strong>Telepon:</strong> ${kecamatan.phone}</p>
              </div>
              <div>
                ${kecamatan.website ? `<p><strong>Website:</strong> ${kecamatan.website}</p>` : ""}
                ${kecamatan.specialties ? `<p><strong>Keunggulan:</strong> ${kecamatan.specialties.join(", ")}</p>` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  // Initialize modal close functionality
  function initializeModalClose() {
    const serviceModal = document.getElementById("serviceDetailModal")
    const kecamatanModal = document.getElementById("kecamatanDetailModal")

    // Close service modal
    const closeServiceBtn = document.getElementById("closeServiceModal")
    if (closeServiceBtn) {
      closeServiceBtn.addEventListener("click", () => {
        serviceModal.classList.add("hidden")
        serviceModal.classList.remove("flex")
      })
    }
    // Close on click outside
    ;[serviceModal, kecamatanModal].forEach((modal) => {
      if (modal) {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.add("hidden")
            modal.classList.remove("flex")
          }
        })
      }
    })

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        ;[serviceModal, kecamatanModal].forEach((modal) => {
          if (modal && !modal.classList.contains("hidden")) {
            modal.classList.add("hidden")
            modal.classList.remove("flex")
          }
        })
      }
    })
  }

  // Smooth scrolling for navigation links
  function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]')

    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        if (targetSection) {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          const targetPosition = targetSection.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp)
  } else {
    initializeApp()
  }

  // Mark as initialized
  window.SapaMajalengkaInitialized = true
})()
