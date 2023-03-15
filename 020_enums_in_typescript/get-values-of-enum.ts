enum FooValues {
    Bar = "Bar",
    Baz = "Baz",
    Qux = "Qux"
}

const values = Object.values(FooValues);

console.log(values); // [ 'Bar', 'Baz', 'Qux' ]