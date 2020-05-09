#!/usr/bin/env deno test --allow-all test.ts

import { assertEquals } from "https://deno.land/std@v1.0.0-rc1/testing/asserts";
import { add, addAsync } from "../src/add.ts";

const { test } = Deno;

test('example', function() {
  const result = add(1, 2);
  assertEquals(result, 3);
});

test('exampleAsync', async function() {
  const result = await addAsync(1, 2);
  assertEquals(result, 3);
});
rtEquals(result, 3);
});