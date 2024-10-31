/**
 * Converts input to an integer if possible, or throws a TypeError if invalid.
 * If the input is a float, it will be truncated to an integer.
 *
 * @param {number|string} int - Input number or string to be converted.
 * @return {number} - Integer value.
 * @throws {TypeError} - If the input is not a valid integer.
 */
export function ensureInteger(int: number | string): number;
/**
 * Converts input to a positive integer if possible, or throws a TypeError if invalid.
 *
 * @param {number|string} int - Input number or string to be converted.
 * @return {number} - Positive integer.
 * @throws {TypeError} - If the input is not a positive integer.
 */
export function ensureUint(int: number | string): number;
/**
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @return {number} positive integer
 */
export function uint(int: number | string): number;
/**
 * return integer from string or number.
 *
 * if string contain a floating number then it will be converted to integer
 *
 * throw TypeError if string can't be converted to integer
 *
 * @param {number|string} int
 * @return {number} integer
 */
export function integer(int: number | string): number;
/**
 * Integer class to encapsulate integer values.
 */
export class Integer {
    /**
     * To create Integer Object
     * @param {string|number} v
     * @return
     */
    static of(v: string | number): Integer;
    static create: typeof Uint.of;
    static from: typeof Uint.of;
    constructor(v: any);
    valueOf(): any;
    toString(): string;
    get value(): any;
    #private;
}
/**
 * Uint - represent positive integer value
 */
export class Uint {
    /**
     * To create Uint Object
     * @param {string|number} v
     * @return
     */
    static of(v: string | number): Uint;
    static create: typeof Uint.of;
    static from: typeof Uint.of;
    constructor(v: any);
    valueOf(): any;
    toString(): string;
    get value(): any;
    #private;
}
