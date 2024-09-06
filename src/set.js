import { ensureInteger, ensureUint } from "./integer.js";

/**
 * ! @preserve
 * convert an integer value to Uint8Array
 * @param {number|string} int 
 * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes 
 * @returns 
 */
export function Uint8BE(int, bytes) {
   int = ensureUint(int);
   bytes = bytes?ensureUint(bytes): maxBytes(int)
   const upper = 2 ** (8 * bytes) - 1;
   if (int > upper) return TypeError(`integer can't be more than ${upper} `)
   // Create the Uint8Array with the specified number of bytes
   const uint8 = new Uint8Array(bytes);

   // Loop through each byte in big-endian order (most significant first)
   for (let i = 0; i < bytes; i++) {
      const index = bytes - 1 - i
      const shiftAmount = index * 8; // Calculate shift amount based on byte index
      uint8[i] = (int >> shiftAmount) & 0xff; // Shift and mask to get the current byte integer
   }
   return uint8;
}
/**
 * ! @preserve
 * convert an integer value below 65536 (16 bits or 2 bytes) to Uint8Array
 * @param {number|string} int 
 * @returns 
 */
export function Uint16BE(int) {
   return Uint8BE(int, 2);
}
/**
 * ! @preserve
 * convert an integer value below 16777216 (24 bits or 3 bytes) to Uint8Array
 * @param {number|string} int 
 * @returns 
 */
export function Uint24BE(int) {
   return Uint8BE(int, 3);
}
/**
 * ! @preserve
 * convert an integer value below 4294967296 (32 bits or 4 bytes) to Uint8Array
 * @param {number|string} int 
 * @returns 
 */
export function Uint32BE(int) {
   return Uint8BE(int, 4);
}

/**
 * ! @preserve
 * return the maximum byte number to store the integer
 * ```
 * maxBytes(255) = 1
 * maxBytes(256) = 2
 * ```
 * @param {number|string} int - either number or string containing number
 * @returns 
 */
export function maxBytes(int) {
   int = ensureInteger(int)
   let b = 1;
   while (true) {
      if (2 ** (b * 8) > int) return b;
      b++
   }
}
