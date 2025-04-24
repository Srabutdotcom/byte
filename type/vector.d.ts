/**
 * Processes an array based on specified length constraints and returns a Uint8Array.
 * @param {Array<number> | Uint8Array} array - The input array to process.
 * @param {object} [option] - Optional parameters for length constraints.
 * @param {number} [option.min=0] - The minimum allowed length of the input array.
 * @param {number} [option.max=255] - The maximum allowed length of the input array (up to 2**32 - 1).
 * @returns {Uint8Array} - The processed Uint8Array.
 * @throws {RangeError} - If min is negative or max is greater than 2**32-1.
 * @throws {RangeError} - If the input array's length is less than min or greater than max.
 * @throws {Error} - If the calculated lengthBytes is not 1, 2, 3, or 4.
 * @version 0.8.8
 */
export declare function vector(
  array: Array<number> | Uint8Array,
  option?: { min?: number; max?: number },
): Uint8Array;

/**
 * Processes an array with a maximum length of 255 (1 byte length) and returns a Uint8Array.
 * @param {Array<number> | Uint8Array} array - The input array.
 * @returns {Uint8Array} - The processed Uint8Array.
 * @version 0.8.8
 */
export declare function vector8(array: Array<number> | Uint8Array): Uint8Array;

/**
 * Processes an array with a maximum length of 65535 (2 bytes length) and returns a Uint8Array.
 * @param {Array<number> | Uint8Array} array - The input array.
 * @returns {Uint8Array} - The processed Uint8Array.
 * @version 0.8.8
 */
export declare function vector16(array: Array<number> | Uint8Array): Uint8Array;

/**
 * Processes an array with a maximum length of 16777215 (3 bytes length) and returns a Uint8Array.
 * @param {Array<number> | Uint8Array} array - The input array.
 * @returns {Uint8Array} - The processed Uint8Array.
 * @version 0.8.8
 */
export declare function vector24(array: Array<number> | Uint8Array): Uint8Array;

/**
 * Processes an array with a maximum length of 4294967295 (4 bytes length) and returns a Uint8Array.
 * @param {Array<number> | Uint8Array} array - The input array.
 * @returns {Uint8Array} - The processed Uint8Array.
 * @version 0.8.8
 */
export declare function vector32(array: Array<number> | Uint8Array): Uint8Array;
