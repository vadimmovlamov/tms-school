console.log(' ___ Task 1 ___');

const videos = [{
        id: 6532445,
        title: 'The Chambre'
    },
    {
        id: 675465,
        title: 'Fracture'
    },
    {
        id: 70111470,
        title: 'Die Hard'
    },
    {
        id: 654356453,
        title: 'Bad Boys'
    }
];
console.log('1 вариант - через for each');

const myVideos = (function (videos) {
    const result = {};

    videos.forEach(video => {
        result[video.id] = video.title; // ????? что тут происходит
    });

    return result;
})
console.log(myVideos(videos));


console.log('2 вариант - через reduce');

const reduceVideosMethod = (myVideos) => {
    return myVideos.reduce((result, video) => {
        result[video.id] = video.title;
        return result;
    }, {})
}
console.log(reduceVideosMethod(videos));


console.log('2 вариант - через reduce с деструктуризацией');

const reduceVideosMethodDestr = (myVideos) => {
    return myVideos.reduce((result, {
        id,
        title
    }) => { // {id, title} - прошла деструктуризация
        result[id] = title;
        return result;
    }, {})
}
console.log(reduceVideosMethodDestr(videos));



console.log('');
console.log(' ___ Task 2 ___ - вывести URL у кого самая большая площадь');

const boxarts = [{
        width: 200,
        height: 200,
        url: 'http:URL-1'
    },
    {
        width: 150,
        height: 200,
        url: 'http:URL-2'
    },
    {
        width: 300,
        height: 200,
        url: 'http:URL-3'
    },
    {
        width: 425,
        height: 150,
        url: 'http:URL-4'
    },
];

console.log('1 вариант - через map и reduce');

const getUrl = (boxart) => {
    const boxartsSquare = boxart.map(({
        url,
        width,
        height
    }) => ({
        url: url,
        square: width * height
    }));
    console.log(boxartsSquare);

    return boxartsSquare.reduce((result, everyElementBoxart) => {
        if (result.square > everyElementBoxart.square) {
            return result;
        }
        return everyElementBoxart;
    }, {}).url // .url - потому что нужно вернуть только элемент поля url

    // сокращенная запись
    // return boxartsSquare.reduce((result, everyElementBoxart) => result.square > everyElementBoxart.square ? result : everyElementBoxart).url;
};

console.log(getUrl(boxarts));

console.log('2 вариант - через reduce');

const getUrlReduce = (boxart) => {
    return boxart.reduce((result, item) => {
        const resultSqure = result.width * result.height;
        const nextBoxartSqure = item.width * item.height;
        // мы сравниваем две плащди текущую resultSqure и следующую nextBoxartSqure
        return resultSqure > nextBoxartSqure ? result : item;
    }).url;
}

console.log(getUrlReduce(boxarts));



console.log('');
console.log(' ___ Task 3 ___ - Функция должна вернуть число, которое встречается больше всего раз');

const arrayNumbers = [1, 2, 1, 1, 2, 5, 8, 9, 9, 2, 5, 8, 9, 9, 9, 9]

const maxRepeat = (number) => {
    const result = {};
    number.forEach(element => { // сначала через for each считаем сколько каждая цифра встречается раз
        if (result[element]) { // если element есть в массиве то тогда прибавляем 1
            result[element] = result[element] + 1
        } else {
            result[element] = 1;
        }
    });
    console.log(result);

    // переводим в массив что бы поискать через reduce значение которое повторяется

    const entries = Object.entries(result); // переводм в массив массивов

    const [key] = entries.reduce((acc, curentValueArrayEntries) => { // через аккумулятор мы проходимся по каждому элементу массива и смотрим если 9 больше то оно остается и так сравниватся с каждым
        // acc[1] - значение которое берет первый элемент и сравнивает его с каждым последующим curentValueArrayEntries
        // curentValueArrayEntries[1] - каждое следующее значение массива entries
        return acc[1] > curentValueArrayEntries[1] ? acc : curentValueArrayEntries;
    })

    return key; // [key] выводим ключ так как в двумерном массиве 
}
console.log(maxRepeat(arrayNumbers));



console.log('');
console.log(' ___ Task 4 ___ - Результатом выполнения функции должен быть объект, в котором были отсеяны поля со значениями null или undefined');

const arrayOne = {
    a: 1,
    b: 'Hello',
    c: null,
    z: undefined
}; // результат { a: 1, b: ‘Hello’ }
const arrayTwo = {
    name: 'alex',
    age: 10,
    friends: [],
    address: null
}; // результат { name: ‘alex’, age: 10, friends: [], }

const deleteFunction = (array) => {
    const result = {};

    for (const key in array) {
        if (array[key] !== null && typeof array[key] !== undefined) {
            result[key] = array[key];
        }
    }
    return result;
}
console.log('arrayOne', deleteFunction(arrayOne));
console.log('arrayTwo', deleteFunction(arrayTwo));



console.log('');
console.log(' ___ Task 5 ___ - Функция принимает массив чисел, а возвращает чсло которое встречается лишь 1 раз');

const arrayRepeatNumbers = [1, 2, 1, 1, 2, 5, 8, 9, 9, 2, 5, 8, 9, 9, 9, 9, 7];

const meetNumbers = (numbers) => {
    const meetNumbering = numbers.reduce((result, number) => { // считаем сколько каждого элемента массива встречается раз
        if (result[number]) {
            result[number] += 1;
        } else {
            result[number] = 1;
        };
        return result;
    }, {});

    // console.log(meetNumbering);

    for (const key in meetNumbering) {
        if (meetNumbering[key] === 1) {
            return key;
        }
    }
}
console.log(meetNumbers(arrayRepeatNumbers));



console.log('');
console.log(' ___ Task 6 ___ ');
/*Написать функция, которая принимает строку, 
и допустимое количество символов. Если длина строки превышает 
допустимое количество символов, функция должна обрезать строку 
а в конец добавить многоточие */

const textAndLength = (text, maxLengthNumbers) => {
    if (text.lenght > maxLengthNumbers) {
        return text.length - maxLengthNumbers
    }
    return `${text.slice(0, maxLengthNumbers)}...`
}
console.log(textAndLength('hello', 3));



console.log('');
console.log(' ___ Task 7 ___ Написать функцию задержки. Функция принимает задержку в миллисекундах');

const delay = (ms) => { // функция должна возвращать промис а внутри промиса мы выполняем сетайм аут который выполнится
    return new Promise((resolve) => { // reject не нужен т.к. мы всегда будем получать resolve
        setTimeout(resolve, ms)
    })
}
const asyncFun = async () => {
    await delay(1000);
    console.log('1212');
}
asyncFun()