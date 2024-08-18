import { Uint8BE, Uint16BE, Uint24BE, Uint32BE } from "../src/mod.js";
import { getUint8, getUint16, getUint24, getUint32 } from "../src/mod.js";
import { assertEquals } from "@std/assert";

Deno.test("uint8 and its variance test", () => {
   assertEquals(new Uint8Array([8]), Uint8BE(8));
   assertEquals(new Uint8Array([255, 255]), Uint8BE(2 ** (8 * 2) - 1));
   assertEquals(new Uint8Array([255, 255]), Uint16BE(2 ** (8 * 2) - 1));
   assertEquals(new Uint8Array([255, 255, 255]), Uint24BE(2 ** (8 * 3) - 1));
   assertEquals(new Uint8Array([255, 255, 255]), Uint8BE(2 ** (8 * 3) - 1), 3);
   assertEquals(new Uint8Array([255, 255, 255, 255]), Uint32BE(2 ** (8 * 4) - 1));
   assertEquals(new Uint8Array([255, 255, 255, 255]), Uint8BE(2 ** (8 * 4) - 1), 4);
})

Deno.test(
   "get uint",
   ()=>{
      let expected = new Uint8Array([8])
      let actual = getUint8(expected);
      assertEquals(actual, expected);

      expected = new Uint8Array([255, 255]);
      actual = getUint16(expected)
      assertEquals(actual, expected);

      expected = new Uint8Array([255, 255, 255]);
      actual = getUint24(expected)
      assertEquals(actual, expected);

      expected = new Uint8Array([255, 255, 255, 255]);
      actual = getUint32(expected)
      assertEquals(actual, expected);

   }
)

