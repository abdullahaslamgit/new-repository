/*
=========================================
DSA #8 — Top K Frequent Elements
=========================================

Problem:
Given an integer array nums and an integer k,
return the k most frequent elements.

You may return the answer in any order.

Example 1:
Input:
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]

Explanation:
1 appears 3 times
2 appears 2 times
3 appears 1 time

Top 2 frequent elements = [1,2]

Example 2:
Input:
nums = [1]
k = 1

Output:
[1]

Constraints:
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
k is always valid.
*/

function topKFrequent(nums, k) {
  // Step 1: Count frequency of each number
  const frequency = {};

  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Step 2: Create buckets
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  // Step 3: Place numbers into buckets based on frequency
  for (const num in frequency) {
    const freq = frequency[num];
    buckets[freq].push(Number(num));
  }

  // Step 4: Collect top k frequent elements
  const result = [];

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}

// =======================
// Test Cases
// =======================

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// Output: [1, 2]

console.log(topKFrequent([1], 1));
// Output: [1]

console.log(topKFrequent([4, 4, 4, 5, 5, 6], 2));
// Output: [4, 5]

console.log(topKFrequent([7, 7, 8, 8, 8, 9], 1));
// Output: [8]