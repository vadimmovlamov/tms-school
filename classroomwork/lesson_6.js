const arrays = [
    [1, 2, 3],
    [9],
    [4, 5, 6]
];

// расширенный вариант

console.log();
console.log('расширенный вариант method reduce');

const expant = (function (array) {
    return array.reduce(function (accumulator, item) {
        return accumulator.concat(item)
    }, []);
});
console.log(expant(arrays));


// сокращенный вариант

console.log();
console.log('сокращенный вариант method reduce');

const expant2 = (array) => array.reduce((acc, item) => acc.concat(item), [])
console.log(expant2(arrays));


// метод flat

console.log();
console.log('method flat');

const expant3 = (array) => array.flat();

console.log(expant3(arrays));


// метод flat map

console.log();
console.log('method for each');

const b = [
    [1, 2],
    [3, 4, 5]
].flatMap(item => item * 2);
console.log(b)


// метод for each

console.log();
console.log('method for each');

const testData = [
    [1, 2, 3],
    [4],
    [8, 7, 6]
]
const expandArray = (doubleArray) => {
    const result = [];
    testData.forEach((array) => {
        array.forEach((item) => {
            result.push(item)
        })
    });
    return result;
}
console.log(expandArray(testData));


/* 
контекст - контекст определяется ключевым словом this. 
его вычисления происходят на момент компиляции нашего кода
У нас есть 3 метода которые дают возможность указать контекст ЯВНО : call, aplly, bind
call, aplly - оони похожи тем, что они сразу вызывают метод, отличия call - значения передаются через запятую
apply - значения передаются через массив, bind - не вызывается сразу, а привязывает функция к некоторому объекту
и возвращается ссылку на функцию
 */
console.log('');
console.log('контекст - this');
const uses = {
    name: 'sas',
    sayName: function () {
        console.log(this.name);
    },

    sayNameArrow: () => { // не сработает
        console.log(this.name)
    },

    sayNameArrow2: function () { // сработает
        const say = () => console.log(this.name)

        say()
    }
}
uses.sayName();

uses.sayNameArrow(); // будет undefind, т.к. у контекста нет доступа к функции, т.е у стрелочных функций нету контекста


// контекст --> call, aplly, bind
console.log('');
console.log('call, aplly');

const user1 = {
    name: 'Oleg',
    age: 23
}

const user2 = {
    name: 'Vaer',
    age: 67
}

function logName(a, b) {
    console.log(`${this.name} - ${a} - ${b}`)
}

logName.call(user1, 1, 2);
logName.apply(user2, [1, 2]); // передает аргументы через массив в квадратных скобках

console.log('');
console.log('bind');

const myBind = logName.bind(user1, 1, 2);
myBind()


/* Ассинхронность в JS */

// promiss
console.log('');
console.log('promiss - resolve');

const myPromise = new Promise((resolve, reject) => { // resolve выполнится в том случае, если все хорошо, reject выполнится когда все пойдет плохо
    setTimeout(() => {
        resolve('Hello')
    }, 100);
})
myPromise.then(greeting => console.log(greeting)) // это объясняется так - Я обещаю выполниться myPromise. когда then() что то выполнит


console.log('');
console.log('promiss - reject');

const myPromiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('afafafafaf')
    }, 100);
})
myPromiseTwo.then(data => console.log(data)).catch(error => {
    console.log(error)
})


async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("хреново!"), 1000)
    });
    let result = await promise;
    console.log(result);
}
f();


console.log('');
console.log('промификация');

const promiseCreator = (number) => {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve('is Even')
        }
        reject('errooooooooooooooooooooor')
    })
}

promiseCreator(3).then(result => console.log(result)).catch(error => {
    console.log('Inside catch ', error)
})
/* в then мы смотреим положительный результат а в catch мы отлавливаем ошибку */




const asyncLogger = async () => {
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json());
    } catch (error) {
        console.log(error);
    }
}
asyncLogger()
// await - останавливает выполнение нашего кода до момента прояснения что у нас там происходит  (выполнилось нормально, или чтото с ошибкой)




// подсчет сколько элементов в массиве
const numbers = [1, 1, 2, 3];

const arrFun = numbers.reduce(function (acc, value) {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {});
console.log(arrFun)