/**
 * Converts various input types to a Uint8Array.
 *
 * @param {any} value - The input value to convert.
 * @returns {Uint8Array | Array<number>} - The Uint8Array or Array<number> representation of the input.
 * @throws {TypeError} - If the input is not a Uint8Array, Array, positive integer, or string.
 */
declare function arraying(value: any): Uint8Array | number[];

/**
 * A class that mimics the methods and behavior of Uint8Array.
 */
export class Byte {
  /**
   * The internal Uint8Array view.
   * @private
   */
  #_view: Uint8Array;

  /**
   * Creates a new Byte instance from the given array.
   *
   * @param {any} array - The array-like data to create the Byte instance from.
   * @returns {Byte} - A new Byte instance.
   */
  static create(array: any): Byte;

  /**
   * Creates a new Byte instance.
   *
   * @param {ArrayBuffer | Array<number> | Uint8Array | number} initialData - The initial data for the Byte instance.
   */
  constructor(initialData: ArrayBuffer | number[] | Uint8Array | number);

  /**
   * Gets the length of the Byte instance.
   *
   * @returns {number} - The length of the Byte instance.
   */
  get length(): number;

  /**
   * Gets the underlying ArrayBuffer of the Byte instance.
   *
   * @returns {ArrayBuffer} - The ArrayBuffer.
   */
  get buffer(): ArrayBuffer;

  /**
   * Gets the byte offset of the Byte instance.
   *
   * @returns {number} - The byte offset.
   */
  get byteOffset(): number;

  /**
   * Gets the byte length of the Byte instance.
   *
   * @returns {number} - The byte length.
   */
  get byteLength(): number;

  /**
   * Gets the string tag of the Byte instance.
   *
   * @returns {string} - The string tag.
   */
  get [Symbol.toStringTag](): string;

  /**
   * Gets the underlying Uint8Array view.
   *
   * @returns {Uint8Array} - The Uint8Array view.
   */
  get view(): Uint8Array;

  /**
   * Appends an array-like data to the end of the Byte instance.
   *
   * @param {any} array - The array-like data to append.
   */
  append(array: any): void;

  /**
   * Prepends an array-like data to the beginning of the Byte instance.
   *
   * @param {any} array - The array-like data to prepend.
   */
  prepend(array: any): void;

  /**
   * Inserts an array-like data into the Byte instance at the specified index.
   *
   * @param {any} array - The array-like data to insert.
   * @param {number} index - The index to insert the data at.
   */
  insert(array: any, index: number): void;

  /**
   * Converts the Byte instance to a Base64 string.
   *
   * @returns {string} - The Base64 string representation of the Byte instance.
   */
  toBase64(): string;

  /**
   * Converts the Byte instance to a Base64URL string.
   *
   * @returns {string} - The Base64URL string representation of the Byte instance.
   */
  toBase64Url(): string;

  /**
   * Converts the Byte instance to a hexadecimal string.
   *
   * @returns {string} - The hexadecimal string representation of the Byte instance.
   */
  toHex(): string;

  /**
   * Returns a new Byte instance containing a subarray of the current Byte instance.
   *
   * @param {number} [begin=0] - The beginning index of the subarray.
   * @param {number} [end=this.length] - The ending index of the subarray.
   * @returns {Byte} - A new Byte instance containing the subarray.
   */
  subarray(begin?: number, end?: number): Byte;

  /**
   * Sets a value or values in a specified array.
   *
   * @param {ArrayLike<number>} array - An array of values to set.
   * @param {number} [offset=0] - The index in the current array to start writing the values.
   */
  set(array: ArrayLike<number>, offset?: number): void;

  /**
   * Returns a new Byte instance containing a slice of the current Byte instance.
   *
   * @param {number} [begin=0] - The beginning index of the slice.
   * @param {number} [end=this.length] - The ending index of the slice.
   * @returns {Byte} - A new Byte instance containing the slice.
   */
  slice(begin?: number, end?: number): Byte;

  /**
   * Copies a sequence of array elements within the Byte instance.
   *
   * @param {number} target - The target index to copy the sequence to.
   * @param {number} start - The starting index of the sequence to copy from.
   * @param {number} [end=this.length] - The ending index of the sequence to copy from.
   * @returns {Byte} - The modified Byte instance.
   */
  copyWithin(target: number, start: number, end?: number): Byte;

  /**
   * Fills all the elements of the Byte instance from a start index to an end index with a static value.
   *
   * @param {number} value - The value to fill the Byte instance with.
   * @param {number} [start=0] - The starting index.
   * @param {number} [end=this.length] - The ending index.
   * @returns {Byte} - The modified Byte instance.
   */
  fill(value: number, start?: number, end?: number): Byte;

  /**
   * Returns the first index at which a given element can be found in the Byte instance, or -1 if it is not present.
   *
   * @param {number} searchValue - The value to locate in the Byte instance.
   * @param {number} [fromIndex=0] - The index to start the search at.
   * @returns {number} - The index of the found element, or -1 if not found.
   */
  indexOf(searchValue: number, fromIndex?: number): number;

  /**
   * Returns the last index at which a given element can be found in the Byte instance, or -1 if it is not present.
   *
   * @param {number} searchValue - The value to locate in the Byte instance.
   * @param {number} [fromIndex=this.length - 1] - The index to start the search at.
   * @returns {number} - The index of the found element, or -1 if not found.
   */
  lastIndexOf(searchValue: number, fromIndex?: number): number;

  /**
   * Tests whether all elements in the Byte instance pass the test implemented by the provided function.
   *
   * @param {(value: number, index: number, array: Uint8Array) => boolean} callback - The function to test each element.
   * @param {any} thisArg - Value to use as `this` when executing callback.
   * @returns {boolean} - `true` if all elements pass the test, `false` otherwise.
   */
  every(callback: (value: number, index: number, array: Uint8Array) => boolean, thisArg?: any): boolean;

  /**
   * Tests whether some element in the Byte instance passes the test implemented by the provided function.
   *
   * @param {(value: number, index: number, array: Uint8Array) => boolean} callback - The function to test each element.
   * @param {any} thisArg - Value to use as `this` when executing callback.
   * @returns {boolean} - `true` if some element passes the test, `false` otherwise.
   */
  some(callback: (value: number, index: number, array: Uint8Array) => boolean, thisArg?: any): boolean;

  /**
   * Executes a provided function once for each Byte instance element.
   *
   * @param {(value: number, index: number, array: Uint8Array) => void} callback - Function to execute for each element.
   * @param {any} thisArg - Value to use as `this` when executing callback.
   */
  forEach(callback: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;

  /**
   * Creates a new Byte instance with the results of calling a provided function on every element in the calling Byte instance.
   *
   * @param {(value: number, index: number, array: Uint8Array) => number} callback - Function that produces an element of the new Byte instance.
   * @param {any} thisArg - Value to use as `this` when executing callback.
   * @returns {Byte} - A new Byte instance with each element being the result of the callback function.
   */
  map(callback: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Byte;

  /**
   * Creates a new Byte instance with all elements that pass the test implemented by the provided function.
   *
   * @param {(value: number, index: number, array: Uint8Array) => boolean} callback - Function to test each element of the Byte instance.
   * @param {any} thisArg - Value to use as `this` when executing callback.
   * @returns {Byte} - A new Byte instance with the elements that pass the test.
   */
  filter(callback: (value: number, index: number, array: Uint8Array) => boolean, thisArg?: any): Byte;

  /**
   * Applies a function against an accumulator and each value of the Byte instance (from left-to-right) to reduce it to a single value.
   *
   * @param {(accumulator: number, currentValue: number, currentIndex: number, array: Uint8Array) => number} callback - Function to execute on each value in the Byte instance.
   * @param {number} initialValue - Value to use as the first argument to the first call of the callback.
   * @returns {number} - The single value that results from the reduction.
   */
  reduce(callback: (accumulator: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;

  /**
   * Applies a function against an accumulator and each value of the Byte instance (from right-to-left) to reduce it to a single value.
   *
   * @param {(accumulator: number, currentValue: number, currentIndex: number, array: Uint8Array) => number} callback - Function to execute on each value in the Byte instance.
   * @param {number} initialValue - Value to use as the first argument to the first call of the callback.
   * @returns {number} - The single value that results from the reduction.
   */
  reduceRight(callback: (accumulator: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;

  /**
   * Reverses the elements in the Byte instance in place.
   *
   * @returns {Byte} - The reversed Byte instance.
   */
  reverse(): Byte;

  /**
   * Sorts the elements of the Byte instance in place and returns the sorted Byte instance.
   *
   * @param {(a: number, b: number) => number} compareFunction - Specifies a function that defines the sort order.
   * @returns {Byte} - The sorted Byte instance.
   */
  sort(compareFunction?: (a: number, b: number) => number): Byte;

  /**
   * Returns a string representation of the Byte instance.
   *
   * @returns {string} - A string representation of the Byte instance.
   */
  toString(): string;

  /**
   * Returns a localized string representing the Byte instance.
   *
   * @returns {string} - A localized string representing the Byte instance.
   */
  toLocaleString(): string;

  /**
   * Returns an iterator for the Byte instance.
   *
   * @returns {IterableIterator<number>} - An iterator for the Byte instance.
   */
  [Symbol.iterator](): IterableIterator<number>;

  /**
   * Returns an iterator for the key/value pairs for every entry in the Byte instance.
   *
   * @returns {IterableIterator<[number, number]>} - An iterator for the entries.
   */
  entries(): IterableIterator<[number, number]>;

  /**
   * Returns an iterator for the keys in the Byte instance.
   *
   * @returns {IterableIterator<number>} - An iterator for the keys.
   */
  keys(): IterableIterator<number>;

  /**
   * Returns an iterator for the values in the Byte instance.
   *
   * @returns {IterableIterator<number>} - An iterator for the values.
   */
  values(): IterableIterator<number>;
}