// @ts-self-types="./bytes.d.ts"
// concat.js
/** 
 * Concate two or more Uint8Array to one Uint8Array
 * @param  {Uint8Array[]} uint8s [Uint8Array]
 * @returns {Uint8Array} Uint8Array
 */
function concat(..._uint8s) {
  _uint8s = uint8s(_uint8s);
  const l = _uint8s.reduce((ac, ar) => ac + (ar?.length ?? 0), 0);
  const r = new Uint8Array(l);
  let o = 0;
  for (const e2 of _uint8s) {
    r.set(e2, o);
    o += e2?.length;
  }
  return r;
}
function uint8s(_uint8s) {
  return _uint8s.map((e2) => {
    if (e2 instanceof Uint8Array)
      return e2;
    if (Array.isArray(e2))
      return new Uint8Array(e2);
    throw TypeError(`Elements must be Uint8Array or Array`);
  });
}

// integer.js
/**
 * 
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} int 
 * @returns {integer} integer
 */
function ensureInteger(int) {
  int = +Number(int).toFixed(0);
  const pass = Number.isInteger(int);
  if (!pass)
    throw TypeError(`expected integer but got ${integer}`);
  return int;
}
/**
 *@typedef {number} uint 
 *positive integer
 */
/**
 * return positive integer or throw TypeError
 * @param {number|string} int
 * @returns {uint} positive integer 
 */
function ensureUint(int) {
  int = ensureInteger(int);
  if (int < 0)
    throw TypeError(`expected positive integer but got ${int}`);
  return int;
}
/**
 * 
 * return positive integer or throw TypeError
 * @param {number|string} int 
 * @returns {uint} positive integer 
 */
function uint(int) {
  return ensureUint(int);
}
/**
 * 
 * return integer from string or number.
 * 
 * if string contain a floating number then it will be converted to integer
 * 
 * throw TypeError if string can't be converted to integer 
 * 
 * @param {number|string} int 
 * @returns {integer} integer
 */
function integer(int) {
  return ensureInteger(int);
}

// set.js
/**
 * convert an integer value to Uint8Array
 * @param {number|string} int 
 * @param {number|string} bytes 
 * @returns 
 */
function Uint8BE(int, bytes) {
  int = ensureUint(int);
  bytes = bytes ? ensureUint(bytes) : maxBytes(int);
  const upper = 2 ** (8 * bytes) - 1;
  if (int > upper)
    return TypeError(`integer can't be more than ${upper} `);
  const uint8 = new Uint8Array(bytes);
  for (let i = 0; i < bytes; i++) {
    const index = bytes - 1 - i;
    const shiftAmount = index * 8;
    uint8[i] = int >> shiftAmount & 255;
  }
  return uint8;
}
/**
 * convert an integer value below 65536 (16 bits or 2 bytes) to Uint8Array
 * @param {number|string} int 
 * @returns 
 */
function Uint16BE(int) {
  return Uint8BE(int, 2);
}
/**
 * convert an integer value below 16777216 (24 bits or 3 bytes) to Uint8Array
 * @param {number|string} int 
 * @returns 
 */
function Uint24BE(int) {
  return Uint8BE(int, 3);
}
/**
 * convert an integer value below 4294967296 (32 bits or 4 bytes) to Uint8Array
 * @param {number|string} int 
 * @returns 
 */
function Uint32BE(int) {
  return Uint8BE(int, 4);
}
/**
 * return the maximum byte number to store the integer
 * ```
 * maxBytes(255) = 1
 * maxBytes(256) = 2
 * ```
 * @param {number|string} int - either number or string containing number
 * @returns 
 */
function maxBytes(int) {
  int = ensureInteger(int);
  let b = 1;
  while (true) {
    if (2 ** (b * 8) > int)
      return b;
    b++;
  }
}

// get.js
/** 
 * @typedef {number} uint positive integer
*/
/** 
 * @param {Uint8Array} data 
 * @param {uint} pos 
 * @param {uint} length 
 * @returns {uint} The unsigned integer value, or throws an error if the provided data is not a byte array,
       the position is out of bounds, or the length is less than 1.
 */
function getUint8BE(data, pos = 0, length = 1) {
  data = uint8array(data);
  pos = uint(pos);
  length = uint(length);
  if (pos >= data.length) {
    throw new TypeError("Position is out of bounds");
  }
  if (pos + length > data.length) {
    throw TypeError(`length is beyond data.length`);
  }
  let output = 0;
  for (let i = pos; i < pos + length; i++) {
    output = output << 8 | data[i];
  }
  return output;
}
/**
 * get positive integer from 8 bytes array
 * @param {Uint8Array} data 
 * @param {uint} pos 
 * @returns {uint}
 */
function getUint8(data, pos) {
  return getUint8BE(data, pos, 1);
}
/**
 * get positive integer from 16 bytes array
 * @param {Uint8Array} data 
 * @param {uint} pos 
 * @returns {uint}
 */
function getUint16(data, pos) {
  return getUint8BE(data, pos, 2);
}
/**
 * get positive integer from 24 bytes array
 * @param {Uint8Array} data 
 * @param {uint} pos 
 * @returns {uint}
 */
function getUint24(data, pos) {
  return getUint8BE(data, pos, 3);
}
/** 
 * get positive integer from 32 bytes array
 * @param {Uint8Array} data 
 * @param {uint} pos 
 * @returns {uint}
 */
function getUint32(data, pos) {
  return getUint8BE(data, pos, 4);
}

// uint8array.js
/**
 * 
 * to return Uint8Array from Uint8Array, string, number or array
 * @param {Uint8Array|Array|string|number} data 
 */
function uint8array(data) {
  if (data instanceof Uint8Array)
    return data;
  const enc = new TextEncoder();
  if (typeof data == "string")
    return enc.encode(data);
  if (typeof data == "number")
    return Uint8BE(uint(data));
  if (Array.isArray(data)) {
    return concat(data.map((e2) => {
      if (e2 instanceof Uint8Array)
        return e2;
      if (typeof e2 == "number") {
        return Uint8BE(uint(e2));
      }
      if (typeof e2 == "string") {
        return enc.encode(e2);
      }
      if (Object.hasOwn(e2, "toString")) {
        return enc.encode(e2.toString());
      }
      throw TypeError(`can't convert data to Uint8Array`);
    }));
  }
  if (Object.hasOwn(e, "toString")) {
    return enc.encode(e.toString());
  }
  throw TypeError(`can't convert data to Uint8Array`);
}

// mod.js
/**
 * @ts-self-types="./bytes.d.ts"
 */
export {
  Uint16BE,
  Uint24BE,
  Uint32BE,
  Uint8BE,
  concat,
  ensureInteger,
  ensureUint,
  getUint16,
  getUint24,
  getUint32,
  getUint8,
  getUint8BE,
  integer,
  maxBytes,
  uint,
  uint8array
};
