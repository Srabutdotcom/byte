//@ts-self-types= "../type/unity.d.ts"
export function unity(...ar) {
   const r = new Uint8Array(ar.reduce((s, a) => s + (a?.length ?? 1), 0))
   let of = 0;
   for (const i of ar) {
      isUint8Array(i) ? (r.set(i, of), of += i.length)
         : isByte(i) && (r[of++] = i);
   }
   return r
}

function isByte(v) {
   return (
      Number.isInteger(v) &&
      v >= 0 &&
      v <= 255
   )
}

function isUint8Array(v) { return v instanceof Uint8Array; }

