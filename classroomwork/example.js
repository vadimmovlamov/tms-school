const array = [
    [1, 2, 3],
    [4, 5, 6]
];

const expant = (function (array) {
    return array.reduce(function (accumulator, item) {
        return accumulator.concat(item)
    }, []);
});
console.log(expant(array));