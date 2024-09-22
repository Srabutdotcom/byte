//@ts-self-types="../type/mod.d.ts"
export * from './concat.js';
export * from "./integer.js";
export * from './set.js';
export * from './get.js'
export * from './uint8array.js';
export * from "./byte.js"

//`esbuild ./mod.js --bundle --format=esm --target=esnext --outfile=../dist/bytes.js --legal-comments=inline`
//--external:npm:jose* --external:npm:@lapo/*
// npx -p typescript tsc ./src/mod.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist
