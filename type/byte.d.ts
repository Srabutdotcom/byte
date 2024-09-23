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
            b8: typeof get.getUint8;
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b16: typeof get.getUint16;
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b24: typeof get.getUint24;
            /**
             * @method
             * @param {Uint8Array} data
             * @param {number} pos - positive integer, represent byteoffset.
             * @return {number} Positive integer value
             */
            b32: typeof get.getUint32;
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
            b8: typeof set.Uint8BE;
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b16: typeof set.Uint16BE;
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b24: typeof set.Uint24BE;
            /**
             * convert an integer value to Uint8Array
             * @param {number|string} int
             * @param {1|2|3|4|"1"|"2"|"3"|"4"} bytes
             * @return {Uint8Array}
             */
            b32: typeof set.Uint32BE;
        };
    };
    /**
     * Concate two or more Uint8Array to one Uint8Array
     * @param  {Uint8Array[]} uint8s [Uint8Array]
     * @return {Uint8Array} Uint8Array
     */
    static concat: typeof concat;
}
import * as get from "../src/get.js";
import * as set from "../src/set.js";
import { concat } from "../src/concat.js";
