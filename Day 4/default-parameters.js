function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Abdullah");
greet();

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 3));