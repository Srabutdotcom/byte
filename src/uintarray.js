//@ts-self-types="../type/uintarray.d.ts"

import { sanitize } from "./sanitizer.js";
import { getUint8, getUint16, getUint24, getUint32 } from "./getuint.js";

export class Uint8 extends Uint8Array {
   static fromValue(value) {
      return uint8(value)
   }
   static from(array) { return new Uint8(array) }
   constructor(...args) {
      sanitize(args, { fixedLength: 1 })
      super(...args)
   }
   get value() { return getUint8(this) }
}

export class Uint16 extends Uint8Array {
   static fromValue(value) {
      return uint16(value)
   }
   static from(array) { return new Uint16(array) }
   constructor(...args) {
      sanitize(args, { fixedLength: 2 })
      super(...args)
   }
   get value() { return getUint16(this) }
}

export class Uint24 extends Uint8Array {
   static fromValue(value) {
      return uint24(value)
   }
   static from(array) { return new Uint24(array) }
   constructor(...args) {
      sanitize(args, { fixedLength: 3 })
      super(...args)
   }
   get value() { return getUint24(this) }
}

export class Uint32 extends Uint8Array {
   static fromValue(value) {
      return uint32(value)
   }
   static from(array) { return new Uint32(array) }
   constructor(...args) {
      sanitize(args, { fixedLength: 4 })
      super(...args)
   }
   get value() { return getUint32(this) }
}

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
