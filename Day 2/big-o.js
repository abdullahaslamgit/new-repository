const arr = [1, 2, 3, 4, 5];

console.log(arr[2]); // O(1)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // O(n)
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(i, j); // O(n²)
  }
}