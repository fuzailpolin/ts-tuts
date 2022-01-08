const add = (n1: number, n2: number) : number => {
    return n1 + n2
}

const printResult = (num: number) => {
    console.log(`Result: ${num}`);
}

const addAndHandle = (n1: number, n2: number, cb: (num:number) => void) => {
    const result = n1 + n2
    cb(result)
}

printResult(add(1, 12));

let combineValues : (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(9, 9))

const callback = (result: number) => {
    console.log(result)
}

addAndHandle(10, 20, callback)
