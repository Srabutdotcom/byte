import { ensureUint } from "../src/integer.js";
import { assertEquals } from "@std/assert";

Deno.test("ensureUint test", () => {
   assertEquals(10, ensureUint('10'), `is not equal to 10`);
   assertEquals(11, ensureUint(11), `is not equal to 11`);
   assertEquals(11, ensureUint("11.2"), `is not equal to 11`);
})