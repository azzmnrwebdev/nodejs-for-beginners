const buffer = Buffer.from("Muhammad Azzam Nur Alwi Mansyur", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));

const bufferBase64 = Buffer.from(
  "TXVoYW1tYWQgQXp6YW0gTnVyIEFsd2kgTWFuc3l1cg==",
  "base64"
);

console.info(bufferBase64.toString("utf8"));
