import { maxBytes } from "../src/set.js";
import { assertEquals } from "@std/assert";

assertEquals(1, maxBytes(255));
assertEquals(2, maxBytes(256));
assertEquals(2, maxBytes(2**(8*2)-1));