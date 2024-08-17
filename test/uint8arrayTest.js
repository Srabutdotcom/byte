import { uint8array } from "../src/uint8array.js";
import { assertEquals } from "@std/assert";

Deno.test(
   "convert Uint8Array",
   ()=>{
      const expected = new Uint8Array([1,5,8,9])
      const actual = uint8array(expected);
      assertEquals(actual, expected)
   }
)

Deno.test(
   "convert string",
   ()=>{
      const enc = new TextEncoder
      const expected = enc.encode('test')
      const actual = uint8array('test');
      assertEquals(actual, expected)
   }
)

Deno.test(
   "convert array",
   ()=>{
      const enc = new TextEncoder
      const expected = new Uint8Array([3,5,8,9])
      const actual = uint8array([3,5,8,9]);
      assertEquals(actual, expected)
   }
)