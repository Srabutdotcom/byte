/**
 * A byte-like source that can be sanitized.
 */
export type ByteLike =
  | number
  | Array<number>
  | ArrayBuffer
  | Uint8Array
  | { view: Uint8Array }
  | string;

/**
 * @version 0.8.8
 * Sanitizes and modifies `args[0]` in-place by slicing it based on length metadata encoded in the input.
 * Supports Uint8Array, ArrayBuffer, Array, or Byte (custom class with `.view` as Uint8Array).
 *
 * @param args - A single-element array with a data source. Only the first element is used.
 * @param option - Optional configuration object.
 * @param option.start - Byte offset where the data starts. Defaults to 0.
 * @param option.min - Minimum number of bytes the input must contain. Defaults to 0.
 * @param option.max - Maximum number of bytes the length header can indicate. Defaults to 2^32 - 1.
 * @param option.fixedLength - If provided as a number, slices a fixed length from the input.
 * @param option.all - If true, returns all bytes starting from `start`.
 * @param option.trace - If true, logs internal tracing via console.trace().
 *
 * @throws {RangeError} If length is outside bounds, or input is too short.
 * @throws {TypeError} If input is not a recognized byte-like object.
 *
 * @returns void
 */
export function sanitize(
  args: [ByteLike?],
  option?: {
    start?: number;
    min?: number;
    max?: number;
    fixedLength?: number | false;
    all?: boolean;
    trace?: boolean;
  }
): void;


 