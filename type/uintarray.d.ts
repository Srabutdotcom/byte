/**
 * Creates a Uint8Array from an 8-bit unsigned integer.
 * @param {number} value - The 8-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 8-bit value.
 * @throws {RangeError} - If the value is not a positive integer between 0 and 255.
 * @version 0.8.10
 */
export declare function uint8(value: number): Uint8Array;

/**
 * Creates a Uint8Array from a 16-bit unsigned integer.
 * @param {number} value - The 16-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 16-bit value (big-endian).
 * @throws {RangeError} - If the value is not a positive integer between 0 and 65535.
 * @version 0.8.10
 */
export declare function uint16(value: number): Uint8Array;

/**
 * Creates a Uint8Array from a 24-bit unsigned integer.
 * @param {number} value - The 24-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 24-bit value (big-endian).
 * @throws {RangeError} - If the value is not a positive integer between 0 and 16777215.
 * @version 0.8.10
 */
export declare function uint24(value: number): Uint8Array;

/**
 * Creates a Uint8Array from a 32-bit unsigned integer.
 * @param {number} value - The 32-bit unsigned integer.
 * @returns {Uint8Array} - The Uint8Array containing the 32-bit value (big-endian).
 * @throws {RangeError} - If the value is not a positive integer between 0 and 4294967295.
 * @version 0.8.10
 */
export declare function uint32(value: number): Uint8Array;

/**
 * Represents an 8-bit unsigned integer as a Uint8Array.
 * @version 0.8.10
 */
export declare class Uint8 extends Uint8Array {
  /**
   * Creates a Uint8 instance from an 8-bit unsigned integer value.
   * @param {number} value - The 8-bit unsigned integer value.
   * @returns {Uint8} - A new Uint8 instance.
   */
  static fromValue(value: number): Uint8;

  /**
   * Creates a Uint8 instance from an array or Uint8Array.
   * @param {ArrayLike<number> | ArrayBuffer | SharedArrayBuffer} array - The array-like object or buffer.
   * @returns {Uint8} - A new Uint8 instance.
   */
  static from(
   array: Uint8Array
  ): Uint8;

  /**
   * Constructs a Uint8 instance.
   * @param {...any} args - Arguments to pass to the Uint8Array constructor.
   * @throws {RangeError} - If the length of the array is not 1.
   */
  constructor(...args: any[]);

  /**
   * Gets the 8-bit unsigned integer value from the Uint8 instance.
   * @returns {number} - The 8-bit unsigned integer value.
   */
  get value(): number;
}

/**
 * Represents a 16-bit unsigned integer as a Uint8Array.
 * @version 0.8.10
 */
export declare class Uint16 extends Uint8Array {
  /**
   * Creates a Uint16 instance from a 16-bit unsigned integer value.
   * @param {number} value - The 16-bit unsigned integer value.
   * @returns {Uint16} - A new Uint16 instance.
   */
  static fromValue(value: number): Uint16;

  /**
   * Creates a Uint16 instance from an array or Uint8Array.
   * @param {ArrayLike<number> | ArrayBuffer | SharedArrayBuffer} array - The array-like object or buffer.
   * @returns {Uint16} - A new Uint16 instance.
   */
  static from(
    array: Uint8Array ,
  ): Uint16;

  /**
   * Constructs a Uint16 instance.
   * @param {...any} args - Arguments to pass to the Uint8Array constructor.
   * @throws {RangeError} - If the length of the array is not 2.
   */
  constructor(...args: any[]);

  /**
   * Gets the 16-bit unsigned integer value from the Uint16 instance.
   * @returns {number} - The 16-bit unsigned integer value.
   */
  get value(): number;
}

/**
 * Represents a 24-bit unsigned integer as a Uint8Array.
 * @version 0.8.10
 */
export declare class Uint24 extends Uint8Array {
  /**
   * Creates a Uint24 instance from a 24-bit unsigned integer value.
   * @param {number} value - The 24-bit unsigned integer value.
   * @returns {Uint24} - A new Uint24 instance.
   */
  static fromValue(value: number): Uint24;

  /**
   * Creates a Uint24 instance from an array or Uint8Array.
   * @param {ArrayLike<number> | ArrayBuffer | SharedArrayBuffer} array - The array-like object or buffer.
   * @returns {Uint24} - A new Uint24 instance.
   */
  static from(
    array: Uint8Array,
  ): Uint24;

  /**
   * Constructs a Uint24 instance.
   * @param {...any} args - Arguments to pass to the Uint8Array constructor.
   * @throws {RangeError} - If the length of the array is not 3.
   */
  constructor(...args: any[]);

  /**
   * Gets the 24-bit unsigned integer value from the Uint24 instance.
   * @returns {number} - The 24-bit unsigned integer value.
   */
  get value(): number;
}

/**
 * Represents a 32-bit unsigned integer as a Uint8Array.
 * @version 0.8.10
 */
export declare class Uint32 extends Uint8Array {
  /**
   * Creates a Uint32 instance from a 32-bit unsigned integer value.
   * @param {number} value - The 32-bit unsigned integer value.
   * @returns {Uint32} - A new Uint32 instance.
   */
  static fromValue(value: number): Uint32;

  /**
   * Creates a Uint32 instance from an array or Uint8Array.
   * @param {ArrayLike<number> | ArrayBuffer | SharedArrayBuffer} array - The array-like object or buffer.
   * @returns {Uint32} - A new Uint32 instance.
   */
  static from(
    array: Uint8Array,
  ): Uint32;

  /**
   * Constructs a Uint32 instance.
   * @param {...any} args - Arguments to pass to the Uint8Array constructor.
   * @throws {RangeError} - If the length of the array is not 4.
   */
  constructor(...args: any[]);

  /**
   * Gets the 32-bit unsigned integer value from the Uint32 instance.
   * @returns {number} - The 32-bit unsigned integer value.
   */
  get value(): number;
}
