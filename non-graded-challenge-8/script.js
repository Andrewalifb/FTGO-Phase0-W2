// // Looping : Laundry Day

// for (let i = 0; i <= 20; i++) {
//   console.log(`Baju yang telah dimasukkan : ${i}`);
//   if (i == 20) {
//     console.log("TOMBOL POWER MESIN CUCI SUDAH MENYALA");
//   } else {
//     console.log("Masukkan lebih banyak baju");
//   }
// }

// // Looping :I Love Coding
// // FOR LOOP
// console.log("LOOPING FOR PERTAMA");
// for (let i = 0; i <= 20; i++) {
//   console.log(`${i}. I Love Coding`);
// }

// console.log("LOOPING FOR KEDUA");
// for (let i = 20; i > 0; i--) {
//   console.log(`${i}. I Will Become Fullstack Developer`);
// }

// // WHILE LOOP
// console.log("LOOPING WHILE PERTAMA");
// let i = 2;
// while (i <= 20) {
//   console.log(`${i}. I Love Coding`);
//   i += 2;
// }
// console.log("LOOPING WHILE KEDUA");
// let j = 14;
// while (j >= 2) {
//   console.log(`${j}. I Love Coding`);
//   j -= 2;
// }

// // Looping : Odd Even Numbers

// // 1.
// console.log("LIST GANJIL GENAP :");
// console.log("1. :");
// for (let i = 1; i <= 100; i += 3) {
//   let nilai = parseInt(i);

//   if (nilai % 2 == 0) {
//     console.log(`${i} - genap`);
//   } else if (nilai % 2 != 0) {
//     console.log(`${i} - ganjil`);
//   }
// }

// // 2.
// console.log("2. : Mencari apakah i merupakan faktor perkalian 3");
// for (let i = 50; i <= 200; i += 5) {
//   let nilai = parseInt(i);

//   if (nilai % 3 == 0) {
//     console.log(`${i} - faktor 3`);
//   } else if (nilai % 3 != 0) {
//     console.log(`${i} - tidak bisa dibagi 3`);
//   }
// }

// // 3.
// console.log("3. : Mencari apakah i habis dibagi 8");
// for (let i = 100; i <= 200; i += 7) {
//   let nilai = parseInt(i);

//   if (nilai % 8 === 0) {
//     console.log(i);
//   }
// }

// // Looping : Asteriks
// // 1. Menyusun bagian bintang
// let rows1 = 3;
// if (!isNaN(rows1) && rows1 > 0) {
//   for (i = 0; i < rows1; i++) {
//     console.log("*");
//   }
// }

// // 2. Menyusun Barisan Bintang Dengan Nested Looping
// let rows2 = 1;

// if (!isNaN(rows2) && rows2 > 0) {
//   let simbol = [];
//   for (i = 1; i <= rows2; i++) {
//     for (j = 1; j <= rows2; j++) {
//       simbol.push(`*`);
//     }
//     console.log(simbol.join(` `));
//     simbol.length = 0;
//   }
// }

// //3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// let rows3 = 20;

// if (!isNaN(rows3) && rows3 > 0) {
//   let simbol = [];
//   for (i = 1; i <= rows3; i++) {
//     simbol.length = 0;
//     for (j = 1; j <= i; j++) {
//       simbol.push(`*`);
//     }
//     console.log(simbol.join(` `));
//   }
// }

// 4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
let rows4 = 10;

if (!isNaN(rows4) && rows4 > 0) {
  let simbol = [];
  for (i = 1; i <= rows4; i++) {
    simbol.length = 0;
    for (j = rows4; j >= i; j--) {
      simbol.push(`*`);
    }
    console.log(simbol.join(` `));
  }
}

// i = 1;

// while (i <= 20) {
//   console.log(`Halo, saya orang ke ${i}`);
//   i++;
// }

// for (j = 1; j <= 20; j++) {
//   console.log(`Halo, saya orang ke ${j}`);
// }

// j = 1;
// let hurufO = [];
// while (j <= 20) {
//   if (j % 2 != 0) {
//     for (k = 1; k <= j; k++) {
//       hurufO.push(`OOOO`);
//     }
//     console.log(hurufO.join(` `));
//     hurufO.length = 0;
//   } else {
//   }
//   j++;
// }
