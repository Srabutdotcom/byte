import { ensureInteger, ensureUint } from "./integer.js";

/**! @preserve
 * convert an integer value to Uint8Array
 * @param {number|string} integer 
 * @param {number|string} bytes 
 * @returns 
 */
export function Uint8BE(integer, bytes) {
   integer = ensureUint(integer);
   bytes = bytes?ensureUint(bytes): maxBytes(integer)
   const upper = 2 ** (8 * bytes) - 1;
   if (integer > upper) return TypeError(`integer can't be more than ${upper} `)
   // Create the Uint8Array with the specified number of bytes
   const uint8 = new Uint8Array(bytes);

   // Loop through each byte in big-endian order (most significant first)
   for (let i = 0; i < bytes; i++) {
      const index = bytes - 1 - i
      const shiftAmount = index * 8; // Calculate shift amount based on byte index
      uint8[i] = (integer >> shiftAmount) & 0xff; // Shift and mask to get the current byte integer
   }
   return uint8;
}

export function Uint16BE(_int) {
   return Uint8BE(_int, 2);
}
export function Uint24BE(_int) {
   return Uint8BE(_int, 3);
}
export function Uint32BE(_int) {
   return Uint8BE(_int, 4);
}

/**! @preserve
 * return the maximum byte number to store the integer
 * ```
 * maxBytes(255) = 1
 * maxBytes(256) = 2
 * ```
 * @param {number|string} integer - either number or string containing number
 * @returns 
 */
export function maxBytes(integer) {
   integer = ensureInteger(integer)
   let b = 1;
   while (true) {
      if (2 ** (b * 8) > integer) return b;
      b++
   }
}
