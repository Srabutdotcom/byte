
/**
 * Represents a byte array with utility methods for conversion.
 * @version 0.8.3
 */
export declare class Byte extends Uint8Array {
  /**
   * Creates a Byte instance from an array-like object.
   * @param {ArrayLike<number> | ArrayBuffer | SharedArrayBuffer} array - The array-like object or buffer.
   * @returns {Byte} - A new Byte instance.
   */
  static create(array: ArrayLike<number> | ArrayBuffer | SharedArrayBuffer): Byte;

  /**
   * Creates a Byte instance from a hexadecimal string.
   * @param {string} hexStr - The hexadecimal string.
   * @returns {Byte} - A new Byte instance.
   * @throws {TypeError} - If the input is not a hexadecimal string.
   */
  static fromHex(hexStr: string): Byte;

  /**
   * Creates a Byte instance from a Base64 string.
   * @param {string} base64Str - The Base64 string.
   * @returns {Byte} - A new Byte instance.
   * @throws {TypeError} - If the input is not a Base64 string.
   */
  static fromBase64(base64Str: string): Byte;

  /**
   * Creates a Byte instance from a Base64 URL string.
   * @param {string} base64UrlStr - The Base64 URL string.
   * @returns {Byte} - A new Byte instance.
   * @throws {TypeError} - If the input is not a Base64 URL string.
   */
  static fromBase64Url(base64UrlStr: string): Byte;

  /**
   * Creates a Byte instance from a UTF-8 string.
   * @param {string} string - The UTF-8 string.
   * @returns {Byte} - A new Byte instance.
   */
  static fromString(string: string): Byte;

  /**
   * Converts the Byte instance to a Base64 string.
   * @returns {string} - The Base64 string representation.
   */
  toBase64(): string;

  /**
   * Converts the Byte instance to a Base64 URL string.
   * @returns {string} - The Base64 URL string representation.
   */
  toBase64Url(): string;

  /**
   * Converts the Byte instance to a hexadecimal string.
   * @returns {string} - The hexadecimal string representation.
   */
  toHex(): string;

  /**
   * Converts the Byte instance to a UTF-8 string.
   * @returns {string} - The UTF-8 string representation.
   */
  toUtf8String(): string;
}