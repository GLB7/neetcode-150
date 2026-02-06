/**
 * Universal Test Helper for LeetCode problems.
 * Compares primitive values and complex objects/arrays by value.
 * @param name - The name of the test case (e.g. "Example 1")
 * @param actual - The result from your function
 * @param expected - The expected result
 */
export function runTest(name: string, actual: any, expected: any) {
    // Convert to strings for value-based comparison (handles Arrays/Objects)
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);

    // 2. Compare
    if (actualStr === expectedStr) {
        console.log(`${name}: PASSED\n`);
    } else {
        console.error(`${name}: FAILED`);
        console.error(`\tExpected: ${expectedStr}`);
        console.error(`\tReceived: ${actualStr}\n`);
    }
}