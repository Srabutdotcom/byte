//@ts-self-types="../type/byte.d.ts"
import { concat } from "./concat.js";
import { getUint8, getUint16, getUint24, getUint32 } from "./get.js";
import { Uint8BE, Uint16BE, Uint24BE, Uint32BE } from "./set.js";

/**
 * Byte, collection of byte function
 */
export class Byte {
   static get = {
      BE: {
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b8: getUint8,
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b16: getUint16,
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b24: getUint24,
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b32: getUint32,
      }
   }
   static set = {
      BE: {
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b8: Uint8BE,
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b16: Uint16BE,
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b24: Uint24BE,
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b32: Uint32BE,
      }
   }
   /** 
    * Concate two or more Uint8Array to one Uint8Array
    * @param  {Uint8Array[]} uint8s [Uint8Array]
    * @return {Uint8Array} Uint8Array
    */
   static concat = concat
}

//npx -p typescript tsc ./src/byte.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist

