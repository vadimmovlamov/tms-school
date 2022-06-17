// const array = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// const expant = (function (array) {
//     var a = 1;
//     return array.reduce(function (accumulator, item) {
//         return accumulator.concat(item)
//     }, []);
// });
// console.log(expant(array));



const arrays = ['2', '2'];

const someFunction = (users) => {

    if (users.length >= 4) {
        return `${users[1]}, ${users[2]} and two others likes this`;
    }
    if (users.length == 3) {
        return `${users[1]} and ${users[2]} and ${users[3]} likes this`;
    }
    if (users.length == 2) {
        return `${users[1]} and ${users[2]} likes this`;
    }
    if (users.length == 1) {
        return `${users[1]} likes this`;
    }
    return 'no ones likes this 0';
}

const switchCaseFun = (users) => {
    switch (users.length) {
        case 4:
            return `${users[1]}, ${users[2]} and two others likes this`;
        case 3:
            return `${users[1]} and ${users[2]} and ${users[3]} likes this`;
        case 2:
            return `${users[0]} and ${users[1]} likes this`;
        case 1:
            return `${users[1]} likes this`;
        default:
            return 'no ones likes this 0';
    }
}

// console.log(someFunction(arrays));
// console.log(switchCaseFun(arrays));


const glovesColor = ['red', 'green', 'blue', 'red', 'black', 'blue', 'red', 'black'];

const sumGloves = (elem) => {
    return elem.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {})

    return () //применить метод mapfloor - попробовать
}

console.log(sumGloves(glovesColor));
