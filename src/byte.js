//@ts-self-types="../type/byte.d.ts"
import { Convert } from "pvtsutils"

const base64 = Symbol('base64');
const base64url = Symbol('base64url');
const hex = Symbol('hex');
const utf8string = Symbol('utf8string')
const bigint = Symbol('bigint')
const decoder = new TextDecoder

export class Byte extends Uint8Array {
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

   static fromString(string) {
      return new Byte(Convert.FromString(string))
   }

   constructor(...args) {
      super(...args)
      if (args[0] instanceof Uint8Array || args[0] instanceof ArrayBuffer) this.init();
   }

   init() {
      this[base64] = new Promise(r => {
         r(this.toBase64())
      })
      this[base64url] = new Promise(r => {
         r(this.toBase64Url())
      })
      this[hex] = new Promise(r => {
         r(this.toHex())
      })
      this[utf8string] = new Promise(r => {
         r(this.toUtf8String())
      })
      this[bigint] = new Promise(r => {
         r(this.toBigInt())
      })
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

   toUtf8String() {
      return decoder.decode(this)
   }

   toBigInt() {
      return bigIntFrom(this)
   }

   async bigInt(){
      return await this[bigint]
   }

   async base64(){
      return await this[base64]
   }

   async base64url() {
      return await this[base64url];
   }
   
   async hex() {
      return await this[hex];
   }
   
   async utf8string() {
      return await this[utf8string];
   }
}


function bigIntFrom(bytes) {
   // Create a Uint8Array from the byte array
   const uint8Array = new Uint8Array(bytes);

   // Convert the Uint8Array to BigInt by joining the bytes in base 256
   let bigIntValue = BigInt(0);
   for (let i = 0; i < uint8Array.length; i++) {
      bigIntValue = (bigIntValue << BigInt(8)) + BigInt(uint8Array[i]);
   }

   return bigIntValue;
}