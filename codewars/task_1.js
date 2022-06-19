const arr1 = [1, 3, 5, 7, 9, 11, 12];
const arr2 = [1, 2, 3, 4, 5, 10, 1];

const someFunction = (element) => {
    const array = arr1.concat(arr2).sort((a, b) => a-b)

    const mass = array.reduce((result, item) => {
        return result.includes(item) ? result : [...result, item];
    }, [])
    console.log(mass);
}

someFunction()


const someWords = (word) => ((word.length % 2 === 0) ? word.substring(word.length / 2 - 1, word.length / 2 + 1) : word.charAt(Math.floor(word.length / 2)))

console.log(someWords('test'));
console.log(someWords('testing'));
console.log(someWords('middle'));
console.log(someWords('A'));


const narcissistic = (value) => {
    const array = value.split('');

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