import dns from "dns/promises";

const web = await dns.lookup("www.google.com");

console.info(web.address);
console.info(web.family);
