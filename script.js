// Fungsi untuk navigasi antar section
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        
        // Hapus class active dari semua link
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
        });
        
        // Tambah class active ke link yang diklik
        this.classList.add('active');
        
        // Sembunyikan semua section
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active-section');
        });
        
        // Tampilkan section yang dipilih
        if (target) {
            document.getElementById(`${target}-section`).classList.add('active-section');
        }
    });
});

// Tombol kembali
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active-section');
        });
        document.getElementById('berita-section').classList.add('active-section');
        
        // Set menu Home sebagai aktif
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
        });
        document.querySelector('.nav-link[data-target="berita"]').classList.add('active');
    });
});

// Reset form
document.querySelector('.btn-warning').addEventListener('click', function() {
    document.querySelectorAll('input, textarea, select').forEach(element => {
        if (element.type !== 'button') {
            element.value = '';
        }
    });
    
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(element => {
        element.checked = false;
    });
});