I attempted this problem two times with slightly different approaches.  
In my first attempt I used two separate frequency maps for s & t. I went through each letter of both words to populate said maps which is O(n+m) where n and m are the letters in s & t. After this, I checked if the frequencies of the s map matched the t map, if they matched the words were anagrams but if not they are not.

In my second attempt I use a single frequency map. I still went through each letter of both words to populate the maps, however this time, string s added to the frequencies while t took away from it. This allows for the logic of an empty map since if both strings contained the same character frequencies the map should naturally be empty by the end. This implementation is still O(n+m) but it relies less on map function calls and has a better space complexity using only a single map. 

Overall, the time complexity for this solution is O(n+m).