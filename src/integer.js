//@ts-self-types="../type/get.d.ts"
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
export function ensureInteger(int) {
   int = +Number(int).toFixed(0);
   const pass = Number.isInteger(int)
   if (!pass) throw TypeError(`expected integer but got ${int}`);
   return int
}

/**
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @return {number} positive integer 
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
 * Integer - represent integer value positive or negative
 */
export class Integer {
   /**
    * To create Integer Object
    * @param {string|number} v 
    * @return 
    */
   static new(v) {
      v = ensureInteger(v);
      return new Integer(v);
   }
   #value
   constructor(v) {
      this.#value = v
   }
   valueOf() { return this.#value }
}
/**
 * Uint - represent positive integer value
 */
export class Uint {
   /**
    * To create Uint Object
    * @param {string|number} v 
    * @return 
    */
   static new(v) {
      v = ensureUint(v);
      return new Uint(v);
   }
   #value
   constructor(v) {
      this.#value = v
   }
   valueOf() { return this.#value }
}