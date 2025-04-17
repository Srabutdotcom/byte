/**
 * Sanitizes and modifies `args[0]` in-place by slicing it based on length metadata encoded in the input.
 * Supports `Uint8Array`, `ArrayBuffer`, `Array`, or `Byte` (custom class with `.view` as Uint8Array).
 * 
 * @param {[(number | Array | ArrayBuffer | Uint8Array | { view: Uint8Array })]} args - A single-element array with a data source. Only the first element is used.
 * @param {object} [option] - Optional configuration.
 * @param {number} [option.start=0] - Byte offset where the data starts.
 * @param {number} [option.startLength=0] - Byte offset where length header starts.
 * @param {number} [option.minLength=0] - Minimum number of bytes the input must contain.
 * @param {number} [option.maxLength=2**32 - 1] - Maximum number of bytes the length header can indicate.
 * @param {number} [option.fixedLength = false] - if defined with number - represent Length of bytes with fixed length
 * @param {number} [option.all = false] - if true represent all bytes will be taken
 * @param {boolean} [option.trace=false] - If `true`, logs internal tracing via `console.trace()`.
 * 
 * @throws {RangeError} If length is outside bounds, or input is too short.
 * @throws {TypeError} If input is not a recognized byte-like object.
 * 
 * @returns {void}
 * @version __VERSION__
 */
export function sanitize(
   args: [number | Array<number> | ArrayBuffer | Uint8Array | { view: Uint8Array }],
   option?: {
     start?: number;
     startLength?: number;
     minLength?: number;
     maxLength?: number;
     trace?: boolean;
   }
 ): void;
 