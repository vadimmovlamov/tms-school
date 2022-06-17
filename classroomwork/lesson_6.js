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
console.log('call, aplly, bind');

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