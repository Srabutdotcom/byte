/**
 * Gets an 8-bit (1-byte) value from a Uint8Array.
 * @param {Uint8Array} bytes - The Uint8Array containing the bytes.
 * @param {number} offset - The starting offset within the Uint8Array.
 * @returns {number} - The 8-bit value.
 * @throws {RangeError} - If the offset is out of bounds.
 * @version 0.8.6
 */
export declare function getUint8(bytes: Uint8Array, offset: number): number;

/**
 * Gets a 16-bit (2-byte) value from a Uint8Array.
 * @param {Uint8Array} bytes - The Uint8Array containing the bytes.
 * @param {number} offset - The starting offset within the Uint8Array.
 * @returns {number} - The 16-bit value.
 * @throws {RangeError} - If the offset is out of bounds.
 */
export declare function getUint16(bytes: Uint8Array, offset: number): number;

/**
 * Gets a 24-bit (3-byte) value from a Uint8Array.
 * @param {Uint8Array} bytes - The Uint8Array containing the bytes.
 * @param {number} offset - The starting offset within the Uint8Array.
 * @returns {number} - The 24-bit value.
 * @throws {RangeError} - If the offset is out of bounds.
 */
export declare function getUint24(bytes: Uint8Array, offset: number): number;

/**
 * Gets a 32-bit (4-byte) value from a Uint8Array.
 * @param {Uint8Array} bytes - The Uint8Array containing the bytes.
 * @param {number} offset - The starting offset within the Uint8Array.
 * @returns {number} - The 32-bit value.
 * @throws {RangeError} - If the offset is out of bounds.
 */
export declare function getUint32(bytes: Uint8Array, offset: number): number;