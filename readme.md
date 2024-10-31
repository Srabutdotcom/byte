# @aicone/byte

`@aicone/byte` is a JavaScript library for handling byte manipulation with ease, designed for encoding, decoding, and converting integers to and from `Uint8Array` representations in big-endian format. It provides utility functions to support operations with 8, 16, 24, and 32-bit unsigned integers, making it ideal for low-level data handling in network protocols or binary data parsing.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
  - [Getting Values](#getting-values)
  - [Setting Values](#setting-values)
  - [Concatenation](#concatenation)
  - [Utility Functions](#utility-functions)
    - [ensureInteger](#ensureinteger)
    - [ensureUint](#ensureuint)
    - [uint8array](#uint8array)
  - [Classes](#classes)
    - [Integer](#integer)
    - [Uint](#uint)
- [API Reference](#api-reference)
- [Examples](#examples)
- [License](#license)


## Features

- **Big-Endian Byte Parsing and Encoding**: Read and write integers of various byte lengths in big-endian order.
- **Concatenation**: Merge multiple `Uint8Array` objects into a single `Uint8Array`.
- **Error Handling**: Built-in checks and error messages for invalid byte operations.
  
## Usage

### Getting Values

Extract unsigned integer values from `Uint8Array` in big-endian format:

- **`getUint8`**: Extracts 8-bit unsigned integer.
- **`getUint16`**: Extracts 16-bit unsigned integer.
- **`getUint24`**: Extracts 24-bit unsigned integer.
- **`getUint32`**: Extracts 32-bit unsigned integer.

```javascript
import { Byte, ensureInteger, ensureUint, Integer, Uint } from 'jsr:@aicone/byte';

// Sample Uint8Array
const data = new Uint8Array([0x12, 0x34, 0x56, 0x78]);

const value16 = Byte.get.BE.b16(data, 0); // Read 16-bit integer from byte offset 0
console.log(value16); // 4660
```

### Setting Values

Convert integers to `Uint8Array` in big-endian format:

- **`Byte.set.BE.b8`**: Converts an integer to an 8-bit `Uint8Array`.
- **`Byte.set.BE.b16`**: Converts an integer to a 16-bit `Uint8Array`.
- **`Byte.set.BE.b24`**: Converts an integer to a 24-bit `Uint8Array`.
- **`Byte.set.BE.b32`**: Converts an integer to a 32-bit `Uint8Array`.

```javascript
const byte16 = Byte.set.BE.b16(4660); // 16-bit Uint8Array in big-endian order
console.log(byte16); // Uint8Array [0x12, 0x34]
```

### Concatenation

Concatenate multiple `Uint8Array` objects:

```javascript
const array1 = new Uint8Array([0x01, 0x02]);
const array2 = new Uint8Array([0x03, 0x04]);
const concatenated = Byte.concat(array1, array2);

console.log(concatenated); // Uint8Array [0x01, 0x02, 0x03, 0x04]
```

## API Reference

### Static Properties

- **`Byte.get`**: Contains methods to read unsigned integers of 8, 16, 24, and 32 bits in big-endian order.
- **`Byte.set`**: Contains methods to convert integers to big-endian `Uint8Array`.

### Methods

- **`concat(...Uint8Array)`**: Merges multiple `Uint8Array` instances into one.

### Utility Functions

- **`maxBytes(int)`**: Determines the minimum number of bytes needed to store an integer.

## Examples

### Example 1: Getting 16-bit Unsigned Integer from Array

```javascript
const data = new Uint8Array([0x12, 0x34, 0x56, 0x78]);
const value = Byte.get.BE.b16(data, 0);
console.log(value); // 4660
```

### Example 2: Converting Integer to 16-bit Uint8Array

```javascript
const result = Byte.set.BE.b16(4660);
console.log(result); // Uint8Array [0x12, 0x34]
```

### Example 3: Concatenating Multiple Arrays

```javascript
const part1 = new Uint8Array([0x01, 0x02]);
const part2 = new Uint8Array([0x03, 0x04]);
const combined = Byte.concat(part1, part2);
console.log(combined); // Uint8Array [0x01, 0x02, 0x03, 0x04]
```

### Example 4: Determining the Minimum Byte Length for an Integer

```javascript
const bytesNeeded = Byte.maxBytes(256);
console.log(bytesNeeded); // 2, because 256 needs 2 bytes to represent
```

#### ensureInteger

Converts an input to an integer. If the input is a float, it truncates the decimal part. If the input is invalid, it throws a `TypeError`.

**Parameters**
- `int` - A `number` or `string` that represents a numeric value.

**Returns**
- `number` - The truncated integer value.

**Example**

```javascript
console.log(ensureInteger("42"));      // Output: 42
console.log(ensureInteger(42.9));      // Output: 42
console.log(ensureInteger("42.5"));    // Throws TypeError: Expected integer but got 42.5
```

#### ensureUint

Converts an input to a positive integer, throwing a `TypeError` if the input is not a positive integer.

**Parameters**
- `int` - A `number` or `string` that represents a positive numeric value.

**Returns**
- `number` - The positive integer value.

**Example**

```javascript
console.log(ensureUint("42"));      // Output: 42
console.log(ensureUint(-5));        // Throws TypeError: Expected positive integer but got -5
```

### Classes

#### Integer

The `Integer` class represents an encapsulated integer value and provides utility methods for working with integers.

**Static Methods**
- `Integer.of(value)` - Creates a new `Integer` instance from an integer-compatible value.
- `Integer.create(value)` and `Integer.from(value)` are also provided as aliases for `Integer.of`.

**Instance Properties**
- `value` - Returns the integer value of the instance.

**Example**

```javascript
const int = Integer.of("42");
console.log(int.valueOf());    // Output: 42
console.log(int.toString());   // Output: "42"
console.log(int.value);        // Output: 42
```

#### Uint

The `Uint` class represents an encapsulated unsigned integer value and provides similar utility methods to `Integer`.

**Static Methods**
- `Uint.of(value)` - Creates a new `Uint` instance from a positive integer-compatible value.
- `Uint.create(value)` and `Uint.from(value)` are also provided as aliases for `Uint.of`.

**Instance Properties**
- `value` - Returns the unsigned integer value of the instance.

**Example**

```javascript
const uint = Uint.of("42");
console.log(uint.valueOf());    // Output: 42
console.log(uint.toString());   // Output: "42"
console.log(uint.value);        // Output: 42

try {
    const invalidUint = Uint.of("-5"); // Throws TypeError
} catch (e) {
    console.error(e.message);  // Output: Expected positive integer but got -5
}
```

#### uint8array Utility

A utility function that converts various data types (e.g., `Uint8Array`, `string`, `number`, or array) into a `Uint8Array`. This can be useful for consistent data processing in JavaScript, especially when working with binary data and network protocols.

#### Examples

The function can handle a variety of data types as input.

##### Example 1: Converting a String

```javascript
const result = uint8array("Hello, World!");
console.log(result);  // Uint8Array with encoded values of "Hello, World!"
```

##### Example 2: Converting a Number

```javascript
const result = uint8array(123);
console.log(result);  // Uint8Array containing the byte representation of 123
```

##### Example 3: Converting a Uint8Array

```javascript
const initialArray = new Uint8Array([1, 2, 3, 4]);
const result = uint8array(initialArray);
console.log(result);  // Returns the same Uint8Array: [1, 2, 3, 4]
```

##### Example 4: Converting an Array of Mixed Types

```javascript
const result = uint8array([123, "Hello", new Uint8Array([1, 2, 3])]);
console.log(result);  
// Concatenated Uint8Array with byte representations of each element
```

##### Example 5: Converting an Object with `toString()`

```javascript
const customObject = { toString: () => "CustomObject" };
const result = uint8array(customObject);
console.log(result);  // Uint8Array encoding "CustomObject"
```

### Error Handling

If the input cannot be converted to a `Uint8Array`, a `TypeError` is thrown. Ensure the input matches one of the expected types: `Uint8Array`, `string`, `number`, or an array of these.

---

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License

This project is licensed under the MIT License.
