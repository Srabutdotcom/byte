/**
 * Represents a byte array with utility methods for conversion.
 * @version 0.8.10
 */
export class Byte extends Uint8Array {
  /**
   * Creates a new Byte instance from an existing array.
   */
  static create(array: Uint8Array | number[] | ArrayBuffer): Byte;
  /**
   * Creates a new Byte instance from a hexadecimal string.
   */
  static fromHex(hexStr: string): Byte;
  /**
   * Creates a new Byte instance from a Base64 string.
   */
  static fromBase64(base64Str: string): Byte;
  /**
   * Creates a new Byte instance from a Base64 URL string.
   */
  static fromBase64Url(base64UrlStr: string): Byte;
  /**
   * Creates a new Byte instance from a UTF-8 string.
   */
  static fromString(string: string): Byte;
  constructor(...args: any[]);
  init(): void;
  toBase64(): string;
  toBase64Url(): string;
  toHex(): string;
  toUtf8String(): string;
  toBigInt(): bigint;
  readonly bigInt: Promise<bigint>;
  readonly base64: Promise<string>;
  readonly base64url: Promise<string>;
  readonly hex: Promise<string>;
  readonly utf8string: Promise<string>;
}
