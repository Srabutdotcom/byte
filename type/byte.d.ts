/**
 * A `Byte` class that extends `Uint8Array` with additional capabilities such as string conversion and resizable buffer.
 */
export class Byte extends Uint8Array {
    /**
     * Converts different string formats (hex, base64, base64url) into a `Uint8Array`
     * @param {any[]} args - The input arguments.
     * @returns {any[]} Sanitized arguments suitable for constructing a `Byte` instance.
     */
    static sanitize(args: any[]): any[];

    /**
     * Creates a new `Byte` instance.
     * @param {ArrayBuffer | Uint8Array | string} value - The initial value.
     */
    static create(value?: ArrayBuffer | Uint8Array | string):Byte

    /**
     * Creates a new `Byte` instance.
     * @param {ArrayBuffer | Uint8Array | string} value - The initial value.
     */
    constructor(value?: ArrayBuffer | Uint8Array | string);

    /**
     * Appends data to the end of the Byte array.
     * @param {ArrayBuffer | Uint8Array | string} array - The data to append.
     * @returns {Byte} A new Byte instance with the appended data.
     */
    append(array: ArrayBuffer | Uint8Array | string): Byte;

    /**
     * Prepends data to the beginning of the Byte array.
     * @param {ArrayBuffer | Uint8Array | string} array - The data to prepend.
     * @returns {Byte} A new Byte instance with the prepended data.
     */
    prepend(array: ArrayBuffer | Uint8Array | string): Byte;

    /**
     * Inserts data at a specified index in the Byte array.
     * @param {ArrayBuffer | Uint8Array | string} array - The data to insert.
     * @param {number} index - The index at which to insert the data.
     * @returns {Byte} A new Byte instance with the inserted data.
     */
    insert(array: ArrayBuffer | Uint8Array | string, index: number): Byte;

    /**
     * Convert byte to Base64 String
     */
    toBase64(): string;

    /**
     * Convert byte to Base64Url String
     */
    toBase64Url(): string;

    /**
     * Convert byte to Hex String
     */
    toHex(): string;
}


