var x = 15;

{
  var x = 6;
  console.log("inside>>>", x);
}
console.log("outside>>>", x);
// function getUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

// myArray = ["test1", "test2", "test3", "test1", "test6", "test2"];
// const unique = myArray.filter(getUnique);

// console.log(unique);

// /// alternate method
// let unique2 = [...new Set(myArray)];
// console.log("u2>>>>", unique2);

// function getUnq(arr) {
//   return [...new Set(arr)];
// }

// function heigh(arr) {
//   let len = arr.length,
//     max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//       console.log("???", max);
//     }
//   }
//   return max;
// }

// let arr = [1, 4, 6, 8, 89];
// console.log(heigh(arr));
