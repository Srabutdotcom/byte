/**
 * integer positive or negative
 */
export type integer = number;
/**
 * positive integer
 */
export type uint = number;
/**! @preserve
 * convert an integer value below 65536 (16 bits or 2 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint16BE(int: number | string): TypeError | Uint8Array;
/**! @preserve
 * convert an integer value below 16777216 (24 bits or 3 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint24BE(int: number | string): TypeError | Uint8Array;
/**! @preserve
 * convert an integer value below 4294967296 (32 bits or 4 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint32BE(int: number | string): TypeError | Uint8Array;
/**! @preserve
 * convert an integer value to Uint8Array
 * @param {number|string} integer
 * @param {number|string} bytes
 * @returns
 */
export function Uint8BE(integer2: any, bytes: number | string): TypeError | Uint8Array;
/** ! @preserve
 * Concate two or more Uint8Array to one Uint8Array
 * @param  {...Uint8Array} bs [Uint8Array]
 * @returns {Uint8Array} Uint8Array
 */
export function concat(...bs: Uint8Array[]): Uint8Array;
/**
 * ! @preserve
 * return integer from string or number.
 *
 * if string contain a floating number then it will be converted to integer
 *
 * throw TypeError if string can't be converted to integer
 *
 * @param {number|string} integer
 * @returns {integer} integer
 */
export function ensureInteger(integer2: any): integer;
/**
 * ! @preserve
 *@typedef {number} integer
 *integer positive or negative
 */
/**! @preserve
 *@typedef {number} uint
 *positive integer
 */
/**! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} integer
 * @returns {uint} positive integer
 */
export function ensureUint(integer2: any): uint;
/**! @preserve
 * get positive integer from 16 bytes array
 * @param {Uint8Array} data
 * @param {uint} pos
 * @returns {uint}
 */
export function getUint16(data: Uint8Array, pos: uint): uint;
/**! @preserve
 * get positive integer from 24 bytes array
 * @param {Uint8Array} data
 * @param {uint} pos
 * @returns {uint}
 */
export function getUint24(data: Uint8Array, pos: uint): uint;
/** ! @preserve
 * get positive integer from 32 bytes array
 * @param {Uint8Array} data
 * @param {uint} pos
 * @returns {uint}
 */
export function getUint32(data: Uint8Array, pos: uint): uint;
/**! @preserve
 * get positive integer from 8 bytes array
 * @param {Uint8Array} data
 * @param {uint} pos
 * @returns {uint}
 */
export function getUint8(data: Uint8Array, pos: uint): uint;
/** ! @preserve
 * @typedef {number} uint positive integer
*/
/** ! @preserve
 * @param {Uint8Array} data
 * @param {uint} pos
 * @param {uint} length
 * @returns {uint} The unsigned integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint8BE(data: Uint8Array, pos?: uint, length?: uint): uint;
/**
 * ! @preserve
 * return integer from string or number.
 *
 * if string contain a floating number then it will be converted to integer
 *
 * throw TypeError if string can't be converted to integer
 *
 * @param {number|string} integer
 * @returns {integer} integer
 */
export function integer(integer2: any): integer;
/**! @preserve
 * return the maximum byte number to store the integer
 * ```
 * maxBytes(255) = 1
 * maxBytes(256) = 2
 * ```
 * @param {number|string} integer - either number or string containing number
 * @returns
 */
export function maxBytes(integer2: any): number;
/**
 * ! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} integer
 * @returns {uint} positive integer
 */
export function uint(integer2: any): uint;
/**
 * ! @preserve
 * to return Uint8Array from Uint8Array, string, or array
 * @param {Uint8Array|Array|string} data
 */
export function uint8array(data: Uint8Array | any[] | string): any;
