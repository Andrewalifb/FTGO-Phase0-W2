const tentukanDeretGeometri = (arr) => {
  // console.log("Length : " + arr.length);
  let result = true;
  for (let i = 0; i < arr.length - 1; i++) {
    let nextVal = arr[i + 1];

    if (result === false) {
      return result;
    } else if (result === true) {
      if (arr[i + 1] === undefined) {
      } else if (arr[i + 1] !== undefined) {
        console.log("Current : " + arr[i] * 3);
        console.log("Next : " + nextVal);
        if (arr[i] * 3 === nextVal) {
          result = true;
        } else if (arr[i] * 3 !== nextVal) {
          result = false;
        }
      }
    }
  }
  return result;
};

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
