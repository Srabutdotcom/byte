import { unity } from "../src/unity.js"

const array2 = unity(100, 200);
const array16 = crypto.getRandomValues(new Uint8Array(16))
const array32 = crypto.getRandomValues(new Uint8Array(32))
const array48 = crypto.getRandomValues(new Uint8Array(48))

const a = unity(array2, array16, array32, array48);
