//@ts-self-types="../type/byte.d.ts"
import { Convert } from "pvtsutils"

export class Byte {
   #_view

   static create(array) {
      array = arraying(array)
      return new Byte(array)
   }
   static fromHex(hexStr) {
      if (Convert.isHex(hexStr) == false) throw new TypeError(`Expected HexaDecimal String`);
      return new Byte(Convert.FromHex(hexStr));
   }
   static fromBase64(base64Str) {
      if (Convert.isBase64(base64Str) == false) throw new TypeError(`Expected Base64 String`);
      return new Byte(Convert.FromBase64(base64Str));
   }
   static fromBase64Url(base64UrlStr) {
      if (Convert.isBase64Url(base64UrlStr) == false) throw new TypeError(`Expected Base64 String`);
      return new Byte(Convert.FromBase64Url(base64UrlStr));
   }
   constructor(initialData) {
      if (initialData instanceof ArrayBuffer) {
         this.#_view = new Uint8Array(initialData);
      } else if (Array.isArray(initialData) || initialData instanceof Uint8Array) {
         this.#_view = new Uint8Array(initialData);
      } else if (typeof initialData === 'number') {
         this.#_view = new Uint8Array(initialData);
      } else {
         this.#_view = new Uint8Array(0); // Default to empty
      }
   }

   get length() {
      return this.#_view.length;
   }

   get buffer() {
      return this.#_view.buffer;
   }

   get byteOffset() {
      return this.#_view.byteOffset;
   }

   get byteLength() {
      return this.#_view.byteLength;
   }

   get [Symbol.toStringTag]() {
      return "Uint8Array"
   }

   get view() { return this.#_view }

   append(array) {
      array = arraying(array)
      const copy = this.#_view.slice();
      this.#_view = new Uint8Array(array.length + copy.length);
      this.#_view.set(copy);
      this.#_view.set(array, copy.length);
   }

   prepend(array) {
      array = arraying(array)
      const copy = this.#_view.slice();
      this.#_view = new Uint8Array(array.length + copy.length);
      this.#_view.set(array);
      this.#_view.set(copy, array.length);
   }

   insert(array, index) {
      array = arraying(array)
      const first = this.#_view.slice(0, index);
      const last = this.#_view.slice(index);
      this.#_view = new Uint8Array(array.length + first.length + last.length);
      this.#_view.set(first);
      this.#_view.set(array, index);
      this.#_view.set(last, first.length + array.length);
   }

   toBase64() {
      return Convert.ToBase64(this.#_view)
   }

   toBase64Url() {
      return Convert.ToBase64Url(this.#_view)
   }

   toHex() {
      return Convert.ToHex(this.#_view)
   }

   toUtf8String() {
      return Convert.ToUtf8String(this.#_view)
   }

   subarray(begin = 0, end = this.length) {
      return new Byte(this.#_view.subarray(begin, end));
   }

   set(array, offset = 0) {
      this.#_view.set(array, offset);
   }

   slice(begin = 0, end = this.length) {
      return new Byte(this.#_view.slice(begin, end));
   }

   copyWithin(target, start, end = this.length) {
      this.#_view.copyWithin(target, start, end);
      return this;
   }

   fill(value, start = 0, end = this.length) {
      this.#_view.fill(value, start, end);
      return this;
   }

   indexOf(searchValue, fromIndex = 0) {
      return this.#_view.indexOf(searchValue, fromIndex);
   }

   lastIndexOf(searchValue, fromIndex = this.length - 1) {
      return this.#_view.lastIndexOf(searchValue, fromIndex);
   }

   every(callback, thisArg) {
      return this.#_view.every(callback, thisArg);
   }

   some(callback, thisArg) {
      return this.#_view.some(callback, thisArg);
   }

   forEach(callback, thisArg) {
      this.#_view.forEach(callback, thisArg);
   }

   map(callback, thisArg) {
      return new Byte(this.#_view.map(callback, thisArg));
   }

   filter(callback, thisArg) {
      return new Byte(this.#_view.filter(callback, thisArg));
   }

   reduce(callback, initialValue) {
      return this.#_view.reduce(callback, initialValue);
   }

   reduceRight(callback, initialValue) {
      return this.#_view.reduceRight(callback, initialValue);
   }

   reverse() {
      this.#_view.reverse();
      return this;
   }

   sort(compareFunction) {
      this.#_view.sort(compareFunction);
      return this;
   }

   toString() {
      return `Byte [${Array.from(this.#_view).join(', ')}]`;
   }

   toLocaleString() {
      return this.#_view.toLocaleString();
   }

   [Symbol.iterator]() {
      return this.#_view[Symbol.iterator]();
   }

   entries() {
      return this.#_view.entries();
   }

   keys() {
      return this.#_view.keys();
   }

   values() {
      return this.#_view.values();
   }

   // Add more Uint8Array methods as needed...
}

function arraying(value) {
   if (value instanceof Uint8Array || Array.isArray(value)) {
      return value;
   }

   if (typeof value === 'string') {
      return new TextEncoder().encode(str);
   }

   if (value === undefined || value === null || value === false) {
      return [];
   }

   if (Number.isInteger(value) && value >= 0) {
      return new Uint8Array(value);
   }

   throw new TypeError('Value must be a Uint8Array, Array, or string.');
}



