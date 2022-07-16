const arrayOfArrays = [
    [1, 2, 3, 4],
    [2, 2, 2, 5],
    [1]
];

const bigSum = (arrays) => {
    return arrays.reduce((result, subArr) => { // reduce мы проходимся по кажому элементу основного массива, то есть по 3-м элементам
        const sumArr = subArr.reduce((sum, number) => sum + number, 0) // считаем сумму каждого элемента (кажого массива)
        return sumArr > result ? sumArr : result;
    }, 0)
}

console.log(bigSum(arrayOfArrays));
console.log('');

console.log('вычисление факториала');
const funFac = (number) => {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(funFac(4));
console.log(funFac(0));
console.log('');


console.log('вычисление числа фибоначи');

const funFibonacci = (num) => (num <= 1) ? num : (funFibonacci(num - 1) + funFibonacci(num - 2))

console.log(funFibonacci(6));
console.log('');

/* https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript */
/* 
 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
 */
const getPairs = (str) => {

    const result = []

    for (let i = 0; i < str.length; i += 2) {
        if (str[i + 1]) {
            result.push(`${str[i]}${str[i+1]}`)
        } else {
            result.push(`${str[i]}_`)
        }
    }
    return result;
}
console.log(getPairs('abcdlej'));
console.log('');


// способ Адриана

const initialData = 'abcdlej';

const solution = (string) => {
    const result = []

    for (let i = 0; i < string.length; i += 2) {
        const currentLetter = string[i]
        const nextLetter = string[i + 1] || '_'

        // далее мы смотрим, есть ли у нас следующая буква, если она есть то идем дальше, если ее нет то это означает что мы находимся на самой посл букве

        if (nextLetter) {
            result.push(`${currentLetter}${nextLetter}`)
        } else {
            result.push(currentLetter)
        }

        // вместе условия IF else можно применить push в одну строчку
        // result.push(`${currentLetter}${nextLetter}`)
    }
    return result;
}
console.log(solution(initialData));
console.log('');



/*_____  debounce  _______*/
console.log('_____  debounce  _______');

const debounce = (callback, delay = 1000) => { //delay = 1000 здесь 1000 установили по умолчанию
    // внутри себя функция debounce объявляет переменную timer
    let timer;

    return function () { // каждое нажатие он сбрасывает таймер и запускается все заново
        const fnCall = () => callback.apply(this, arguments) //перед тем как запустить fnCall мы очищаем таймер, а затем заново присваиваем задержку в 1000

        clearTimeout(timer); //очищаем таймер после каждого нажатия, т.е каждое нажатие он сбрасывает таймер обратно

        timer = setTimeout(fnCall, delay)// занаво устанавливаем таймер после каждого нажатия
        // или
        /* 
        timer = setTimeout(() => {        // занаво устанавливаем таймер после каждого нажатия
            callback();
        }, delay)
         */
    }
}

const button = document.querySelector('#button'); //сделать кнопку в html

const callback = (event) => {
    console.log('hello');
    console.log(event.target);
}

const debounced = debounce(callback);

button.addEventListener('click', debounced);
console.log('');