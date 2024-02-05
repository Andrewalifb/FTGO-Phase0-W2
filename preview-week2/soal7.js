const pasanganTerbesar = (num) => {
  var arrOfNum = Array.from(String(num), Number);
  var arrNumbers = [];

  for (i = 0; i < arrOfNum.length - 1; i++) {
    let getNum = parseInt(`${arrOfNum[i]}${arrOfNum[i + 1]}`);
    arrNumbers.push(getNum);
  }

  let biggestNumber = arrNumbers[0];

  for (j = 0; j < arrNumbers.length; j++) {
    if (arrNumbers[j] > biggestNumber) {
      biggestNumber = arrNumbers[j];
    }
  }

  return biggestNumber;
};

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99```
