import { Uint16 } from "../src/uintarray.js";
import { Uint32 } from "../src/uintarray.js";
import { Uint24 } from "../src/uintarray.js";
import { Uint8 } from "../src/uintarray.js";
import { uint8, uint16, uint24, uint32 } from "../src/uintarray.js";

console.log(uint8(255));       // Uint8Array [255]
console.log(uint16(65535));    // Uint8Array [255, 255]
console.log(uint24(0x010203)); // Uint8Array [1, 2, 3]
console.log(uint32(0x01020304)); // Uint8Array [1, 2, 3, 4]

const uint8_test_0 = Uint8.from([255]);
const uint8_value = uint8_test_0.value
const uint8_test_1 = uint8(uint8_value);

const uint16_test_0 = Uint16.from([255,255]);
const uint16_value = uint16_test_0.value
const uint16_test_1 = uint16(uint16_value);

const uint24_test_0 = Uint24.from([255,255,255]);
const uint24_value = uint24_test_0.value
const uint24_test_1 = uint24(uint24_value);

const uint32_test_0 = Uint32.from([255,255,255,255]);
const uint32_value = uint32_test_0.value
const uint32_test_1 = uint32(uint32_value);

const _null = null;