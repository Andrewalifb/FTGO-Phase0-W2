// DERET GEOMETRI

/* First Method
More Efficent than the second method
*/

console.log("FIRST METHOD :");
function tentukanDeretGeometri(arr) {
  let isTrue;
  for (let i = 0; i < arr.length; i++) {
    if (i <= arr.length - 2) {
      let countCurrentIndex = arr[i] * 3;
      console.log("Curent Index :" + countCurrentIndex);
      let getCurrentIndexVal = arr[i + 1];
      console.log("Arr value :" + getCurrentIndexVal);

      isTrue = countCurrentIndex === getCurrentIndexVal;

      if (isTrue) {
        // return true;
      } else if (!isTrue) {
        break;
      }
    } else {
      break;
    }
  }
  return isTrue;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([1, 3, 4, 27, 81]));

/*Second Method*/
console.log("SECOND METHOD :");
function tentukanDeretGeometri2(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let countCurrentIndex = arr[i] * 3;
    arr2.push(countCurrentIndex);
  }
  arr2.push(arr[0]);

  arr.sort();
  arr2.sort();

  let isDeretGeometri = arr.every((value, index) => value === arr2[index]);

  if (isDeretGeometri) {
    return true;
  } else {
    return false;
  }
  // console.log(arr);
  // console.log(arr2);
}

console.log(tentukanDeretGeometri2([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri2([1, 3, 9, 27, 48]));
/*===============================================================================================================*/

// MENGELOMPOKKAN ANGKA

function mengelompokkanAngka(arr) {
  let firstGroup = []; // Grup angka-angka genap
  let secondGroup = []; // Grup angka - angka ganjil
  let thirdGroup = []; // Grup angka - angka kelipatan 3
  let allGroup = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let currentIndexVal = parseInt(arr[i]);

    if (currentIndexVal % 3 === 0) {
      thirdGroup.push(currentIndexVal);
      continue;
    } else if (currentIndexVal % 2 === 0) {
      firstGroup.push(currentIndexVal);
      continue;
    } else if (currentIndexVal % 2 !== 0) {
      secondGroup.push(currentIndexVal);
      continue;
    }
  }
  allGroup = [firstGroup, secondGroup, thirdGroup];
  return allGroup;
}

console.log(mengelompokkanAngka([2, 4, 6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
console.log(mengelompokkanAngka([]));

/*===============================================================================================================*/

// SITTING ARANGEMENT

// First Method
function sittingArrangement(person, column) {
  let kelas = [];
  let jumlahMurid = parseInt(person.length);
  let jumlahColumn = parseInt(column);
  let bangkuKosong = jumlahMurid % jumlahColumn;
  let jumlahRow = jumlahMurid + bangkuKosong;
  // console.log("BK : " + bangkuKosong);
  // console.log(jumlahRow);
  let seleksiKursi = [];

  if (jumlahColumn < 1) {
    console.log("Invalid Number");
  } else if (jumlahColumn >= 1) {
    for (let i = 0; i < jumlahRow; i++) {
      if (person[i] !== undefined) {
        seleksiKursi.push(person[i]);
      } else if (person[i] === undefined) {
        seleksiKursi.push("Kursi Kosong");
      }
    }

    for (let j = 0; j < seleksiKursi.length; j += jumlahColumn) {
      kelas.push(seleksiKursi.slice(j, j + jumlahColumn));
    }
  }

  return kelas;
}

console.log(sittingArrangement([`A`, `B`, `C`, `D`], 0));
console.log(sittingArrangement([`Juli`, `Nisa`, `Desi`, `Ulfa`, `Fuji`], 2));
console.log(sittingArrangement([`Yosia`, `Asrawi`, `Andru`], 3));
console.log(
  sittingArrangement([`Lukman`, `Adam`, `Dimas`, `Hansin`, `Orion`], 3)
);

// Second Method <=== THIS BRING MORE ACCURATE RESULT

function sittingArrangement2(person, column) {
  let kelas = [];
  let seleksi = [];
  let itemLenght = person.length + (person.length % column);

  if (column < 1) {
    return "Invalid Number";
  } else if (column >= 1) {
    for (let i = 0; i <= itemLenght; i++) {
      let student = person[i];

      if (seleksi.length !== column) {
        if (student === undefined) {
          seleksi.push("Kursi Kosong");
        } else {
          seleksi.push(student);
        }
      } else if (seleksi.length === column) {
        kelas.push(seleksi.slice());

        seleksi = [];
        if (student === undefined) {
          seleksi.push("Kursi Kosong");
        } else {
          seleksi.push(student);
        }
      }
    }

    if (person.length % column !== 0) {
      if (kelas.length < column) {
        let sisaKosong = column - kelas.length;

        for (let j = 0; j <= sisaKosong; j++) {
          if (seleksi.length !== column) {
            seleksi.push("Kursi Kosong");
          } else if (seleksi.length === column) {
            kelas.push(seleksi.slice());
            seleksi = [];
            seleksi.push("Kursi Kosong");
          }
        }
      }
    }

    return kelas;
  }
}

console.log(sittingArrangement2([`A`, `B`, `C`, `D`], 0));
console.log(sittingArrangement2([`Juli`, `Nisa`, `Desi`, `Ulfa`, `Fuji`], 2));
console.log(sittingArrangement2([`Yosia`, `Asrawi`, `Andru`], 3));
console.log(
  sittingArrangement2([`Lukman`, `Adam`, `Dimas`, `Hansin`, `Orion`], 3)
);
/*===============================================================================================================*/

// INTERESTING LADDER ARRAY MULTIDIMENSI

function ladder(word) {
  let wordToArray = word.split(``);
  let wordLadder = [];

  for (let i = wordToArray.length; i >= 1; i--) {
    wordToArray.splice(i, 1);
    wordLadder.push(wordToArray.slice());
  }
  return wordLadder;
}
console.log(ladder("developer"));
console.log(ladder("arnold"));
/*===============================================================================================================*/

// TARGET TERDEKAT

function targetTerdekat(arr) {
  let indexTarget = arr.indexOf("o");
  console.log(indexTarget);

  if (indexTarget === -1) {
    return 0;
  }

  let terdekatDariKanan = null;
  let terdekatDariKiri = null;

  for (let i = indexTarget - 1; i >= 0; i--) {
    if (arr[i] !== "") {
      terdekatDariKiri = i;
      break;
    }
  }
  for (let i = indexTarget + 1; i < arr.length; i++) {
    if (arr[i] !== "") {
      terdekatDariKanan = i;
      break;
    }
  }

  if (terdekatDariKiri !== null && terdekatDariKanan !== null) {
    if (indexTarget - terdekatDariKiri <= terdekatDariKanan - indexTarget) {
      return indexTarget - terdekatDariKiri;
    } else {
      return terdekatDariKanan - indexTarget;
    }
  } else if (terdekatDariKiri !== null) {
    return indexTarget - terdekatDariKiri;
  } else if (terdekatDariKanan !== null) {
    return terdekatDariKanan - indexTarget;
  }

  return null;
}

console.log(targetTerdekat(["", "", "o", "", "", "x", "", "x"]));
