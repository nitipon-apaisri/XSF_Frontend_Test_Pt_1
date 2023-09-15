const input = [
    { name: "Alex", tel: "0991112222", code: "xsf0001" },
    { name: "Jane", tel: "0812221234", code: "xsf0002" },
    { name: "Alex", tel: "0832214433", code: "xsf0001" },
    { name: "Alex", tel: "0991113122", code: "xsf0003" },
];
const convert = (input) => {
    const output = [];
    const codeMap = {};
    input.forEach((item) => {
        if (!codeMap[item.code]) {
            codeMap[item.code] = { name: item.name, tel: [item.tel], code: item.code };
        } else {
            codeMap[item.code].tel.push(item.tel);
        }
    });
    console.log(codeMap);
    for (const key in codeMap) {
        output.push(codeMap[key]);
    }
    return output;
};

console.log(convert(input));
