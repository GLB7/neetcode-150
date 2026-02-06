// https://leetcode.com/problems/valid-anagram/description/
import { runTest } from "../../test-utils.js";

function isAnagram(s: string, t: string): boolean {
    return false;
};

runTest("Example 1", isAnagram("anagram", "nagaram"), true);
runTest("Example 2", isAnagram("rat", "car"), false);