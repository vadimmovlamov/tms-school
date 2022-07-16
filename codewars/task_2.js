/* 
перевести из римских в арабские 
https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
*/

const romeArray = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}


// необходимо пояснить задачу https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
console.log('task 12');

function findMissingLetter(array) {
    var string = array.join("");
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
            return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log('');