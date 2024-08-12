export { concat } from './concat.js';
export { ensureInteger, ensureUint } from "./integer.js";
export { Uint8BE, Uint16BE, Uint24BE, Uint32BE, maxBytes } from './set.js';
export { getUint8BE, getUint8, getUint16, getUint24, getUint32 } from './get.js'

//`esbuild ./mod.js --bundle --format=esm --target=esnext --outfile=../dist/bytes.js --legal-comments=inline`
//--external:npm:jose* --external:npm:@lapo/*