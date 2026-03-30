// Konfigurasi Jam Result Pasaran (Format 24 Jam)
const dataPasaran = [
    { nama: "SYDNEY", jam: "13:50:00" },
    { nama: "SINGAPORE", jam: "17:45:00" },
    { nama: "HONGKONG", jam: "23:00:00" },
    { nama: "TOTO WUHAN", jam: "21:00:00" },
    { nama: "HK SIANG", jam: "11:00:00" },
    { nama: "MALAYSIA", jam: "15:00:00" }
];

function updateCountdown() {
    const sekarang = new Date();
    let containerHTML = '';

    dataPasaran.forEach(pasaran => {
        // Tentukan waktu target hari ini
        let target = new Date(sekarang.toDateString() + ' ' + pasaran.jam);

        // Jika jam result sudah lewat, pasang target untuk besok
        if (sekarang > target) {
            target.setDate(target.getDate() + 1);
        }

        const selisih = target - sekarang;

        // Hitung jam, menit, detik
        const jam = Math.floor(selisih / (1000 * 60 * 60)).toString().padStart(2, '0');
        const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const detik = Math.floor((selisih % (1000 * 60)) / 1000).toString().padStart(2, '0');

        containerHTML += `
            <div class="timer-card">
                <h4>${pasaran.nama}</h4>
                <div class="countdown">${jam}:${menit}:${detik}</div>
            </div>
        `;
    });

    document.getElementById('timers').innerHTML = containerHTML;
}

// Jalankan fungsi setiap 1 detik
setInterval(updateCountdown, 1000);

// Panggil sekali saat load agar tidak ada delay kosong
updateCountdown();
const container = document.getElementById('dollar-container');

function createDollar() {
    const dollar = document.createElement('div');
    dollar.innerText = '$';
    dollar.classList.add('dollar');
    
    // Posisi horizontal acak
    dollar.style.left = Math.random() * 100 + "vw";
    
    // Kecepatan jatuh acak (antara 3 - 7 detik)
    const duration = Math.random() * 4 + 3;
    dollar.style.animationDuration = duration + "s";
    
    // Ukuran acak
    dollar.style.fontSize = Math.random() * 20 + 10 + "px";
    
    container.appendChild(dollar);

    // Hapus elemen setelah animasi selesai agar tidak membebani RAM
    setTimeout(() => {
        dollar.remove();
    }, duration * 1000);
}

// Munculkan dollar setiap 300ms
setInterval(createDollar, 300);