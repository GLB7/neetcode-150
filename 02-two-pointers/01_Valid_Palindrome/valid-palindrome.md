This implementation first normalizes the string by using typescript's replace and lowercase function.  
Those functions have the following time complexities:  
| Method | Time complexity |
|--------|-----------------|
| `str.replace(regex, replacement)` | O(n) |
| `str.toLowerCase()` | O(n) |

This implementation then employs a double pointer method in which the first and last characters are compared until the pointers cross; if all pairs matched, we return true (it’s a palindrome). This part does about n/2 comparisons.

Overall this implementation has O(n) time. 