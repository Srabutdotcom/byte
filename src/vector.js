//@ts-self-types="../type/vector.d.ts"
import { arraying } from "./byte.js";
import { unity } from "./unity.js";

export function vector(array, option = { min: 0, max: 255 }) {
   array = arraying(array);
   const { min = 0, max = 255 } = option;
   if (min < 0) throw new RangeError(`min should be above 0`)
   if (max > 4294967296) throw new RangeError(`max should be < 16777216`)
   const lengthBytes = Math.ceil(Math.log2(max + 1) / 8); // e.g., 2 for 65535
   if (array.length < min) throw new RangeError(`Minimal length: ${min}`);
   if (array.length > max) throw new RangeError(`Maximal length: ${max}`);
   switch (lengthBytes) {
      case 1: return vector8(array);
      case 2: return vector16(array);
      case 3: return vector24(array);
      case 4: return vector32(array)
      default: return vector8(array)
   }
}

function vector8(array) {
   return unity(array.length, array)
}

function vector16(array) {
   const length = array.length;
   return unity(b1(length), b0(length), array);
}

function vector24(array) {
   const length = array.length;
   return unity(b2(length), b1(length), b0(length), array);
}

function vector32(array) {
   const length = array.length;
   return unity(b3(length), b2(length), b1(length), b0(length), array);
}

var b0 = (length) => length & 0xFF;
var b1 = (length) => length < 256 ? 0 : (length >> 8) & 0xFF;
var b2 = (length) => length < 65536 ? 0 : (length >> 16) & 0xFF;
var b3 = (length) => length < 16777216 ? 0 : (length >> 24) & 0xFF;