const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log("Copied Array:", arr2);

const arr3 = [4, 5, 6];

const merged = [...arr1, ...arr3];

console.log("Merged Array:", merged);

const student = {
    name: "Abdullah",
    age: 20
};

const updatedStudent = {
    ...student,
    city: "Lahore"
};

console.log(updatedStudent);