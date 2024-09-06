/**
 * positive integer
 */
export type uint = number;
export var Byte: {
    new (): {};
    get: {
        BE: {
            /**
             * ! @preserve
             * @param {Uint8Array} data
             * @param {Uint} pos
             * @returns {Uint}
             */
            b8(data: Uint8Array, pos: {
                "__#2@#value": any;
                valueOf(): any;
            }): {
                "__#2@#value": any;
                valueOf(): any;
            };
            /**
             * ! @preserve
             * @param {Uint8Array} data
             * @param {Uint} pos
             * @returns {Uint}
             */
            b16(data: Uint8Array, pos: {
                "__#2@#value": any;
                valueOf(): any;
            }): {
                "__#2@#value": any;
                valueOf(): any;
            };
            /**
             * ! @preserve
             * @param {Uint8Array} data
             * @param {Uint} pos
             * @returns {Uint}
             */
            b24(data: Uint8Array, pos: {
                "__#2@#value": any;
                valueOf(): any;
            }): {
                "__#2@#value": any;
                valueOf(): any;
            };
            /**
             * ! @preserve
             * @param {Uint8Array} data
             * @param {Uint} pos
             * @returns {Uint}
             */
            b32(data: Uint8Array, pos: {
                "__#2@#value": any;
                valueOf(): any;
            }): {
                "__#2@#value": any;
                valueOf(): any;
            };
        };
    };
    set: {
        BE: {
            /**
             * ! @preserve
             * @param {Uint} int
             * @returns {Uint8Array}
             */
            b8(int: {
                "__#2@#value": any;
                valueOf(): any;
            }): Uint8Array;
            /**
             * ! @preserve
             * @param {Uint} int
             * @returns {Uint8Array}
             */
            b16(int: {
                "__#2@#value": any;
                valueOf(): any;
            }): Uint8Array;
            /**
             * ! @preserve
             * @param {Uint} int
             * @returns {Uint8Array}
             */
            b24(int: {
                "__#2@#value": any;
                valueOf(): any;
            }): Uint8Array;
            /**
             * ! @preserve
             * @param {Uint} int
             * @returns {Uint8Array}
             */
            b32(int: {
                "__#2@#value": any;
                valueOf(): any;
            }): Uint8Array;
        };
    };
};
export var Integer: {
    new (v: any): {
        "__#1@#value": any;
        valueOf(): any;
    };
    /**
     * To create Integer Object
     * @param {string|number} v
     * @returns
     */
    "new"(v: string | number): {
        "__#1@#value": any;
        valueOf(): any;
    };
};
export var Uint: {
    new (v: any): {
        "__#2@#value": any;
        valueOf(): any;
    };
    /**
     * To create Uint Object
     * @param {string|number} v
     * @returns
     */
    "new"(v: string | number): {
        "__#2@#value": any;
        valueOf(): any;
    };
};
/**
 * ! @preserve
 * convert an integer value below 65536 (16 bits or 2 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint16BE(int: number | string): TypeError | Uint8Array;
/**
 * ! @preserve
 * convert an integer value below 16777216 (24 bits or 3 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint24BE(int: number | string): TypeError | Uint8Array;
/**
 * ! @preserve
 * convert an integer value below 4294967296 (32 bits or 4 bytes) to Uint8Array
 * @param {number|string} int
 * @returns
 */
export function Uint32BE(int: number | string): TypeError | Uint8Array;
/**
 * ! @preserve
 * convert an integer value to Uint8Array
 * @param {number|string} int
 * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
 * @returns
 */
export function Uint8BE(int: number | string, bytes: 1 | 2 | 3 | 4 | "1" | "2" | "3" | "4"): TypeError | Uint8Array;
/**
 * ! @preserve
 * Concate two or more Uint8Array to one Uint8Array
 * @param  {Uint8Array[]} uint8s [Uint8Array]
 * @returns {Uint8Array} Uint8Array
 */
export function concat(..._uint8s: any[]): Uint8Array;
/**
 * ! @preserve
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
/**! @preserve
 *@typedef {number} uint
 *positive integer
 */
/**! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @returns {uint} positive integer
 */
export function ensureUint(int: number | string): uint;
/**
 * ! @preserve
 * get positive integer from 16 bytes array
 * @param {Uint8Array} data
 * @param {Uint} pos
 * @returns {Uint}
 */
export function getUint16(data: Uint8Array, pos: {
    "__#2@#value": any;
    valueOf(): any;
}): {
    "__#2@#value": any;
    valueOf(): any;
};
/**
 * ! @preserve
 * get positive integer from 24 bytes array
 * @param {Uint8Array} data
 * @param {Uint} pos
 * @returns {Uint}
 */
export function getUint24(data: Uint8Array, pos: {
    "__#2@#value": any;
    valueOf(): any;
}): {
    "__#2@#value": any;
    valueOf(): any;
};
/**
 * ! @preserve
 * get positive integer from 32 bytes array
 * @param {Uint8Array} data
 * @param {Uint} pos
 * @returns {Uint}
 */
export function getUint32(data: Uint8Array, pos: {
    "__#2@#value": any;
    valueOf(): any;
}): {
    "__#2@#value": any;
    valueOf(): any;
};
/**
 * ! @preserve
 * get positive integer from 8 bytes array
 * @param {Uint8Array} data
 * @param {Uint} pos
 * @returns {Uint}
 */
export function getUint8(data: Uint8Array, pos: {
    "__#2@#value": any;
    valueOf(): any;
}): {
    "__#2@#value": any;
    valueOf(): any;
};
/**
 * ! @preserve
 * @typedef {number} uint positive integer
*/
/**
 * ! @preserve
 * @param {Uint8Array} data
 * @param {Uint} pos
 * @param {Uint} length
 * @returns {Uint} The unsigned integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
export function getUint8BE(data: Uint8Array, pos?: {
    "__#2@#value": any;
    valueOf(): any;
}, length?: {
    "__#2@#value": any;
    valueOf(): any;
}): {
    "__#2@#value": any;
    valueOf(): any;
};
/**
 * ! @preserve
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
 * ! @preserve
 * return the maximum byte number to store the integer
 * ```
 * maxBytes(255) = 1
 * maxBytes(256) = 2
 * ```
 * @param {number|string} int - either number or string containing number
 * @returns
 */
export function maxBytes(int: number | string): number;
/**
 * ! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @returns {uint} positive integer
 */
export function uint(int: number | string): uint;
/**
 * ! @preserve
 * to return Uint8Array from Uint8Array, string, number or array
 * @param {Uint8Array|Array|string|number} data
 */
export function uint8array(data: Uint8Array | any[] | string | number): any;
