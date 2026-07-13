const student = {
  name: "Abdullah Aslam",
  age: 20,
  course: "Computer Science",
  address: {
    city: "Lahore",
    country: "Pakistan"
  },
  introduce() {
    console.log(`Hi, I am ${this.name}`);
  }
};

console.log(student);
student.introduce();

console.log('keys:', Object.keys(student));
console.log('values:', Object.values(student));
console.log('entries:', Object.entries(student));

const { name, course } = student;
console.log('destructured:', name, course);

const studentCopy = { ...student, university: 'University of Lahore' };
console.log('copy:', studentCopy);
