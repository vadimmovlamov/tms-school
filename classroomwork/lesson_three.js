/*  */
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
// почему когда мы передаем someFunction ссылку на функцию helloWorld , argument() принимает ее и выводит в консоль?


/* */
const numbers = [1, 2, 3, 4, 5];
const someFunction = (numberList) => {
    const result = [];
    for (const number of numberList) {
        result.push(number * 2);
    };
    return result;
}
console.log(someFunction(numbers))
const multiply = (numbers) => numbers.map((item, index) => {
    console.log('item', item);
    console.log('index', index);
    return item * 2;
})
console.log(multiply(numbers))
const multiply2 = (numbers) => numbers.map((item) => item * 2);
console.log(multiply2(numbers))



/* */
const users = [{
        name: 'alex',
        age: 12,
    },
    {
        name: 'oleg',
        age: 25,
    }

]
const mapUsers = (users) => {
    return users.map((user, index) => {
        return 1;
    })
}
console.log(mapUsers(users))

/*  */
const numbers = [1, 2, 3, 4, 5, 6];
const filterEven = (numbersList) => {
    return numbersList.filter((number) =>{
        return (number % 2 === 0)
    })
}
console.log(filterEven(numbers)) 



/*  */
const numbers = [1, 2, 3, 4, 5, 6];
const someFunction = () => {
    const result = [];
    for (const number of numbers) {
        result.push(number ** 2);
    };
    return result;
}
console.log(someFunction())
const someFn = (numberList, degree) => {
    return numberList.map((number) => Math.pow(number, degree))
}
console.log(someFn(numbers, 2))

// const someFun = (numberList, degree) => numberList.map((number) => Math.pow(number, degree));
// console.log(someFun(numbers, 2))


/*  */
const numbers = [1, 2, 3, 'Hello', 'lol'];
const someFunc = (items) => {
    return numbers.map(item => ({
        value: item,
        type: typeof item
    }))
}
console.log(someFunc(numbers))

/*  */
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