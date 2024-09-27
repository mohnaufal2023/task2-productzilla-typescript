let emasKerajaan: number = 5000;
let persediaanMakanan: number = 120;
let jumlahPrajurit: number = 200;

let tambahanEmas: number = 1500;
let pengalamanArion: number = 75;

let namaPahlawan: string = "MOH HAFIZ";
let umurPahlawan: number = 30;
let siapBertarung: boolean = true;

function tambahEmas(tambahan: number): void {
  emasKerajaan += tambahan;
}

tambahEmas(tambahanEmas);

let pengalamanBertarung: number = pengalamanArion;

function kurangiKesehatan(jumlahPrajurit: number, poinKesehatanHilang: number): number[] {
  let kesehatanPerPrajurit: number = 100;
  let kesehatanSetelahDikurangi: number = kesehatanPerPrajurit - poinKesehatanHilang;

  let kesehatanPrajurit: number[] = Array(jumlahPrajurit).fill(kesehatanSetelahDikurangi);
  return kesehatanPrajurit;
}

function rangkumanMisi(): void {
  console.log(`Nama Pahlawan: ${namaPahlawan}`);
  console.log(`Emas yang dikumpulkan: ${tambahanEmas}`);
  console.log(`Poin pengalaman yang didapat: ${pengalamanBertarung}`);
}

rangkumanMisi();
