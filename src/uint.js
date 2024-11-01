//@ts-self-types="../type/uint.d.ts"

/**
 * Represents an 8-bit unsigned integer as a Uint8Array.
 */
export class Uint8 extends Uint8Array {
   /**
    * Creates a Uint8 instance from a given number, ensuring the value is within 8-bit range.
    * 
    * @param {number} uint8 - The number to be converted (0 - 255).
    * @returns {Uint8} A Uint8 instance containing the 8-bit integer.
    */
   static fromValue(uint8) {
      return new Uint8([uint8 % 256]);
   }

   /**
    * Retrieves the integer value represented by this Uint8.
    * 
    * @returns {number} The 8-bit integer value (0 - 255).
    */
   value() { return this[0]; }
}

/**
 * Represents a 16-bit unsigned integer as a Uint8Array.
 */
export class Uint16 extends Uint8Array {
   /**
    * Creates a Uint16 instance from a given number, ensuring the value is within 16-bit range.
    * 
    * @param {number} uint16 - The number to be converted (0 - 65535).
    * @returns {Uint16} A Uint16 instance containing the 16-bit integer.
    */
   static fromValue(uint16) {
      return new Uint16([Math.trunc(uint16 / 256), uint16 % 256]);
   }

   /**
    * Retrieves the integer value represented by this Uint16.
    * 
    * @returns {number} The 16-bit integer value (0 - 65535).
    */
   value() { return this[0] * 256 + this[1]; }
}

/**
 * Represents a 24-bit unsigned integer as a Uint8Array.
 */
export class Uint24 extends Uint8Array {
   /**
    * Creates a Uint24 instance from a given number, ensuring the value is within 24-bit range.
    * 
    * @param {number} uint24 - The number to be converted (0 - 16777215).
    * @returns {Uint24} A Uint24 instance containing the 24-bit integer.
    */
   static fromValue(uint24) {
      return new Uint24([Math.trunc(uint24 / 65536), Math.trunc(uint24 / 256), uint24 % 256]);
   }

   /**
    * Retrieves the integer value represented by this Uint24.
    * 
    * @returns {number} The 24-bit integer value (0 - 16777215).
    */
   value() { return this[0] * 65536 + this[1] * 256 + this[2]; }
}

/**
 * Represents a 32-bit unsigned integer as a Uint8Array.
 */
export class Uint32 extends Uint8Array {
   /**
    * Creates a Uint32 instance from a given number, ensuring the value is within 32-bit range.
    * 
    * @param {number} uint32 - The number to be converted (0 - 4294967295).
    * @returns {Uint32} A Uint32 instance containing the 32-bit integer.
    */
   static fromValue(uint32) {
      return new Uint32([Math.trunc(uint32 / 16777216), Math.trunc(uint32 / 65536), Math.trunc(uint32 / 256), uint32 % 256]);
   }

   /**
    * Retrieves the integer value represented by this Uint32.
    * 
    * @returns {number} The 32-bit integer value (0 - 4294967295).
    */
   value() { return this[0] * 16777216 + this[1] * 65536 + this[2] * 256 + this[3]; }
}

// npx -p typescript tsc ./src/uint.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist