/** ! @preserve
 * Concate two or more Uint8Array to one Uint8Array
 * @param  {...Uint8Array} bs [Uint8Array]
 * @returns {Uint8Array} Uint8Array
 */
export function concat(...bs) {
   const l = bs.reduce((ac, ar) => ac + (ar?.length ?? 0) , 0);
   const r = new Uint8Array(l);
   let o = 0;
   for (const e of bs) {
      r.set(e, o);
      o += e?.length;
   }
   return r;
}
