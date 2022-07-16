/*  */
console.log('task 1');

const arr1 = [1, 3, 5, 7, 9, 11, 12];
const arr2 = [1, 2, 3, 4, 5, 10, 1];

const someFunction = (element) => {
    const array = arr1.concat(arr2).sort((a, b) => a - b)

    const mass = array.reduce((result, item) => {
        return result.includes(item) ? result : [...result, item];
    }, [])
    console.log(mass);
}

someFunction()

console.log('');

/*  */
console.log('task 2');

const someWords = (word) => ((word.length % 2 === 0) ? word.substring(word.length / 2 - 1, word.length / 2 + 1) : word.charAt(Math.floor(word.length / 2)))

console.log(someWords('test'));
console.log(someWords('testing'));
console.log(someWords('middle'));
console.log(someWords('A'));
console.log('');

/*  */
console.log('task 3');

const numb = 370;
const narcissistic = (value) => {
    const array = value.toString().split('');

    const exp = array.map((element) => {
        return (element ** array.length);
    })

    const summ = exp.reduce((result, item) => {
        return result + item;
    }, 0)

    for (const key in value) {
        if (value == summ) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(narcissistic('370'));
console.log(narcissistic('1938'));
console.log('');

/*  */
console.log('task 4 - вывести те слова которые === длинне 4');

const arrayName = ["Ryan", "Kieran", "Jason", "Yous", "Ryan", "Kieran"];

const namefunction = (name) => {
    return name.reduce((result, item) => {
        if (item.length === 4) {
            result.push(item);
        }
        return result;
    }, [])
}
console.log(namefunction(arrayName));
console.log('');

/*  */
console.log('task 5 - задача из кодворс по геомтрической прогрессии');

const numbers = [1, 3, 5, 9, 11];

const arifmetic = (number) => {
    for (let index = 0; index < number.length; index++) {
        const current = number[index];
        const next = number[index + 1];
        const supernext = number[index + 2];

        const nextCur = next - current;
        const supernextDif = supernext - next;

        if (nextCur !== supernextDif) {
            return current + supernextDif;
        }
    }
}
console.log(arifmetic(numbers));
console.log('');



/* https://www.codewars.com/kata/5b02fa2d86d07558c40000c5/train/javascript  */
console.log('task 6');
const num = [12, 5, 13]

const pytrip = (num) => {
    num.reduce((acc, elem) => {
        return acc + elem ** 2
    }, 0)
}
console.log(pytrip(num));

console.log('task 7');

const mas = [1, 2, 3, 4, 5]
const minMax = mas.reduce((acc, m) => {
    return
}, [])

console.log(Math.max(...mas));
console.log('');


/* https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript 

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
console.log('task 8');

const arrayElements = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

const moveZeros = (arr) => {
    const arrSymbol = []
    const arrZeros = []

    arr.map((element) => element === 0 ? arrZeros.push(element) : arrSymbol.push(element))

    return [...arrSymbol, ...arrZeros]
}

console.log(moveZeros(arrayElements));
console.log('');
/* другие варианты решения задачи */

/*
// 1 вараинт 
var moveZeros = function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
} 

// 2 вараинт 
var moveZeros = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

// 3 вараинт 
var moveZeros = function (arr) {
    return [...arr.filter(v => v !== 0), ...arr.filter(v => v === 0)]
}
*/



// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
console.log('task 9');

const arrayNum = ([1, 2, 3], 4)

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}
// for (let i = 0; i < item.length; i++) {    
//     const sum = item[i] + item[i + 1];
//     if (sum == target) {
//         return i, sum
//     }

// }

console.log(twoSum(arrayNum));
console.log('');

/* https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript */
/* 
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

console.log('task 10');

// 1 вариант
console.log('__ 1 вариант ___');
const replaceLetter = (str) => (str.split('').map((item) => {
    if (item == 'A') {
        return 'T'
    }
    if (item == 'T') {
        return 'A'
    }
    if (item == 'C') {
        return 'G'
    }
    if (item == 'G') {
        return 'C'
    }
}).join(''))
console.log(replaceLetter('ATTGC'));
console.log(replaceLetter('GTAT'));
console.log('');

// 2 вариант
console.log('__ 2 вариант ___');

const replaceLetters = str => str.split('').map(item => item === 'A' ? 'T' : item === 'T' ? 'A' : item === 'G' ? 'C' : item === 'C' ? 'G' : '').join('');

console.log(replaceLetters('ATTGC'));
console.log(replaceLetters('GTAT'));
console.log('');

// 3 вариант
console.log('__ 3 вариант ___');

function DNAStrand(dna) {
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
    //?? почему тут применяется upper и почему сразу буквы в нижнем регистре
}
console.log(DNAStrand('ATTGC'));
console.log(DNAStrand('GTAT'));
console.log('');


/* https://www.codewars.com/kata/596d2447c4a959794d000007/train/javascript */
/* 
Return the sum of all even Fibonacci numbers up to and including n.
Character limit: max. 76 characters (including)
*/

console.log('task 11');

function sumAllEvenFibonacciNumbers(n) {
    return n <= 1 ? n : sumAllEvenFibonacciNumbers(n - 1) + sumAllEvenFibonacciNumbers(n - 2)
}

// console.log(sumAllEvenFibonacciNumbers(40));


function fib(n) {
    if (n < 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2) // почему тут делаем именно так fib()
}
// console.log(fib(40));


function fl(n) {
    let a1 = 0
    let a2 = 1
    let curr = 1

    for (let i = 1; i <= n; i++) {
        curr = a1 + a2
        a1 = a2
        a2 = curr
    }
    return curr;
}

// console.log(fl(10));
console.log('');






/* 
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

console.log('task 12');

function arrayDiff(a, b) {
    // 1 вариант
    /* return a.filter((num) => !b.includes(num)) */
    
    // 2 вариант
    /* return a.map((num) => {
        return !b.includes(num)
    }) */

    // 3 вариант
    let result = []

    for (let i = 0; i < a.length; i++) {
        // Only push elements from a that aren't in b
        if (!b.includes(a[i])) {
            result.push(a[i])
        }
    }
    return result
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log('');


/* 
https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
*/
console.log('task 13');

function printerError(s) {
    const array = s.split('')
    console.log(array);

    const count = 0
    for (let i = 0; i < array.length; i++) {
        count++
        
    }
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));