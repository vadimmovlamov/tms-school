console.log('Убрать все пробелы');

const stringValue = '   Hello     '
const trimFunction = (element) => element.trim()
console.log(trimFunction(stringValue));


// задача если массив users имеет индексы четные то один цвет наоборот то другой цвет
console.log('');
console.log('colorizer');

const users = [{
        name: 'alex',
        age: 12,
    },
    {
        name: 'oleg',
        age: 25,
    }
]

const colorizer = (userList) => {
    return userList.map((userL, indexL) => {
        return {
            ...userL,
            color: indexL % 2 === 0 ? 'red' : 'bluse'
        }
    })
}

console.log(colorizer(users));


/*  */
const mapUsers = (users) => {
    return users.map((user, index) => {
        return 1;
    })
}
console.log(mapUsers(users))


/*  */
console.log('');
console.log('');
console.log('метод filter');

/*задача  вывести четные числа */
const numberes = [1, 2, 3, 4, 5, 6];
const filterEven = (numberesList) => {
    return numberesList.filter((numer) => {
        return (numer % 2 === 0)
    })
}
console.log(filterEven(numberes))


/*  */

console.log('');
console.log('');
console.log('мутабельность массивов');

const arrNumbers = [1, 2, 3, 4, 5, 6];
// метод for of
const sum = (numberList) => {
    let result = 0;
    for (const iterator of numberList) {
        result += iterator;
    };
    return result;
};
console.log(sum(arrNumbers));


const smthFunction = () => {
    const result = [];
    for (const number of arrNumbers) {
        result.push(number ** 2);
    };
    return result;
}
console.log(smthFunction())

// метод for
const sumArr = (numberList) => {
    let resulter = 0;
    for (let i = 0; i < numberList.length; i++) {
        resulter += numberList[i];
    }
    return resulter;
};

console.log('2 => ' + sumArr(arrNumbers));


// метод while
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


console.log('');
console.log('');
console.log('__polindrom__');

const isPalindrom = (word) => {
    const arrayFromChars = word.split('');
    const reversed = arrayFromChars.reverse();
    const joined = reversed.join('');

    console.log('Method split = ' + arrayFromChars);
    console.log('Method reverse = ' + reversed);
    console.log('Method join = ' + joined);

    return word.toLowerCase() === joined.toLowerCase();
}
console.log(isPalindrom('pap'));


console.log('');
console.log('');
console.log('__polindrom__');

const someFn = (numberList, degree) => {
    return numberList.map((number) => Math.pow(number, degree))
}
console.log(someFn(numbers, 2))

// const someFun = (numberList, degree) => numberList.map((number) => Math.pow(number, degree));
// console.log(someFun(numbers, 2))


console.log('');
console.log('');
console.log('__polindrom__');

const arrNumAndStr = [1, 2, 3, 'Hello', 'lol'];
const smthFunc = (items) => {
    return arrNumAndStr.map(item => ({
        value: item,
        type: typeof item
    }))
}
console.log(smthFunc(numbers))


console.log('');
console.log('');
console.log('__polindrom__');

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