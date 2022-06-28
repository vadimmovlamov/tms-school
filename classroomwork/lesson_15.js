const arrayOfArrays = [
    [1, 2, 3, 4],
    [2, 2, 2, 5],
    [1]
];

const bigSum = (arrays) => {
    return arrays.reduce((result, subArr) => {
        const sumArr = subArr.reduce((sum, number) => sum + number, 0)
        return sumArr > result ? sumArr : result;
    }, 0)
}

console.log(bigSum(arrayOfArrays));



/* debounce */

// const debounce = (callback, delay = 1000) => {
//     let timer;

//     return () => { // каждое нажатие он сбрасывает таймер и запускается все заново
//         const fnCall = () => callback.apply(this, arguments)

//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             callback();
//         }, delay)
//     }
// }

// const button = document.querySelector('button'); //сделать кнопку в html

// const callback = (event) => {
//     console.log(event.target);
// }

// const debounced = debounce(callback);

// button.addEventListener('click', debounced);
console.log('');


const funFac = (number) => {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log(funFac(4));
console.log(funFac(0));


/* https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript */

const getPairs = (char) => {
    const word = char.split('')
    
    if (word.lenght % 2 === 0) {
        
    } else {
        
    }



}
 console.log(getPairs('abcdefg'));