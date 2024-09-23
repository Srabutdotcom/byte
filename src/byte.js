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
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b8: get.getUint8,
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b16: get.getUint16,
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b24: get.getUint24,
         /**
          * @method
          * @param {Uint8Array} data 
          * @param {number} pos - positive integer, represent byteoffset. 
          * @return {number} Positive integer value
          */
         b32: get.getUint32,
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
         b8: set.Uint8BE,
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b16: set.Uint16BE,
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b24: set.Uint24BE,
         /**
          * convert an integer value to Uint8Array
          * @param {number|string} int 
          * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
          * @return {Uint8Array}
          */
         b32: set.Uint32BE,
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

