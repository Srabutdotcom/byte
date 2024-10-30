# @aicone/byte

`@aicone/byte` is a JavaScript library for handling byte manipulation with ease, designed for encoding, decoding, and converting integers to and from `Uint8Array` representations in big-endian format. It provides utility functions to support operations with 8, 16, 24, and 32-bit unsigned integers, making it ideal for low-level data handling in network protocols or binary data parsing.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [Getting Values](#getting-values)
  - [Setting Values](#setting-values)
  - [Concatenation](#concatenation)
- [API Reference](#api-reference)
- [Examples](#examples)
- [License](#license)

## Installation

To add `@aicone/byte` to your Deno project, use the following command:

```bash
deno add jsr:@aicone/byte
```

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
import { Byte } from 'jsr:@aicone/byte';

// Sample Uint8Array
const data = new Uint8Array([0x12, 0x34, 0x56, 0x78]);

const value16 = Byte.get.BE.b16(data, 0); // Read 16-bit integer from byte offset 0
console.log(value16); // 4660
```

### Setting Values

Convert integers to `Uint8Array` in big-endian format:

- **`Uint8BE`**: Converts an integer to an 8-bit `Uint8Array`.
- **`Uint16BE`**: Converts an integer to a 16-bit `Uint8Array`.
- **`Uint24BE`**: Converts an integer to a 24-bit `Uint8Array`.
- **`Uint32BE`**: Converts an integer to a 32-bit `Uint8Array`.

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

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License

This project is licensed under the MIT License.
