//@ts-self-types="../type/byte.d.ts"
import { Convert } from "pvtsutils"

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
      return Convert.ToUtf8String(this)
   }
}