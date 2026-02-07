// LeetCode: https://leetcode.com/problems/valid-palindrome/description/
import { runTest } from "../../test-utils.js";

function isPalindrome(s: string): boolean {
    const s_trimed = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let j = s_trimed.length - 1

    for(let i = 0; i <= s_trimed.length - 1; i++){
        // console.log("Front:" + s_trimed[i]);
        // console.log("Back:" + s_trimed[j]);
        // console.log("\n");
        if(s_trimed[i] !== s_trimed[j]) return false;
        j--;
        if(i >= j) return true;
    }
    return true;
};

runTest("Example 1", isPalindrome("A man, a plan, a canal: Panama"), true);
runTest("Example 2", isPalindrome("race a car"), false);
runTest("Example 3", isPalindrome(" "), true);

// Submission: https://leetcode.com/problems/valid-palindrome/submissions/1910813225/