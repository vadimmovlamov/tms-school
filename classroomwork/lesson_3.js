/*  */
console.log('__ example 1 __');
const someFunction = (argument) => {
    return argument();
}
const helloWorld = () => {
    return "Hello world";
}
const sayGoodbye = () => {
    return "Good bye"
}
console.log(someFunction(helloWorld));
console.log(someFunction(sayGoodbye));


/* */
console.log('__ example 2 __');
const numbers = [1, 2, 3, 4, 5];

const someFunc = (numberList) => {
    const result = [];

    for (const number of numberList) {
        result.push(number * 2); //возвращаем массив усноженный на 2
    };
    return result;
}

console.log(someFunc(numbers))



/* использование метода Map */
console.log('__ example 3 __');
// 1 вариант
const multiply = (numbers) => numbers.map((item, index) => {
    console.log('item', item);
    console.log('index', index);
    return item * 2;
})
console.log(multiply(numbers))
// 2 вариант
const multiply2 = (numbers) => numbers.map((item) => item * 2);
console.log(multiply2(numbers))



/* */
console.log('__ example 4 __');

const users = [{
        name: 'alex',
        age: 12,
    },
    {
        name: 'oleg',
        age: 25,
    }
]

const arrayWithoutAge = (users) => {
    return users.map((user) => {
        return {
            name: user.name
        }
    })
}
console.log(arrayWithoutAge(users));


const mapUsers = (users) => {
    return users.map((user, index) => {
        return 1;
    })
}
console.log(mapUsers(users))



/*  вывести четные числа */
console.log('__ example 5 __');

const numberes = [1, 2, 3, 4, 5, 6];
const filterEven = (numberesList) => {
    return numberesList.filter((numbere) =>{
        return (numbere % 2 === 0)
    })
}
console.log(filterEven(numberes)) 



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

console.log('2=> ' + sumArr(arrNumbers));


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