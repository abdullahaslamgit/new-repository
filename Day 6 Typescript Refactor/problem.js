"use strict";
function getUser(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}
const user = {
    name: "Abdullah",
    age: 22,
};
console.log(getUser(user));
function printUsers(users) {
    users.forEach((user) => {
        console.log(user.name);
    });
}
const users = [
    { name: "Ali", age: 20 },
    { name: "Ahmed", age: 25 },
    { name: "Abdullah", age: 22 },
];
printUsers(users);
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("Hello"));
console.log(identity(true));
function showStatus(status) {
    console.log(status);
}
showStatus("success");
showStatus("error");
showStatus("loading");
