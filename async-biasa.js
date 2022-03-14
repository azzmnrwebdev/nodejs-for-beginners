function samplePromise() {
  return Promise.resolve("Muhammad Azzam Nur Alwi Mansyur");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
