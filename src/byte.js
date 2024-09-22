//@ts-self-types="../type/byte.d.ts"
import { concat } from "./concat.js";
import * as get from "./get.js";
import * as set from "./set.js";

/**
 * Byte, collection of byte function
 */
export class Byte {
   static get = {
      BE: {
         b8: get.getUint8,
         b16 : get.getUint16,
         b24: get.getUint24,
         b32: get.getUint32,
      }
   }
   static set = {
      BE: {
         b8: set.Uint8BE,
         b16: set.Uint16BE,
         b24: set.Uint24BE,
         b32: set.Uint32BE,
      }
   }
   static concat = concat
}

