/**
 * Byte, collection of byte function
 */
export class Byte {
    static get: {
        BE: {
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b8: typeof getUint8;
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b16: typeof getUint16;
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b24: typeof getUint24;
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b32: typeof getUint32;
        };
    };
    static set: {
        BE: {
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b8: typeof Uint8BE;
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b16: typeof Uint16BE;
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b24: typeof Uint24BE;
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b32: typeof Uint32BE;
        };
    };
    /**
     * Concate two or more Uint8Array to one Uint8Array
     * @param  {Uint8Array[]} uint8s [Uint8Array]
     * @return {Uint8Array} Uint8Array
     */
    static concat: typeof concat;
}
import type { getUint8, getUint16, getUint24, getUint32 } from "../src/get.js";
import type { Uint8BE, Uint16BE, Uint24BE, Uint32BE } from "../src/set.js";
import type { concat } from "../src/concat.js";
