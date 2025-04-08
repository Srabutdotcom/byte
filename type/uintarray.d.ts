/**
 * Creates a Uint8Array from an 8-bit unsigned integer.
 * @param {number} value - The 8-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 8-bit value.
 * @throws {RangeError} - If the value is not a positive integer between 0 and 255.
 */
export declare function uint8(value: number): Uint8Array;

/**
 * Creates a Uint8Array from a 16-bit unsigned integer.
 * @param {number} value - The 16-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 16-bit value (big-endian).
 * @throws {RangeError} - If the value is not a positive integer between 0 and 65535.
 */
export declare function uint16(value: number): Uint8Array;

/**
 * Creates a Uint8Array from a 24-bit unsigned integer.
 * @param {number} value - The 24-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 24-bit value (big-endian).
 * @throws {RangeError} - If the value is not a positive integer between 0 and 16777215.
 */
export declare function uint24(value: number): Uint8Array;

/**
 * Creates a Uint8Array from a 32-bit unsigned integer.
 * @param {number} value - The 32-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 32-bit value (big-endian).
 * @throws {RangeError} - If the value is not a positive integer between 0 and 4294967295.
 */
export declare function uint32(value: number): Uint8Array;