function sum(...numbers) {
    console.log(numbers);

    const total = numbers.reduce((sum, num) => sum + num, 0);

    console.log("Total:", total);
}

sum(10, 20, 30);
sum(1, 2, 3, 4, 5);