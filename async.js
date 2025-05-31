let promise = new Promise((resolve, reject) => {
  resolve("Srestho");
})

// promise.then(value => console.log(value))

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
})

promise1.then(value => {
  alert(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value * 2), 1000)
  })
}).then(value => {
  alert(value);)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value * 2), 1000)
  })
}).then(value => {
  alert(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value * 2), 1000)
  })
}).then(value => {
  alert(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value * 2), 1000)
  })
}).then(value => console.log(value))