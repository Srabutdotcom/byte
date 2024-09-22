//@ts-self-types="../type/get.d.ts"
import { uint8array } from "./uint8array.js";
import { uint } from "./integer.js";

/** 
 * return value from bytes
 * @param {Uint8Array} data 
 * @param {number} pos - positive integer, represent byteoffset. 
 * @param {number} length - positive integer, represent the length of byte
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint8BE(data, pos = 0, length = 1) {
   data = uint8array(data)
   pos = uint(pos);
   length = uint(length)

   if (pos >= data.length) {
      throw new TypeError("Position is out of bounds");
   }

   if (pos + length > data.length) {
      throw TypeError(`length is beyond data.length`)
   }

   if (length == 4) {
      const dataView = new DataView(data.buffer);
      const value = dataView.getUint32(pos, false); // Assuming big-endian
      return value
   }

   // Use a loop to handle bytes of any length
   let output = 0;
   for (let i = pos; i < pos + length; i++) {
      output = (output << 8) | data[i];
   }

   return output;
}

/**
 * get positive integer from 8 bytes array
 * @param {Uint8Array} data 
 * @param {number} pos - positive integer, represent byteoffset. 
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint8(data, pos) {
   return getUint8BE(data, pos, 1);
}

/**
 * get positive integer from 16 bytes array
 * @param {Uint8Array} data 
 * @param {number} pos - positive integer, represent byteoffset. 
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint16(data, pos) {
   return getUint8BE(data, pos, 2);
}

/**
 * get positive integer from 24 bytes array
 * @param {Uint8Array} data 
 * @param {number} pos - positive integer, represent byteoffset. 
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint24(data, pos) {
   return getUint8BE(data, pos, 3);
}

/** 
 * get positive integer from 32 bytes array
 * @param {Uint8Array} data 
 * @param {number} pos - positive integer, represent byteoffset. 
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint32(data, pos) {
   return getUint8BE(data, pos, 4);
}