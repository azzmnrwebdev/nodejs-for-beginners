import util from "util";

const firstName = "Muhammad Azzam";
const middleName = "Nur Alwi";
const lastName = "Mansyur";

console.info(`Hello ${firstName} ${middleName} ${lastName}`);
console.info(util.format("Hello %s %s %s", firstName, middleName, lastName));

console.log("");

const person = {
  firstName: "Lovina",
  lastName: "Aulia",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
