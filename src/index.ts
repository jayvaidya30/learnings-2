function sum(a: number, b: number) {
  return a + b;
}

let ans = sum(1, 2);
console.log(ans);

function delayedCall(fn: () => void) {
  setTimeout(fn, 100);
}

delayedCall(function () {
  console.log("Hello");
});
