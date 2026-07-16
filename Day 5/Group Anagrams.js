/*
LeetCode 49 - Group Anagrams

Problem:
Given an array of strings, group the anagrams together.

Time Complexity: O(n * k log k)
n = number of strings
k = average length of each string

Space Complexity: O(n * k)
*/

function groupAnagrams(strs) {
    const map = new Map();

    for (const word of strs) {
        const key = word.split("").sort().join("");

        if (map.has(key)) {
            map.get(key).push(word);
        } else {
            map.set(key, [word]);
        }
    }

    return [...map.values()];
}

// Example
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]