// ==========================================
// 1. FITUR DARK MODE
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Mengambil tag <html>

themeToggleBtn.addEventListener('click', function() {
    // Mengecek tema apa yang sedang aktif sekarang
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Mode Terang';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙 Mode Gelap';
    }
});

// ==========================================
// 2. FITUR FORM VALIDATION & MODAL
// ==========================================
const form = document.getElementById('tani-form');
const inputNama = document.getElementById('nama');
const inputKomoditas = document.getElementById('komoditas');
const errorNama = document.getElementById('error-nama');
const errorKomoditas = document.getElementById('error-komoditas');

// Ambil elemen modal yang baru dibuat
const successModal = document.getElementById('success-modal');
const closeModalBtn = document.getElementById('close-modal');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true; 

    // Validasi input Nama
    if (inputNama.value.trim() === "") {
        errorNama.style.display = "block"; 
        isValid = false; 
    } else {
        errorNama.style.display = "none"; 
    }

    // Validasi input Komoditas
    if (inputKomoditas.value.trim() === "") {
        errorKomoditas.style.display = "block";
        isValid = false;
    } else {
        errorKomoditas.style.display = "none";
    }

    // Jika semua input valid, TAMPILKAN MODAL DI TENGAH LAYAR
    if (isValid === true) {
        successModal.style.display = "flex"; // Mengubah display dari none ke flex agar di tengah
        form.reset(); // Mengosongkan isian form kembali
    }
});

// Fungsi untuk menutup modal saat tombol "Tutup" diklik
closeModalBtn.addEventListener('click', function() {
    successModal.style.display = "none";
});

// Tambahan bonus: Menutup modal jika user klik area gelap di luar kotak putih
window.addEventListener('click', function(event) {
    if (event.target === successModal) {
        successModal.style.display = "none";
    }
});