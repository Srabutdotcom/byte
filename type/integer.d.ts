/**
 * return integer from string or number.
 *
 * if string contain a floating number then it will be converted to integer
 *
 * throw TypeError if string can't be converted to integer
 *
 * @param {number|string} int
 * @returns {integer} integer
 */
export function ensureInteger(int: number | string): typeof integer;
/**
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @returns {uint} positive integer
 */
export function ensureUint(int: number | string): typeof uint;
/**
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @returns {uint} positive integer
 */
export function uint(int: number | string): typeof uint;
/**
 * return integer from string or number.
 *
 * if string contain a floating number then it will be converted to integer
 *
 * throw TypeError if string can't be converted to integer
 *
 * @param {number|string} int
 * @returns {integer} integer
 */
export function integer(int: number | string): typeof integer;
/**
 * Integer - represent integer value positive or negative
 */
export class Integer {
    /**
     * To create Integer Object
     * @param {string|number} v
     * @returns
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
     * @returns
     */
    static "new"(v: string | number): Uint;
    constructor(v: any);
    valueOf(): any;
    #private;
}
