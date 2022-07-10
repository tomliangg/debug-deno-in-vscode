import { assertEquals } from "https://deno.land/std@0.147.0/testing/asserts.ts";
import { add, multiply } from "./arithmetic.ts"

Deno.test("Arithmetic operations", () => {
  assertEquals(add(1, 2), 3);
  assertEquals(multiply(3, 2), 6);
});