import timers from "timers/promises";

console.info(new Date());
const name = await timers.setTimeout(5000, "Muhammad Azzam Nur Alwi Mansyur");
console.info(new Date());

console.info(name);
