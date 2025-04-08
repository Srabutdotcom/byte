//@ts-self-types="../type/byte.d.ts"
import { Convert } from "pvtsutils"

const encoder = new TextEncoder();

export class Byte {
   #_view
   #_buffer;
   #_length = 0;

   static create(array) {
      return new Byte(array)
   }
   static fromHex(hexStr) {
      if (!Convert.isHex(hexStr)) throw new TypeError(`Expected HexaDecimal String`);
      return new Byte(Convert.FromHex(hexStr));
   }

   static fromBase64(base64Str) {
      if (!Convert.isBase64(base64Str)) throw new TypeError(`Expected Base64 String`);
      return new Byte(Convert.FromBase64(base64Str));
   }

   static fromBase64Url(base64UrlStr) {
      if (!Convert.isBase64Url(base64UrlStr)) throw new TypeError(`Expected Base64 String`);
      return new Byte(Convert.FromBase64Url(base64UrlStr));
   }

   constructor(initialData) {
      const init = arraying(initialData);
      const capacity = Math.max(64, init.length * 2);
      this.#_buffer = new Uint8Array(capacity);
      this.#_buffer.set(init);
      this.#_length = init.length;
      this.#_view = this.#_buffer.subarray(0, this.#_length);
   }

   #ensureCapacity(additional) {
      const required = this.#_length + additional;
      if (required <= this.#_buffer.length) return;

      let newCapacity = this.#_buffer.length * 2;
      while (newCapacity < required) newCapacity *= 2;

      const newBuffer = new Uint8Array(newCapacity);
      newBuffer.set(this.#_view);
      this.#_buffer = newBuffer;
      this.#_view = this.#_buffer.subarray(0, this.#_length);
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
      this.#ensureCapacity(array.length);
      this.#_buffer.set(array, this.#_length);
      this.#_length += array.length;
      this.#_view = this.#_buffer.subarray(0, this.#_length);
   }

   prepend(array) {
      array = arraying(array);
      const total = this.#_length + array.length;
      this.#ensureCapacity(array.length);
      this.#_buffer.copyWithin(array.length, 0, this.#_length);
      this.#_buffer.set(array, 0);
      this.#_length = total;
      this.#_view = this.#_buffer.subarray(0, this.#_length);
   }

   insert(array, index) {
      array = arraying(array);
      if (index < 0 || index > this.#_length) throw new RangeError("Index out of range");
      this.#ensureCapacity(array.length);
      this.#_buffer.copyWithin(index + array.length, index, this.#_length);
      this.#_buffer.set(array, index);
      this.#_length += array.length;
      this.#_view = this.#_buffer.subarray(0, this.#_length);
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

export function arraying(value) {
   if (value instanceof Uint8Array || Array.isArray(value)) return value;
   if (value instanceof Byte) return value.view;
   if (typeof value === 'string') return encoder.encode(value);
   if (value == null || value === false) return new Uint8Array();
   if (isByte(value)) return new Uint8Array(value);
   throw new TypeError('Value must be a Uint8Array, Array, or string.');
}

function isByte(v) {
   return (
      Number.isInteger(v) &&
      v >= 0 &&
      v <= 255
   )
}

