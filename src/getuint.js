//@ts-self-types="../type/getuint.d.ts"

/**
 * Get a 8-bit unsigned integer from big-endian bytes
 * @param {Uint8Array} bytes - At least 1 byte
 * @param {number} offset - Start index (default 0)
 * @returns {number}
 */
export function getUint8(bytes, offset = 0) {
   if (bytes.length < offset + 1) {
      throw new RangeError('getUint8 requires at least 1 byte from the offset');
   }
   return bytes[offset];
}

/**
 * Get a 16-bit unsigned integer from big-endian bytes
 * @param {Uint8Array} bytes - At least 2 bytes
 * @param {number} offset - Start index (default 0)
 * @returns {number}
 */
export function getUint16(bytes, offset = 0) {
   if (bytes.length < offset + 2) {
      throw new RangeError('getUint16 requires at least 2 bytes from the offset');
   }
   return (bytes[offset] << 8) | bytes[offset + 1];
}

/**
 * Get a 24-bit unsigned integer from big-endian bytes
 * @param {Uint8Array} bytes - At least 3 bytes
 * @param {number} offset - Start index (default 0)
 * @returns {number}
 */
export function getUint24(bytes, offset = 0) {
   if (bytes.length < offset + 3) {
      throw new RangeError('getUint24 requires at least 3 bytes from the offset');
   }
   return (bytes[offset] << 16) | (bytes[offset + 1] << 8) | bytes[offset + 2];
}

/**
 * Get a 32-bit unsigned integer from big-endian bytes
 * @param {Uint8Array} bytes - At least 4 bytes
 * @param {number} offset - Start index (default 0)
 * @returns {number}
 */
export function getUint32(bytes, offset = 0) {
   if (bytes.length < offset + 4) {
      throw new RangeError('getUint32 requires at least 4 bytes from the offset');
   }
   return (
      (bytes[offset] * 0x1000000) + // Use multiplication to avoid overflow for high bits
      ((bytes[offset + 1] << 16) |
         (bytes[offset + 2] << 8) |
         bytes[offset + 3])
   );
}

