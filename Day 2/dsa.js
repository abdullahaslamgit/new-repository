// Two Sum
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }
}

// Contains Duplicate
function containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

// Valid Anagram
function isAnagram(s, t) {
  return (
    s.split("").sort().join("") ===
    t.split("").sort().join("")
  );
}