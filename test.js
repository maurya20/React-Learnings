// const arr= [1,2,3,4,4,5]
// const x= arr.filter((v,i,a)=>a.indexOf(v)!==i)
// console.log(x);
function add(num) {
  const x = num.filter((v, i, a) => a.indexOf(v) !== i);
  if (num.length === num[num.length - 1]) {
    return x[0] + x[0] - 1;
  } else {
    return x[0] + num[num.length - 1] + 1;
  }
}

console.log(add([1,2,3,3,4]));
