import { Uint32BE } from "../src/set.js";
import { ensureUint } from "../src/integer.js";

const M1 = 4294967295 - 1000
const M2 = 4294967 - 1000
const M = M2

Deno.bench ({
   name: "using Uint32",
   baseline: true,
   fn:()=>{
      const m = Uint32BE(M);
      console.log(m)
   }
}
   
)

Deno.bench({
   name: "using math",
   fn:()=>{
      const m = ensureUint(M)
      const f= [1,256,65536,16777216]
      let n
      const array = []
      for(let i = 3; i>=0;i--){
         const d = f[i]//256**i
         n = Math.trunc(m / d)
         array.push(n);
         //n %= f[i]//d
      }
      console.log(new Uint8Array(array))
   }
}
)