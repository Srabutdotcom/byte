import { ensureInteger } from "../src/integer.js";
import { assertEquals } from "@std/assert";

Deno.test("ensureInteger test", () => {
   assertEquals(10, ensureInteger('10'), `is not equal to 10`);
   assertEquals(11, ensureInteger(11), `is not equal to 11`);
   assertEquals(-11, ensureInteger('-11'), `is not equal to -11`);
   assertEquals(11, ensureInteger("11.2"), `is not equal to 11`);
})