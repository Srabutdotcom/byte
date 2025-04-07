import { sanitize } from "../src/sanitizer.js";
import { assertThrows } from "@std/assert";

const data_1 = Uint8Array.of(0, 14, 0, 12, 0, 0, 9, 108, 111, 99, 97, 108, 104, 111, 115, 116)
const data_2 = data_1.subarray(0, data_1.length - 1);

const sanitize_1 = sanitize([data_1], {start : 0, startLength : 2, minLength : 4, maxLength : 2 ** 16 - 1, trace : true});

assertThrows(()=>{
   const sanitize_2 = sanitize([data_2], {start : 0, startLength : 2, minLength : 4, maxLength : 2 ** 16 - 1, trace : true});
}, RangeError)


const _null = null;