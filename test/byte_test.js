import { Byte } from "../src/byte.js";

const test = new Byte(`33 ad 0a 1c 60 7e c0 3b 09 e6 cd 98 93 68 0c
   e2 10 ad f3 00 aa 1f 26 60 e1 b2 2e 10 f1 70 f9 2a`);
test.append(Uint8Array.of(1, 2, 3));
test.prepend(Uint8Array.of(5, 6, 9));
test.insert(Uint8Array.of(100), 5)

console.log("toBase64 ", test.toBase64())
console.log("toBase64Url ", test.toBase64Url())
console.log("toHex ", test.toHex())

