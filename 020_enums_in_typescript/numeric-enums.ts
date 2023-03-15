enum NumericEnum {
    Bar,
    Baz,
    Qux
}

const keys2 = Object.keys(NumericEnum).filter(v => isNaN(Number(v)));
const values2 = Object.values(NumericEnum).filter(v => !isNaN(Number(v)));

console.log(keys2)
console.log(values2)