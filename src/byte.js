import * as get from "./get.js";
import { Uint } from "./integer.js";
import * as set from "./set.js";

export class Byte {
   static get = {
      BE: {
         /**
          * ! @preserve
          * @param {Uint8Array} data 
          * @param {Uint} pos 
          * @returns {Uint}
          */
         b8(data, pos){return get.getUint8(data, pos)},
         /**
          * ! @preserve
          * @param {Uint8Array} data 
          * @param {Uint} pos 
          * @returns {Uint}
          */
         b16(data, pos){return get.getUint16(data, pos)},
         /**
          * ! @preserve
          * @param {Uint8Array} data 
          * @param {Uint} pos 
          * @returns {Uint}
          */
         b24(data, pos){return get.getUint24(data, pos)},
         /**
          * ! @preserve
          * @param {Uint8Array} data 
          * @param {Uint} pos 
          * @returns {Uint}
          */
         b32(data, pos){return get.getUint32(data, pos)},
      }
   }
   static set = {
      BE: {
         /**
          * ! @preserve
          * @param {Uint} int 
          * @returns {Uint8Array}
          */
         b8(int){return set.Uint8BE(int)},
         /**
          * ! @preserve
          * @param {Uint} int 
          * @returns {Uint8Array}
          */
         b16(int){return set.Uint16BE(int)},
         /**
          * ! @preserve
          * @param {Uint} int 
          * @returns {Uint8Array}
          */
         b24(int){return set.Uint24BE(int)},
         /**
          * ! @preserve
          * @param {Uint} int 
          * @returns {Uint8Array}
          */
         b32(int){return set.Uint32BE(int)},
      }
   }
}

