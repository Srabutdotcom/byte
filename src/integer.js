
/**
 * ! @preserve
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} int 
 * @returns {integer} integer
 */
export function ensureInteger(int) {
   int = +Number(int).toFixed(0);
   const pass = Number.isInteger(int)
   if (!pass) throw TypeError(`expected integer but got ${integer}`);
   return int
}

/**! @preserve
 *@typedef {number} uint 
 *positive integer
 */

/**! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @returns {uint} positive integer 
 */
export function ensureUint(int) {
   int = ensureInteger(int);
   if (int < 0) throw TypeError(`expected positive integer but got ${int}`)
   return int;
}

/**
 * ! @preserve
 * return positive integer or throw TypeError
 * @param {number|string} int 
 * @returns {uint} positive integer 
 */
export function uint(int){
   return ensureUint(int)
}

/**
 * ! @preserve
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} int 
 * @returns {integer} integer
 */
export function integer(int){
   return ensureInteger(int)
}