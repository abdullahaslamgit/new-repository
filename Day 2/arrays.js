const nums = [10, 20, 30];

nums.push(40);
nums.pop();

nums.unshift(5);
nums.shift();

console.log(nums);

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
console.log(fruits.indexOf("Banana"));

console.log(fruits.slice(0, 2));

const copy = [...fruits];
copy.splice(1, 1);

console.log(copy);