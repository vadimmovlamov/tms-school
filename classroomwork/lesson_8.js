/* Task 1 - создать функцию которая принимает строку с пробелами, 
и переделывает ее под хэштег*/
console.log('Task 1');
string = 'aaAAAaaa bbbBBBbbb cccCCCccc';
// создаем функцию которая переводит массив слов Aaaaaaaa Bbbbbbbbb Ccccccccc
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize(string));

const hashtagCreator = (string) => {
    // должны разделить принимающую сроку на массив строк по разделителю
    const splitterString = string.split(' ');
    console.log(splitterString);
    // прокаптализировать все слова. Перебираем все элементы массива через .map() и присваиваем map уже созданную функцию capitalize
    const capitalizeWords = splitterString.map(capitalize);
    console.log('method MAP ' + capitalizeWords);
    // объединяем все элементы массива в одно строковое значение по разделителю ''
    return `#${capitalizeWords.join('')}`

    /* 
    // решение задачи через reduce
    return splitterString.reduce((result, word) => {
        const capitalized = capitalize(word);
        return result + capitalized;
    }, '#') 
     */
}
console.log(hashtagCreator(string));
console.log('');


/* Task 2 - имеется функция которая принимает масив чисел const numbers = [1, 2, 3, 0, 2, 0, 4]; Задача все цифры которые не Нуль сместить влево*/
console.log('Task 2');
const numbers = [1, 0, 2, 3, 0, 2, 0, 4, 0];

const secondFun = (number) => {
    // создаем 2 пустых массива что бы запушить туда числа 1234 и во второй массив 0
    const arrayZero = [];
    const arrayNumbers = [];
    // перебрать массив если числа равны 0 то добавить в один массив, в ином случае в другой массив
    for (const number of numbers) {
        if (number === 0) {
            arrayZero.push(number)
        } else {
            arrayNumbers.push(number)
        }
    }
    console.log('array with 0: ' + arrayZero);
    console.log('array with numbers: ' + arrayNumbers);
    // вернуть массив  объединив arrayZero и arrayNumbers
    return [...arrayNumbers, ...arrayZero]
}

console.log(secondFun(numbers));
console.log('');


/* Task 2 - решение задачи 2 без методов массива*/
console.log('Task 2 - without methods arrays');
const thirdFun = (number) => {
    // создаем 2 пустых массива что бы запушить туда числа 1234 и во второй массив 0
    const arrayZero = [];
    const arrayNumbers = [];
    for (const number of numbers) {
        if (number === 0) {
            arrayZero[arrayZero.length] = number;
        } else {
            arrayNumbers[arrayNumbers.length] = number;
        }
    }
    return [...arrayNumbers, ...arrayZero]
}

console.log(thirdFun(numbers));
console.log('');


console.log('Task 3 - method reduce');
/* Задача 3 - просуммировать элементы массива - метод reduce*/
const dummy = [1, 2, 3, 4];

const reduceFunc = (num) => {
    return dummy.reduce((acc, num) => {
        return acc + num
    }, 0)
}

console.log(reduceFunc(dummy));
console.log('');


console.log('Task 3 - method for of');

const suma = () => {
    let summer = 0;
    for (const numb of dummy) {
        summer += numb;
    }
    return summer;
}
console.log(suma(dummy));
console.log('');


console.log('Task 4 - pokemons');
/* получить массив покемонов по запросу fetch */

const getPokemons = async (pokeName) => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    try {
        const response = await fetch(baseUrl); //возвращается запрос запакованный, поэтому его нужно перевести в объект через JSON
        // в переменную data мы записываем результат нашего запроса, где fetch выдает нам результат запроса нераспакованнм. поэтому мы распаковываем через применение JSON
        const data = await response.json(); // await говорит что я подожду пока запрос fetch выполнится, а затем я распакую 
        // т.к. нам нужен массив объектов results из ответа нашего запроса на сервер(см. html файл)
        console.log(data);
        return data;

        // const totalStats = (numStats) =>{
        //     return numStats.reduce((acc, numStat) => {
        //         return acc + numStat.value
        //     }, 0)
        // }
        // return acc;

    } catch (error) {

    }
}
console.log(getPokemons('ditto'));
console.log('');


console.log('Task 5 - ');

const dataData = [{
        id: 1,
        value: 2
    },
    {
        id: 1,
        value: 42
    },
    {
        id: 1,
        value: 32
    },
    {
        id: 1,
        value: 222
    },
    {
        id: 1,
        value: 12
    }
]

// функция считает сумму элементов value 
const sum = (items) => {
    return items.reduce((acc, cur) => acc + cur.value, 0)
}
console.log(sum(dataData));

// добавляем поле в объект и добавляем посчитанную сумму 
const addField = (field) => {
    const totalSum = sum(field);

    return field.map((element) => {
        return {
            value: element.value,
            total: totalSum,
        };
    });
};
console.log(addField(dataData));
