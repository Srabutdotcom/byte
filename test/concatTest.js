import { concat } from "../src/concat.js";
import { assertEquals } from "@std/assert";

Deno.test("concat test", () => {
   assertEquals(new Uint8Array([0, 2, 5, 6]), concat(new Uint8Array([0, 2]), new Uint8Array([5, 6])))
   assertEquals(new Uint8Array([0, 2, 5, 6]), concat(
      new Uint8Array([0]),
      new Uint8Array([2]),
      new Uint8Array([5, 6])
   ))
})