This implementation uses typescript's Set structure which is implemented using a hash set. The running times for this are the following:
| Operation | Average | Worst | Notes |
|-----------|--------|--------|--------|
| `.add(value)` | O(1) | O(n) | Insert one element. |
| `.has(value)` | O(1) | O(n) | Check membership. |
| `.delete(value)` | O(1) | O(n) | Remove one element. |
| `.size` | O(1) | O(1) | Number of elements. |

Most work is done when there are no duplicates: all nums are iterated over to then return false. 

This means the running average case time for this is O(n).