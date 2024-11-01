import { Uint16, Uint24, Uint32, Uint8 } from "../src/uint.js";
import { assertEquals } from "@std/assert";

Deno.test({
   name: "Uint8",
   fn: () => {
      const t = Uint8.fromValue(300.50);
      const u = Uint8.from(t);
      const v = u.value()
      assertEquals(v, 44)
   }
})

Deno.test({
   name: "Uint16",
   fn: () => {
      const t = Uint16.fromValue(0x0301);
      const u = Uint16.from(t);
      const v = u.value()
      assertEquals(v, 769)
   }
})

Deno.test({
   name: "Uint24",
   fn: () => {
      const t = Uint24.fromValue(65530);
      const u = Uint24.from(t);
      const v = u.value()
      assertEquals(v, 65530)
   }
})

Deno.test({
   name: "Uint32",
   fn: () => {
      const t = Uint32.fromValue(167757200);
      const u = Uint32.from(t);
      const v = u.value()
      assertEquals(v, 167757200)
   }
})
