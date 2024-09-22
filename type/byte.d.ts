/**
 * Byte, collection of byte function
 */
export class Byte {
    static get: {
        BE: {
            b8: typeof get.getUint8;
            b16: typeof get.getUint16;
            b24: typeof get.getUint24;
            b32: typeof get.getUint32;
        };
    };
    static set: {
        BE: {
            b8: typeof set.Uint8BE;
            b16: typeof set.Uint16BE;
            b24: typeof set.Uint24BE;
            b32: typeof set.Uint32BE;
        };
    };
    static concat: typeof concat;
}
import * as get from "../src/get.js";
import * as set from "../src/set.js";
import { concat } from "../src/concat.js";
