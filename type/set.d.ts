/**
 * convert an integer value to Uint8Array
 * @param {number|string} int
 * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
 * @returns
 */
export function Uint8BE(int: number | string, bytes: 1 | 2 | 3 | 4 | "1" | "2" | "3" | "4"): TypeError | Uint8Array;
/**
 * convert an integer value below 65536 (16 bits or 2 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint16BE(int: number | string): TypeError | Uint8Array;
/**
 * convert an integer value below 16777216 (24 bits or 3 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint24BE(int: number | string): TypeError | Uint8Array;
/**
 * convert an integer value below 4294967296 (32 bits or 4 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint32BE(int: number | string): TypeError | Uint8Array;
/**
 * return the maximum byte number to store the integer
 * ```
 * maxBytes(255) = 1
 * maxBytes(256) = 2
 * ```
 * @param {number|string} int - either number or string containing number
 * @returns
 */
export function maxBytes(int: number | string): number;
