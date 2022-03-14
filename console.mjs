import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello NodeJS");
log.error("Hello World");

const person = {
  firstName: "Lovina",
  lastName: "Aulia",
};

log.table(person);
