//@ts-self-types="../type/byte.d.ts"
import { Convert } from "pvtsutils"

const encoder = new TextEncoder

export class Byte extends Uint8Array {
   static sanitize(args) {
      if (!args.length) {
         // If no args provided, return a default resizable ArrayBuffer
         return [new ArrayBuffer(0, { maxByteLength: 8192 })];
      }

      const _0 = args[0]
      let _init;

      if (typeof (_0) == "string") {
         if (Convert.isHex(_0)) {
            _init = new Uint8Array(Convert.FromHex(_0));
         } else if (Convert.isBase64(_0)) {
            _init = new Uint8Array(Convert.FromBase64(_0));
         } else if (Convert.isBase64Url(_0)) {
            _init = new Uint8Array(Convert.FromBase64Url(_0));
         } else {
            _init = new Uint8Array(encoder.encode(_0))
         }
      } else if (_0 instanceof Uint8Array || Array.isArray(_0)) {
         _init = new Uint8Array(_0); // Directly convert to Uint8Array
      } else {
         return args
      }
      // Initialize resizable buffer after _init is determined
      const _final = new Uint8Array(new ArrayBuffer(_init.length, { maxByteLength: 8192 }));
      _final.set(_init);

      args[0] = _final.buffer;
      return args;
   }
   static create(value) {
      return new Byte(value)
   }
   constructor(...args) {
      args = Byte.sanitize(args)
      super(...args);
      const _null = null;
   }

   append(array) {
      array = new Byte(array);
      const _initLength = this.length;
      const length = this.length + array.length;
      this.buffer.resize(length)
      this.set(array, _initLength);
   }
   prepend(array) {
      array = new Byte(array);
      const _initLength = this.length;
      const length = this.length + array.length;
      this.buffer.resize(length)
      this.set(this.slice(0, _initLength), array.length);
      this.set(array, 0)
   }
   insert(array, index) {
      array = new Byte(array);
      const _initLength = this.length;
      const length = this.length + array.length;
      this.buffer.resize(length);
      const copy = this.slice(index, _initLength);
      this.set(array, index);
      this.set(copy, index + array.length)
   }

   toBase64() {
      return Convert.ToBase64(this)
   }

   toBase64Url() {
      return Convert.ToBase64Url(this)
   }

   toHex() {
      return Convert.ToHex(this)
   }

}



