
/**
 * ! @preserve
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} integer 
 * @returns {integer} integer
 */
export function ensureInteger(integer) {
   integer = +Number(integer).toFixed(0);
   const pass = Number.isInteger(integer)
   if (!pass) throw TypeError(`expected integer but got ${integer}`);
   return integer
}

/**
 * ! @preserve
 *@typedef {number} integer 
 *integer positive or negative
 */
 
/**! @preserve
 *@typedef {number} uint 
 *positive integer
 */

/**! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} integer
 * @returns {uint} positive integer 
 */
export function ensureUint(integer) {
   integer = ensureInteger(integer);
   if (integer < 0) throw TypeError(`expected positive integer but got ${integer}`)
   return integer;
}

/**
 * ! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} integer 
 * @returns {uint} positive integer 
 */
export function uint(integer){
   return ensureUint(integer)
}

/**
 * ! @preserve
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} integer 
 * @returns {integer} integer
 */
export function integer(integer){
   return ensureInteger(integer)
}