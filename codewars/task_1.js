/*  */
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

/*  */
const someWords = (word) => ((word.length % 2 === 0) ? word.substring(word.length / 2 - 1, word.length / 2 + 1) : word.charAt(Math.floor(word.length / 2)))

console.log(someWords('test'));
console.log(someWords('testing'));
console.log(someWords('middle'));
console.log(someWords('A'));

/*  */
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


/* вывести те слова которые === длинне 4 */

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


/* задача из кодворс по геомтрической прогрессии */
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


/* перевести из римских в арабские */

const romeArray = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

с