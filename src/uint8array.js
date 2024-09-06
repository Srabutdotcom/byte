import { concat } from "./concat.js";
import { Uint8BE } from "./set.js";
import { uint } from "./integer.js";
/**
 * ! @preserve
 * to return Uint8Array from Uint8Array, string, number or array
 * @param {Uint8Array|Array|string|number} data 
 */
export function uint8array(data){
   if(data instanceof Uint8Array)return data;
   const enc = new TextEncoder;
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
   if(Object.hasOwn(e, 'toString')){
      return enc.encode(e.toString())
   }
   throw TypeError(`can't convert data to Uint8Array`)
}