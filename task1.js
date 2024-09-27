// Deklarasi variabel
var angka1 = 10;
var angka2 = 5;
var hasilPenjumlahan;
var hasilPengurangan;
var hasilPerkalian;
var hasilPembagian;
var teks = "selamat pagi untuk kita semua";
var isTrue = true;
var isFalse = false;
var angkaNegatif = -20;
var angkaDesimal = 3.14;
var arrayAngka = [1, 2, 3, 4, 5];
var arrayTeks = ["satu", "dua", "tiga"];
var objek = { nama: "Moh Hafiz Naufal", umur: 20 };
var variabelTakTerdefinisi;
var variabelNol = null;
var simbol = Symbol("simbol");
var bigInt = BigInt(9007199254740991);
// Method untuk penjumlahan
function penjumlahan(a, b) {
    return a + b;
}
// Method untuk pengurangan
function pengurangan(a, b) {
    return a - b;
}
// Method untuk perkalian
function perkalian(a, b) {
    return a * b;
}
// Method untuk pembagian
function pembagian(a, b) {
    if (b === 0) {
        throw new Error("Pembagi tidak boleh nol");
    }
    return a / b;
}
// Contoh penggunaan
hasilPenjumlahan = penjumlahan(angka1, angka2);
hasilPengurangan = pengurangan(angka1, angka2);
hasilPerkalian = perkalian(angka1, angka2);
hasilPembagian = pembagian(angka1, angka2);
console.log("welcome", objek);
console.log("welcome", teks);
console.log("welcome", arrayTeks);
console.log("Hasil Penjumlahan:", hasilPenjumlahan);
console.log("Hasil Pengurangan:", hasilPengurangan);
console.log("Hasil Perkalian:", hasilPerkalian);
console.log("Hasil Pembagian:", hasilPembagian);
