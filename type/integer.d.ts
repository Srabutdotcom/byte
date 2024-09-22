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
export function ensureInteger(int: number | string): number;
/**
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @return {number} positive integer
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
 * Integer - represent integer value positive or negative
 */
export class Integer {
    /**
     * To create Integer Object
     * @param {string|number} v
     * @return
     */
    static "new"(v: string | number): Integer;
    constructor(v: any);
    valueOf(): any;
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
    static "new"(v: string | number): Uint;
    constructor(v: any);
    valueOf(): any;
    #private;
}
