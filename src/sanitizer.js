//@ts-self-types="../type/sanitize.d.ts"

const encoder = new TextEncoder

/**
 * Sanitizes and modifies `args[0]` in-place by slicing it based on length metadata encoded in the input.
 * Supports `Uint8Array`, `ArrayBuffer`, `Array`, or `Byte` (custom class with `.view` as Uint8Array).
 * 
 * @param {[(number | Array | ArrayBuffer | Uint8Array | { view: Uint8Array })]} args - A single-element array with a data source. Only the first element is used.
 * @param {object} [option] - Optional configuration.
 * @param {number} [option.start=0] - Byte offset where the data starts.
 * @param {number} [option.min=0] - Minimum number of bytes the input must contain.
 * @param {number} [option.max=2**32 - 1] - Maximum number of bytes the length header can indicate.
 * @param {boolean} [option.trace=false] - If `true`, logs internal tracing via `console.trace()`.
 * 
 * @throws {RangeError} If length is outside bounds, or input is too short.
 * @throws {TypeError} If input is not a recognized byte-like object.
 * 
 * @returns {void}
 */
export function sanitize(args, option = {
   start: 0, min: 0, max: 2 ** 32 - 1,
   fixedLength: false, all: false,
   trace: false
}) {
   const {
      start = 0,
      min = 0,
      max = 2 ** 32 - 1,
      fixedLength = undefined,
      all = false,
      trace = false
   } = option

   if (max > 2 ** 32 - 1) throw new RangeError(`max should be less than 2**32-1`)

   if (args.length > 1) return;

   let a0 = args[0];

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
      if (trace) console.trace({ "arraying string": a0 })
      args[0] = a0;
      return
   }

   if (all) {
      args[0] = a0.subarray(start);
      if (trace) console.trace({ "returning all": args[0] })
      return
   }

   if (fixedLength && typeof fixedLength == "number") {
      args[0] = a0.subarray(start, start + fixedLength);
      if (trace) console.trace({ "returning fixedLength": args[0] })
      return
   }

   if (a0.length < min) {
      throw new RangeError(`Input must be at least ${min} byte(s)`);
   }

   const lengthBytes = Math.ceil(Math.log2(max + 1) / 8); // e.g., 2 for 65535
   if (trace) console.trace({ lengthBytes })
   if (a0.length < lengthBytes) {
      throw new RangeError(`Input must be at least ${lengthBytes} bytes to extract length`);
   }

   // Parse length value from the prefix
   let lengthOf = 0;
   const endLength = start + lengthBytes;
   for (let i = start; i < endLength; i++) {
      lengthOf = (lengthOf << 8) | a0[i];
   }
   if (trace) console.trace({ endLength })

   if (lengthOf > max) {
      throw new RangeError(`Length ${lengthOf} exceeds maximum size ${max}`);
   }

   const end = start + lengthBytes + lengthOf;

   args[0] = a0.subarray(0, end);
   if (trace) console.trace({ args: args[0] })
}

