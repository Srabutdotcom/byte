# @aicone/byte

# Byte

A lightweight utility class that extends `Uint8Array` to simplify encoding and decoding between various formats including hexadecimal, base64, base64url, and UTF-8 strings.

## Features

- Create a byte array from hex, base64, base64url, or string input.
- Convert a byte array back to string formats.
- Validate input before conversion.
- All instances are `Uint8Array` subclasses.

## Usage

```js
import { Byte } from "./Byte.js";

// Create from raw array
const bytes = Byte.create([72, 101, 108, 108, 111]); // "Hello"

// Create from Hex
const fromHex = Byte.fromHex("48656c6c6f");

// Create from Base64
const fromBase64 = Byte.fromBase64("SGVsbG8=");

// Create from Base64URL
const fromBase64Url = Byte.fromBase64Url("SGVsbG8");

// Create from String
const fromString = Byte.fromString("Hello");

// Conversions
console.log(bytes.toHex());          // "48656c6c6f"
console.log(bytes.toBase64());      // "SGVsbG8="
console.log(bytes.toBase64Url());   // "SGVsbG8"
console.log(bytes.toUtf8String());  // "Hello"
```

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License

This project is licensed under the MIT License.