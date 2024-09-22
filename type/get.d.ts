/**
 * return value from bytes
 * @param {Uint8Array} data
 * @param {number} pos - positive integer, represent byteoffset.
 * @param {number} length - positive integer, represent the length of byte
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint8BE(data: Uint8Array, pos?: number, length?: number): number;
/**
 * get positive integer from 8 bytes array
 * @param {Uint8Array} data
 * @param {number} pos - positive integer, represent byteoffset.
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint8(data: Uint8Array, pos: number): number;
/**
 * get positive integer from 16 bytes array
 * @param {Uint8Array} data
 * @param {number} pos - positive integer, represent byteoffset.
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint16(data: Uint8Array, pos: number): number;
/**
 * get positive integer from 24 bytes array
 * @param {Uint8Array} data
 * @param {number} pos - positive integer, represent byteoffset.
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint24(data: Uint8Array, pos: number): number;
/**
 * get positive integer from 32 bytes array
 * @param {Uint8Array} data
 * @param {number} pos - positive integer, represent byteoffset.
 * @return {number} Positive integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint32(data: Uint8Array, pos: number): number;
