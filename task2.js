
var emasKerajaan = 5000;
var persediaanMakanan = 120;
var jumlahPrajurit = 200;

var tambahanEmas = 1500;
var pengalamanArion = 75;

var namaPahlawan = "MOH HAFIZ";
var umurPahlawan = 30;
var siapBertarung = true;

function tambahEmas(tambahan) {
    emasKerajaan += tambahan;
}

tambahEmas(tambahanEmas);

var pengalamanBertarung = pengalamanArion;

function kurangiKesehatan(jumlahPrajurit, poinKesehatanHilang) {
    var kesehatanPerPrajurit = 100;
    var kesehatanSetelahDikurangi = kesehatanPerPrajurit - poinKesehatanHilang;
    // Menghitung kesehatan tiap prajurit setelah luka
    var kesehatanPrajurit = Array(jumlahPrajurit).fill(kesehatanSetelahDikurangi);
    return kesehatanPrajurit;
}
// Fungsi untuk menampilkan rangkuman hasil misi 
function rangkumanMisi() {
    console.log("Nama Pahlawan: ".concat(namaPahlawan));
    console.log("Emas yang dikumpulkan: ".concat(tambahanEmas));
    console.log("Poin pengalaman yang didapat: ".concat(pengalamanBertarung));
}

rangkumanMisi();
