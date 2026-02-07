// ../../test-utils.ts
function runTest(name, actual, expected) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr === expectedStr) {
    console.log(`${name}: PASSED
`);
  } else {
    console.error(`${name}: FAILED`);
    console.error(`	Expected: ${expectedStr}`);
    console.error(`	Received: ${actualStr}
`);
  }
}

// contains-duplicate.ts
function containsDuplicate(nums) {
  const check = /* @__PURE__ */ new Set();
  for (const num of nums) {
    console.log(check);
    if (check.has(num)) return true;
    check.add(num);
  }
  return false;
}
runTest("Example 1", containsDuplicate([1, 2, 3, 1]), true);
runTest("Example 2", containsDuplicate([1, 2, 3, 4]), false);
runTest("Example 3", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
