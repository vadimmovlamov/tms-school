

/*  */
console.log('__ example 6 __');

const arrNumbers = [1, 2, 3, 4, 5, 6];
const smthFunction = () => {
    const result = [];
    for (const number of arrNumbers) {
        result.push(number ** 2);
    };
    return result;
}
console.log(smthFunction())

const sum = (numberList) => {
    let result = 0;
    for (const iterator of numberList) {
        result += iterator;
    };
    return result;
};

console.log(sum(arrNumbers));

const sumArr = (numberList) => {
    let resulter = 0;
    for (let i = 0; i < numberList.length; i++) {
        resulter += numberList[i];
    }
    return resulter;
};

console.log('2 => ' + sumArr(arrNumbers));


const sumArray = (numberList) => {
    let resulter = 0;
    let i = 0;
    while (i < numberList.length) {
        resulter += numberList[i];
        i++;
    }
    return resulter;
};

console.log('3=> ' + sumArray(arrNumbers));


/*  */
console.log('__ example 7 - polindrom__');

const polindrom = (word) => {
    const someWord = word.split('');
    const reversed = someWord.reverse();
    const joined = reversed.join('');

    return word.toLowerCase() === joined.toLowerCase();
}
console.log(polindrom('pop'));


/*  */
console.log('__ example 8 __');

const someFn = (numberList, degree) => {
    return numberList.map((number) => Math.pow(number, degree))
}
console.log(someFn(numbers, 2))

// const someFun = (numberList, degree) => numberList.map((number) => Math.pow(number, degree));
// console.log(someFun(numbers, 2))


/*  */
console.log('__ example 9 __');

const arrNumAndStr = [1, 2, 3, 'Hello', 'lol'];
const smthFunc = (items) => {
    return arrNumAndStr.map(item => ({
        value: item,
        type: typeof item
    }))
}
console.log(smthFunc(numbers))


/*  */
console.log('__ example 10 __');

const user = {
    name: 'dsfsfsdf',
    age: 12,
    smth: [1, 2, 3, 'Hello', 'lol'],
    a: 1,
    b: 'asdasd'
}
const {
    age,
    a,
    ...other
} = user;

console.log(other);