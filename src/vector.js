//@ts-self-types="../type/vector.d.ts"

export function arraying(value) {
   if (value instanceof Uint8Array || Array.isArray(value)) return value;
   if (value instanceof Byte) return value.view;
   if (typeof value === 'string') return encoder.encode(value);
   if (value == null || value === false) return new Uint8Array();
   if (isByte(value)) return new Uint8Array(value);
   throw new TypeError('Value must be a Uint8Array, Array, or string.');
}

export function vector(array, option = { min: 0, max: 255 }) {
   array = arraying(array);
   const { min = 0, max = 255 } = option;
   if (min < 0) throw new RangeError(`min should be above 0`)
   if (max > 4294967296) throw new RangeError(`max should be < 16777216`)
   const lengthBytes = Math.ceil(Math.log2(max + 1) / 8); // e.g., 2 for 65535
   if (array.length < min) throw new RangeError(`Minimal length: ${min}`);
   if (array.length > max) throw new RangeError(`Maximal length: ${max}`);
   switch (lengthBytes) {
      case 1: return vector8(array);
      case 2: return vector16(array);
      case 3: return vector24(array);
      case 4: return vector32(array)
      default: return vector8(array)
   }
}

export function vector8(array) {
   const n = array.length
   const res = new Uint8Array(n + 1);
   res.set(array, 1);
   res[0] = n & 0xFF;
   return res
}

export function vector16(array) {
   const n = array.length
   const res = new Uint8Array(n + 2);
   res.set(array, 2);
   res[1] = n & 0xFF;
   if (n < 256) return res;
   res[0] = (n >> 8) & 0xFF;
   return res
}

export function vector24(array) {
   const n = array.length
   const res = new Uint8Array(n + 3);
   res.set(array, 3);
   res[2] = n & 0xFF;
   if (n < 256) return res;
   res[1] = (n >> 8) & 0xFF;
   if (n < 65536) return res;
   res[0] = (n >> 16) & 0xFF;
   return res
}

export function vector32(array) {
   const n = array.length
   const res = new Uint8Array(n + 4);
   res.set(array, 4);
   res[3] = n & 0xFF;
   if (n < 256) return res;
   res[2] = (n >> 8) & 0xFF;
   if (n < 65536) return res;
   res[1] = (n >> 16) & 0xFF;
   if (n < 16777216) return res;
   res[0] = (n >> 24) & 0xFF;
   return res
}
