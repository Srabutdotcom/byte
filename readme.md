# @aicone/byte

# Byte Class

## Overview
The `Byte` class extends `Uint8Array` and provides additional functionality for handling binary data. It includes methods to create a `Byte` instance from different encodings (hex, base64, base64url), as well as operations to append, prepend, and insert data.

## Features
- Supports initialization from hex, base64, and base64url strings.
- Provides utility methods to manipulate byte arrays.
- Extends `Uint8Array` while adding dynamic resizing capabilities.

## Installation
To use the `Byte` class, import it into your project:

```javascript
import { Byte } from '@aicone/byte';
```

## Usage

### Creating a `Byte` instance
```javascript
const byte1 = new Byte("48656c6c6f"); // Hex string ("Hello")
const byte2 = new Byte("SGVsbG8=");   // Base64 string ("Hello")
const byte3 = new Byte("Hello");      // UTF-8 encoded string
```

### Appending Data
```javascript
const byteArray = new Byte("Hello");
byteArray.append("20576f726c64"); // Append hex string (" World")
console.log(new TextDecoder().decode(byteArray)); // Output: "Hello World"
```

### Prepending Data
```javascript
const byteArray = new Byte("World");
byteArray.prepend("Hello ");
console.log(new TextDecoder().decode(byteArray)); // Output: "Hello World"
```

### Inserting Data
```javascript
const byteArray = new Byte("Helo");
byteArray.insert("l", 2); // Insert 'l' at index 2
console.log(new TextDecoder().decode(byteArray)); // Output: "Hello"
```

### Convert to various string 
```javascript
const byteArray = new Byte("Helo");
byteArray.toBase64(); // Convert to Base64
byteArray.toBase64Url(); // Convert to Base64Url
byteArray.toHex(); // Convert to Hex
```

## API Reference

### `static sanitize(args: any[]): any[]`
Sanitizes input arguments by converting strings into `Uint8Array`.

### `static create(value: string | Uint8Array | ArrayBuffer): Byte`
Creates a new `Byte` instance from the given input.

### `constructor(value: string | Uint8Array | ArrayBuffer)`
Creates a new `Byte` instance.

### `append(data: string | Uint8Array | ArrayBuffer): void`
Appends data to the current `Byte` instance.

### `prepend(data: string | Uint8Array | ArrayBuffer): void`
Prepends data to the current `Byte` instance.

### `insert(data: string | Uint8Array | ArrayBuffer, index: number): void`
Inserts data at the specified index.

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License

This project is licensed under the MIT License.
