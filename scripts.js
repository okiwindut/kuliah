document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    // Contoh data untuk Arsip Materi Kuliah
    const materiKuliah = [
        { semester: 1, title: 'Desain Dasar', description: 'Materi dasar desain grafis.' },
        { semester: 2, title: 'Fotografi', description: 'Teknik dan teori dasar fotografi.' },
        // Tambahkan lebih banyak data sesuai kebutuhan
    ];

    // Contoh data untuk Projek Magang
    const projekMagang = [
        { logo: 'logo_kreatif.png', title: 'Desain UI/UX', description: 'Projek magang desain UI/UX di PT. Kreatif.' },
        { logo: 'logo_inovatif.png', title: 'Branding', description: 'Projek magang branding perusahaan di CV. Inovatif.' },
        // Tambahkan lebih banyak data sesuai kebutuhan
    ];

    // Contoh data untuk Jurnal/Artikel
    const jurnalArtikel = [
        { title: 'Pengaruh Warna dalam Desain', description: 'Jurnal tentang pengaruh warna dalam desain.' },
        { title: 'Teori Komposisi', description: 'Artikel tentang teori komposisi dalam desain.' },
        // Tambahkan lebih banyak data sesuai kebutuhan
    ];

    // Fungsi untuk menampilkan data pada halaman
    function displayData(sectionId, data) {
        const section = document.getElementById(sectionId);
        const container = section.querySelector('.grid');

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'hover:shadow-lg', 'transition-shadow', 'duration-300');

            if (sectionId === 'projek') {
                card.innerHTML = `
                    <img src="${item.logo}" alt="Logo ${item.title}" class="w-16 h-16 mb-4">
                    <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                    <p class="text-gray-700">${item.description}</p>
                `;
            } else {
                card.innerHTML = `
                    <h3 class="text-xl font-semibold mb-2">${item.title || item.semester}</h3>
                    <p>${item.description}</p>
                `;
            }

            container.appendChild(card);
        });
    }

    // Tampilkan data pada halaman
    displayData('arsip', materiKuliah);
    displayData('projek', projekMagang);
    displayData('jurnal', jurnalArtikel);
});

// Kode akses global untuk materi kuliah
const accessCode = "YOUR_GLOBAL_ACCESS_CODE"; // Ganti dengan kode akses Anda
let targetLink = "";

// Fungsi untuk membuka modal dan menyimpan link target
function openModal(link) {
    targetLink = link;
    document.getElementById('accessCodeModal').classList.remove('hidden');
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('accessCodeModal').classList.add('hidden');
}

// Fungsi untuk menutup modal error
function closeErrorModal() {
    document.getElementById('errorModal').classList.add('hidden');
}

// Fungsi untuk menutup modal success
function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
}

// Fungsi untuk memverifikasi kode akses
function verifyAccessCode() {
    const inputCode = document.getElementById('accessCodeInput').value;
    if (inputCode === accessCode) {
        document.getElementById('accessCodeModal').classList.add('hidden');
        document.getElementById('successModal').classList.remove('hidden');
        setTimeout(() => {
            window.open(targetLink, '_blank');
            closeSuccessModal();
        }, 2000);
    } else {
        document.getElementById('accessCodeModal').classList.add('hidden');
        document.getElementById('errorModal').classList.remove('hidden');
        setTimeout(() => {
            closeErrorModal();
            document.getElementById('accessCodeModal').classList.remove('hidden');
        }, 2000);
    }
}