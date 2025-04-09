import { getUint8, getUint16, getUint24, getUint32 } from "../src/getuint.js";

const sample_0 = [255, 255, 255, 255];
const uint8 = getUint8([255]);
const uint16 = getUint16([255, 255]);
const uint24 = getUint24([255, 255, 255]);
const uint32 = getUint32(sample_0);

const _null = null;