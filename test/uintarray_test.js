import { uint8, uint16, uint24, uint32 } from "../src/uintarray.js";
console.log(uint8(255));       // Uint8Array [255]
console.log(uint16(65535));    // Uint8Array [255, 255]
console.log(uint24(0x010203)); // Uint8Array [1, 2, 3]
console.log(uint32(0x01020304)); // Uint8Array [1, 2, 3, 4]

const _null = null;