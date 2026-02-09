// LeetCode: https://leetcode.com/problems/valid-anagram/description/
import { runTest } from "../../test-utils.js";

// function isAnagram(s: string, t: string): boolean {
//   let s_letters: Map<string, number> = new Map();
//   let t_letters: Map<string, number> = new Map();

//   for (let char of s) {
//     if (s_letters.has(char)) {
//       s_letters.set(char, s_letters.get(char)! + 1);
//     } else {
//       s_letters.set(char, 1);
//     }
//   }
//   // console.log(s_letters);

//   for (let char of t) {
//     if (t_letters.has(char)) {
//       t_letters.set(char, t_letters.get(char)! + 1);
//     } else {
//       t_letters.set(char, 1);
//     }
//   }
//   // console.log(t_letters);

//   if (s_letters.size != t_letters.size) return false;

//   for (let [char, count] of s_letters) {
//     if (t_letters.get(char) == count) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function isAnagram(s: string, t: string): boolean {
    let letters: Map<string, number> = new Map();

    for (let letter of s) {
        letters.set(letter, (letters.get(letter) ?? 0) + 1);
    }

    for (let letter of t) {
        const count = (letters.get(letter) ?? 0) - 1;
        letters.set(letter, count);
        if (count < 0) return false;
        if (count === 0) letters.delete(letter);
    }

    if (letters.size === 0) return true;
    else return false;
}

runTest("Example 1", isAnagram("anagram", "nagaram"), true);
runTest("Example 2", isAnagram("rat", "car"), false);
 
// Submission: https://leetcode.com/problems/valid-anagram/submissions/1913047697