const str = " Hello World ";

console.log(str.length);
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim().toUpperCase());

console.log(str.includes("World"));
console.log(str.startsWith(" Hello"));
console.log(str.endsWith(" "));

const words = str.trim().split(" ");

console.log(words);

console.log(words.join("-"));

console.log(str.replace("World", "JavaScript"));