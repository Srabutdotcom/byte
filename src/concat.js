/** 
 * ! @preserve
 * Concate two or more Uint8Array to one Uint8Array
 * @param  {Uint8Array[]} uint8s [Uint8Array]
 * @returns {Uint8Array} Uint8Array
 */
export function concat(..._uint8s) {
   _uint8s = uint8s(_uint8s);
   const l = _uint8s.reduce((ac, ar) => ac + (ar?.length ?? 0) , 0);
   const r = new Uint8Array(l);
   let o = 0;
   for (const e of _uint8s) {
      r.set(e, o);
      o += e?.length;
   }
   return r;
}

function uint8s(_uint8s){
   return _uint8s.map(e=>{
      if(e instanceof Uint8Array)return e
      if(Array.isArray(e))return new Uint8Array(e);
      throw TypeError(`Elements must be Uint8Array or Array`)
   })
}
