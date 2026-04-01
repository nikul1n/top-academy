console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3));
}, 0);

new Promise((resolve) => {
  console.log(4);
  resolve(5);
  console.log(6);
}).then((res) => {
  console.log(res);
  clearTimeout(setTimeout(() => {
    console.log(7);
  }, 0));
});

Promise.resolve().then(() => console.log(8));

console.log(9);