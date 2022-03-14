function samplePromise() {
  return Promise.resolve("Muhammad Azzam Nur Alwi Mansyur");
}

const name = await samplePromise();
console.log(name);
