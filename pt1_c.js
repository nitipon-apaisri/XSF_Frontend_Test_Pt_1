const input = [
    { name: "A", age: "30" },
    { name: "B", age: "9" },
    { name: "C", age: "20" },
    { name: "D", age: "18" },
    { name: "E", age: "11" },
    { name: "F", age: "60" },
    { name: "G", age: "27" },
    { name: "H", age: "90" },
    { name: "I", age: "21" },
    { name: "J", age: "12" },
];

const convert = (input) => {
    const output = [];
    const ascending = input.sort((a, b) => a.age - b.age);
    ascending.forEach((item) => {
        if (item.age % 3 === 0 && item.age <= 30) {
            output.push(item.name);
        }
    });

    return output;
};

console.log(convert(input));
