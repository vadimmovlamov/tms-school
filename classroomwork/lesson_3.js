const user = {
    name: 'alex',
    age: 25,
    isAproved: false,
}
console.log(user.age); // вызов значения по ключу

user.name = 'jopa' // замена значения свойства объекта по ключу Alex на jopa
console.log(user.name);

user.adress = 'burdeynogo'; //добавляем новое свойство объекта 
console.log(user);


const user2 = user; // копируем ссылку в user2 на объект user
user2.friends = ['a', 'b']
console.log(user);
console.log(user2);


// создание независимовй копии, что при копировании не изменялся базовый объект
const user3 = {...user};
user3.friends = ['c', 'c']
console.log(user);
console.log(user3);

/*  */
console.log('');
console.log('');
console.log('вызов callback');

const someFunction = (arg) => {
    return arg();
}

const sayHello = () => {
    return 'Hello';
}
const sayBuy = () => {
    return 'Buy';
}

console.log(someFunction(sayHello)); // sayHello -> это ссылка на функцию, а sayHello() -> вызов функции
console.log(someFunction(sayBuy));

/*  */
console.log('');
console.log('');
console.log('метод for of');

const numbers = [1, 2, 3, 4, 5];

const funcPow = (numbers) => {
    const result = [];

for (const number of numbers) {
    result.push(number * 2) //возвращаем массив усноженный на 2
}
    return result;
}
console.log(funcPow(numbers));

/*  */
console.log('');
console.log('');
console.log('метод map - 1 вариант');

const methodMap = (numbers) => {
    return numbers.map((num) => num * 2)
}
console.log(methodMap(numbers));

/*  */
console.log('метод map - 2 вариант');
const methodMapTwo = (numbers) => numbers.map((item, index) =>{
    console.log('item', item);
    console.log('index', index);

    return {
        value: item,
        index: index
    }
    return item * 2;
})
console.log(methodMapTwo(numbers));

/*  */
// изменяем объект useras и возвращаем без age
const users = [
{
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
    return numberesList.filter((numer) =>{
        return (numer % 2 === 0)
    })
}
console.log(filterEven(numberes)) 


/*  */



console.log('');
console.log('');
console.log('метод reduce');