import { vector } from "../src/vector.js";

const sample_0 = Uint8Array.of(0, 0, 9, 108, 111, 99, 97, 108, 104, 111, 115, 116)
const sample_1 = vector(sample_0, { max: 65535 });
const sample_2 = vector(sample_1, { max: 2 ** 32 - 1 })

const _null = null;