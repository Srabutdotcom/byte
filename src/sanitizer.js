//@ts-self-types="../type/sanitize.d.ts"
import { Byte } from "./byte.js";

const encoder = new TextEncoder

/**
 * Sanitizes and modifies `args[0]` in-place by slicing it based on length metadata encoded in the input.
 * Supports `Uint8Array`, `ArrayBuffer`, `Array`, or `Byte` (custom class with `.view` as Uint8Array).
 * 
 * @param {[(number | Array | ArrayBuffer | Uint8Array | { view: Uint8Array })]} args - A single-element array with a data source. Only the first element is used.
 * @param {object} [option] - Optional configuration.
 * @param {number} [option.start=0] - Byte offset where the data starts.
 * @param {number} [option.startLength=undefined] - Byte offset where length header starts, undefined mean all data are extracted.
 * @param {number} [option.minLength=0] - Minimum number of bytes the input must contain.
 * @param {number} [option.maxLength=2**32 - 1] - Maximum number of bytes the length header can indicate.
 * @param {boolean} [option.trace=false] - If `true`, logs internal tracing via `console.trace()`.
 * 
 * @throws {RangeError} If length is outside bounds, or input is too short.
 * @throws {TypeError} If input is not a recognized byte-like object.
 * 
 * @returns {void}
 */
export function sanitize(args, option = { start: 0, startLength: undefined, minLength: 0, maxLength: 2 ** 32 - 1, trace: false }) {
   const {
      start = 0,
      startLength = undefined,
      minLength = 0,
      maxLength = 2 ** 32 - 1,
      trace = false
   } = option

   if (maxLength > 2 ** 32 - 1) throw new RangeError(`maxLength should be less than 2**32-1`)

   if (args.length > 1) return;

   let a0 = args[0];

   // for Byte custome object 
   if (a0 instanceof Byte) {
      a0 = a0.view;
   }

   // for Array value
   if (Array.isArray(a0)) {
      a0 = new Uint8Array(a0);
   }

   //for ArrayBuffer
   if (a0 instanceof ArrayBuffer) {
      a0 = new Uint8Array(a0)
   }

   // for string
   if (typeof a0 == 'string') {
      a0 = encoder.encode(a0);
      console.trace({ "arraying string": a0 })
   }

   if(startLength === undefined){
      args[0] = a0.subarray(start);
      console.trace({"returning all":args[0]})
      return 
   }

   if (a0.length < minLength) {
      throw new RangeError(`Input must be at least ${minLength} byte(s)`);
   }

   const lengthBytes = Math.ceil(Math.log2(maxLength + 1) / 8); // e.g., 2 for 65535
   if (trace) console.trace({ lengthBytes })
   if (a0.length < lengthBytes) {
      throw new RangeError(`Input must be at least ${lengthBytes} bytes to extract length`);
   }

   // Parse length value from the prefix
   let lengthOf = 0;
   const endLength = startLength + lengthBytes;
   for (let i = startLength; i < endLength; i++) {
      lengthOf = (lengthOf << 8) | a0[i];
   }
   if (trace) console.trace({ endLength })

   if (lengthOf > maxLength) {
      throw new RangeError(`Length ${lengthOf} exceeds maximum size ${maxLength}`);
   }

   const end = startLength + lengthOf;

   const lengthofData = a0.length - start - lengthBytes;
   if (lengthofData < end) {
      throw new RangeError(`Input too short. Expected at least ${end} bytes but got ${lengthofData}`);
   }

   args[0] = a0.subarray(start, end);
   if (trace) console.trace({ args: args[0] })
}

