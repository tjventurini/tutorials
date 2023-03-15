enum FooKeys {
    Bar = "Bar",
    Baz = "Baz",
    Qux = "Qux"
}

const keys = Object.keys(FooKeys);

console.log(keys); // [ 'Bar', 'Baz', 'Qux' ]