import { add, multiply } from "./arithmetic.ts";

const num1 = add(2, 2);
const num2 = multiply(num1, 3);
console.log(num2);
Deno.exit();
