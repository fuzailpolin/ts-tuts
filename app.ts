const combineType = (
    n1: number | string,
    n2: number | string,
    resultconversion: "as-number" | "as-text"
) => {
    if (
        (typeof n1 === "number" &&
            typeof n2 === "number" &&
            resultconversion === "as-number") ||
        resultconversion === "as-number"
    ) {
        return +n1 + +n2;
    }
    return n1.toString() + n2.toString();
};

const combineAges = combineType(23, 12, "as-number");
console.log(combineAges);

const combineAges2 = combineType(23, 12, "as-text");
console.log(combineAges);

const combineStrings = combineType("3", "3", "as-number");
console.log(combineStrings);
