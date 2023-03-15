enum FooValueByIndex {
    Bar = "Bar",
    Baz = "Baz",
    Qux = "Qux"
}

const indexOfBar = Object.keys(FooValueByIndex).indexOf("Bar");
const value = Object.values(FooValueByIndex)[indexOfBar];

console.log(value); // Bar