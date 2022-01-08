const add = (
    n1: number,
    n2: number,
    printIt: boolean,
    resultString: string
) => {
    let result = n1 + n2;
    if (printIt) {
        console.log(`${resultString}: ${result}`);
    } else {
        return n1 + n2;
    }
};

const number1 = "5";
const number2 = 3;
const printThis = true;

add(+number1, +number2, printThis, "The result is");
const result = add(number2, 4, false, "");
console.log(result, typeof result);
