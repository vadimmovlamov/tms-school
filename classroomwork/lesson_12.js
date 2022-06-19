console.log('___ Task 1 ___ - Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:');

const arrays = ['2', '2'];

console.log('1 вариант');
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
console.log(someFunction(arrays));


console.log('');
console.log('2 вариант');

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
console.log(switchCaseFun(arrays));


console.log('');
console.log('___ Task 2 ___ - подсчет количества пар перчаток');

const glovesColor = ['red', 'green', 'blue', 'red', 'black', 'black', 'black', 'black', 'blue', 'red', 'black'];
const glovesColorRed = ['red', 'red', 'red', 'red', 'red', 'red'];

const sumGloves = (items) => {
    const pairGloves = items.reduce((result, element) => {
        if (result[element]) {
            result[element] += 1;
        } else {
            result[element] = 1;
        };
        return result;
    }, {})

    console.log(pairGloves);

    const values = Object.values(pairGloves);

    let res = 0;
    values.forEach((element) => {
        res += Math.floor(element / 2)
    });
    return res;
}

console.log(sumGloves(glovesColor));
console.log(sumGloves(glovesColorRed));