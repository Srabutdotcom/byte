//@ts-self-types="../type/uint8array.d.ts"
import { concat } from "./concat.js";
import { Uint8BE } from "./set.js";
import { uint } from "./integer.js";
/**
 * Converts input to a Uint8Array.
 * Supports Uint8Array, string, number, or an array of these types.
 * 
 * @param {Uint8Array|Array|string|number} data - Input data to convert.
 * @return {Uint8Array} - Resulting Uint8Array.
 * @throws {TypeError} - If data cannot be converted to Uint8Array.
 */
export function uint8array(data){
   if(data instanceof Uint8Array)return data;
   const encoder = new TextEncoder;
   if(typeof data == 'string')return enc.encode(data);
   if(typeof data == 'number')return Uint8BE(uint(data))
   if(Array.isArray(data)){
      return concat(data.map(e=>{
         if(e instanceof Uint8Array) return e
         if(typeof e =='number'){
            return Uint8BE(uint(e))
         }
         if(typeof e == 'string'){
            return enc.encode(e)
         } 
         if(Object.hasOwn(e, 'toString')){
            return enc.encode(e.toString())
         }
         throw TypeError(`can't convert data to Uint8Array`)
      }))
   }
   // Handle other objects with a .toString() method
   if (data && typeof data.toString === 'function') {
      return encoder.encode(e.toString())
   }
   throw TypeError(`can't convert data to Uint8Array`)
}