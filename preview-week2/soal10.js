class Mobil {
  constructor(merek, harga, warna, bensin, jumlahRoda) {
    this.merek = merek;
    this.harga = harga;
    this.warna = warna;
    this.bensin = bensin;
    this.jumlahRoda = jumlahRoda;
  }

  tampilkanSpesifikasi() {
    console.log(
      `Merek : ${this.merek}, Harga : ${this.harga}, Warna : ${this.warna}, Bensin : ${this.bensin} dan Jumlah Roda : ${this.jumlahRoda}`
    );
  }

  jualMobil() {
    console.log(`Harga Mobil : ${this.harga - (this.harga * 20) / 100}`);
  }
}

const hando = new Mobil("Hando", 300000000, "merah", "solar", 4);
console.log(hando.tampilkanSpesifikasi());
console.log(hando.jualMobil());
