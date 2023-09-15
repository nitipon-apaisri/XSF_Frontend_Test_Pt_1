const input = {
    customer: "Xsurface",
    contact: [{ name: "Max" }, { name: "Mike" }, { name: "Adam" }],
    address: "Sukhumvit 62",
};

const convert = (input) => {
    const output = [];
    input.contact.forEach((item) => {
        output.push({ name: item.name, cuntomer: input.customer, address: input.address });
    });
    return output;
};

console.log(convert(input));
