//@ts-self-types="../type/concat.d.ts"
/**
 * Concatenates two or more Uint8Arrays into a single Uint8Array
 * @param {(Uint8Array|number[])[]} arrays - Array of Uint8Array or number arrays to concatenate
 * @returns {Uint8Array} - A new Uint8Array containing all the bytes from the input arrays
 * @throws {TypeError} If any input element is neither a Uint8Array nor a number array
 */
export function concat(...arrays) {
   // Input validation
   if (arrays.length === 0) {
     return new Uint8Array(0);
   }
 
   // Convert and validate input arrays
   const uint8Arrays = arrays.map((arr, index) => {
     if (arr instanceof Uint8Array) {
       return arr;
     }
     if (Array.isArray(arr)) {
       // Validate that all elements are valid byte values
       if (arr.some(val => !Number.isInteger(val) || val < 0 || val > 255)) {
         throw new TypeError(`Array at index ${index} contains invalid byte values`);
       }
       return new Uint8Array(arr);
     }
     throw new TypeError(`Element at index ${index} must be Uint8Array or Array`);
   });
 
   // Calculate total length
   const totalLength = uint8Arrays.reduce((sum, arr) => sum + arr.length, 0);
 
   // Create result array and copy data
   const result = new Uint8Array(totalLength);
   let offset = 0;
 
   for (const arr of uint8Arrays) {
     result.set(arr, offset);
     offset += arr.length;
   }
 
   return result;
 }
