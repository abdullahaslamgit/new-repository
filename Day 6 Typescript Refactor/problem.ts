interface User {
  name: string;
  age: number;
}

function getUser(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}`;
}

const user: User = {
  name: "Abdullah",
  age: 22,
};

console.log(getUser(user));

function printUsers(users: User[]): void {
  users.forEach((user) => {
    console.log(user.name);
  });
}

const users: User[] = [
  { name: "Ali", age: 20 },
  { name: "Ahmed", age: 25 },
  { name: "Abdullah", age: 22 },
];

printUsers(users);

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));
console.log(identity<boolean>(true));

type Status = "success" | "error" | "loading";

function showStatus(status: Status): void {
  console.log(status);
}

showStatus("success");
showStatus("error");
showStatus("loading");