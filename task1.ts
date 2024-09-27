// Deklarasi variabel
let angka1: number = 10;
let angka2: number = 5;
let hasilPenjumlahan: number;
let hasilPengurangan: number;
let hasilPerkalian: number;
let hasilPembagian: number;

let teks: string = "selamat pagi untuk kita semua";
let isTrue: boolean = true;
let isFalse: boolean = false;

let angkaNegatif: number = -20;
let angkaDesimal: number = 3.14;
let arrayAngka: number[] = [1, 2, 3, 4, 5];
let arrayTeks: string[] = ["satu", "dua", "tiga"];

let objek: { nama: string; umur: number } = { nama: "Moh Hafiz Naufal", umur: 20 ,};
let variabelTakTerdefinisi: undefined;
let variabelNol: null = null;

let simbol: symbol = Symbol("simbol");
let bigInt: bigint = BigInt(9007199254740991);

// Method untuk penjumlahan
function penjumlahan(a: number, b: number): number {
    return a + b;
}

// Method untuk pengurangan
function pengurangan(a: number, b: number): number {
    return a - b;
}

// Method untuk perkalian
function perkalian(a: number, b: number): number {
    return a * b;
}

// Method untuk pembagian
function pembagian(a: number, b: number): number {
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
console.log("berhitung", arrayTeks);
console.log("Hasil Penjumlahan:", hasilPenjumlahan);
console.log("Hasil Pengurangan:", hasilPengurangan);
console.log("Hasil Perkalian:", hasilPerkalian);
console.log("Hasil Pembagian:", hasilPembagian);

