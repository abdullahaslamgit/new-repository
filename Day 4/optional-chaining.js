const student = {
    name: "Abdullah",
    address: {
        city: "Lahore"
    },
    contact: {
        phone: "1234567890"
    }
};

console.log(student.address?.city);

console.log(student.contact?.phone);