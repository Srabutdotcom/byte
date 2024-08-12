## byte

**byte** is a collection of javaScript library to manipulate bytes such us concat Uint8Array, get a value from Uint8Array, and set a value to Uint8Array. All data used in Uint8Array is BigEndian format.

### Usage

```javascript
import { concat, getUint16, Uint16BE } from 'byte.js';

const maxVal16 = Uint16BE(2**(8*2)-1)// -> new Uint8Array([255,255])
const val16 = getUint16(maxVal16) // -> 2**(8*2)-1 
const concatenated = concat(new Uint8Array([0,2]),new Uint8Array([5,6])) // -> new Uint8Array([0,2,5,6])

```

### Contributing

Contributions to improve the library are welcome. Please open an issue or pull request on the GitHub repository.

### Donation
- https://paypal.me/aiconeid 

### License
MIT
