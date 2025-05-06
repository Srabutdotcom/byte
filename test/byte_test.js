import { Byte } from "../src/byte.js";

const test = Byte.fromHex(`33 ad 0a 1c 60 7e c0 3b 09 e6 cd 98 93 68 0c
   e2 10 ad f3 00 aa 1f 26 60 e1 b2 2e 10 f1 70 f9 2a`);

console.log("toBase64 ", test.toBase64())
console.log("toBase64Url ", test.toBase64Url())
console.log("toHex ", test.toHex())
const bigint = await test.bigInt()
console.log("toBigInt ", bigint)

const ca1 = Byte.create([0x30, 0x82, 0x01, 0x0a]); // Example DN
//const ca2 = Byte.create([0x30, 0x81, 0xfa]);       // Another example DN
const ca2 = Byte.create();

const test_0 = Byte.from(test);
const bigint_0 = await test_0.bigInt();
const _null = null;
