//@ts-self-types="../type/byte.d.ts"
import { concat } from "./concat.js";
import { getUint8, getUint16, getUint24, getUint32 } from "./get.js";
import { Uint8BE, Uint16BE, Uint24BE, Uint32BE } from "./set.js";

/**
 * Byte, collection of byte function
 */
export class Byte {
   
   /**
    * Get value from any byte 8, 16, 24, 32
    *
    * @static
    * @type {{ BE: { b8: getUint8; b16: getUint16; b24: getUint24; b32: getUint32; }; }}
    */
   static get = {    
      BE: {
         b8: getUint8,
         b16: getUint16,
         b24: getUint24,
         b32: getUint32,
      }
   }
   
   /**
    * convert an integer value to Uint8BE, 
    *
    * @static
    * @type {{ BE: { b8: Uint8BE; b16: Uint16BE; b24: Uint24BE; b32: Uint32BE; }; }}
    */
   static set = {
      BE: {
         b8: Uint8BE,
         b16: Uint16BE,
         b24: Uint24BE,
         b32: Uint32BE,
      }
   }
   /**
    * Concate two or more Uint8Array to one Uint8Array
    *
    * @static
    * @type {concat}
    */
   static concat = concat
}

//npx -p typescript tsc ./src/byte.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist

