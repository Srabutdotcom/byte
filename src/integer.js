//@ts-self-types="../type/get.d.ts"
/**
 * Converts input to an integer if possible, or throws a TypeError if invalid.
 * If the input is a float, it will be truncated to an integer.
 * 
 * @param {number|string} int - Input number or string to be converted.
 * @return {number} - Integer value.
 * @throws {TypeError} - If the input is not a valid integer.
 */
export function ensureInteger(int) {
   int = Math.trunc(Number(int));
   if (!Number.isInteger(int)) throw TypeError(`Expected integer but got ${int}`);
   return int;
}

/**
 * Converts input to a positive integer if possible, or throws a TypeError if invalid.
 * 
 * @param {number|string} int - Input number or string to be converted.
 * @return {number} - Positive integer.
 * @throws {TypeError} - If the input is not a positive integer.
 */
export function ensureUint(int) {
   int = ensureInteger(int);
   if (int < 0) throw TypeError(`expected positive integer but got ${int}`)
   return int;
}

/**
 * return positive integer or throw TypeError
 * @param {number|string} int 
 * @return {number} positive integer 
 */
export function uint(int) {
   return ensureUint(int)
}

/**
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} int 
 * @return {number} integer
 */
export function integer(int) {
   return ensureInteger(int)
}

/**
 * Integer class to encapsulate integer values.
 */
export class Integer {
   #value
   /**
    * To create Integer Object
    * @param {string|number} v 
    * @return 
    */
   static of(v) {
      v= ensureInteger(v)
      return new Integer(v);
   }
   static create(v) { return Uint.of(v)}
   static from(v) { return Uint.of(v)}
   constructor(v) {
      this.#value = v
   }
   valueOf() { return this.#value }
   toString() { return String(this.#value); }
   get value() { return this.#value; }
}
/**
 * Uint - represent positive integer value
 */
export class Uint {
   #value
   /**
    * To create Uint Object
    * @param {string|number} v 
    * @return 
    */
   static of(v) {
      return new Uint(ensureUint(v));
   }
   static create(v) { return Uint.of(v)}
   static from(v) { return Uint.of(v)}
   constructor(v) {
      this.#value = v
   }
   valueOf() { return this.#value }
   toString() { return String(this.#value); }
   get value() { return this.#value; }
}

// npx -p typescript tsc ./src/integer.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist