/*
LeetCode 238 - Product of Array Except Self

Problem:
Given an integer array nums, return an array answer such that
answer[i] is equal to the product of all the elements of nums except nums[i].

Time Complexity: O(n)
Space Complexity: O(1) extra space (excluding output array)
*/

function productExceptSelf(nums) {
    const result = new Array(nums.length).fill(1);

    let leftProduct = 1;

    // Calculate left products
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;

    // Multiply with right products
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

// Example
const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

// Output:
// [24, 12, 8, 6]