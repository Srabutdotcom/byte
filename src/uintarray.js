//@ts-self-types="../type/uintarray.d.ts"
export function uint8(value) {
   if (!Number.isInteger(value) || value < 0 || value > 0xFF) {
      throw new RangeError("uint8 expects a positive integer between 0 and 255");
   }
   return Uint8Array.of(value);
}

export function uint16(value) {
   if (!Number.isInteger(value) || value < 0 || value > 0xFFFF) {
      throw new RangeError("uint16 expects a positive integer between 0 and 65535");
   }
   return Uint8Array.of(b1(value), b0(value));
}

export function uint24(value) {
   if (!Number.isInteger(value) || value < 0 || value > 0xFFFFFF) {
      throw new RangeError("uint24 expects a positive integer between 0 and 16777215");
   }
   return Uint8Array.of(b2(value), b1(value), b0(value));
}

export function uint32(value) {
   if (!Number.isInteger(value) || value < 0 || value > 0xFFFFFFFF) {
      throw new RangeError("uint32 expects a positive integer between 0 and 4294967295");
   }
   return Uint8Array.of(b3(value), b2(value), b1(value), b0(value));
}


var b0 = (n) => n & 0xFF;
var b1 = (n) => n < 256 ? 0 : (n >> 8) & 0xFF;
var b2 = (n) => n < 65536 ? 0 : (n >> 16) & 0xFF;
var b3 = (n) => n < 16777216 ? 0 : (n >> 24) & 0xFF;
