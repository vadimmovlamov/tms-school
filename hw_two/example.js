//    ___ Task 1 ___
console.log('___ Task 1 ___');
const numbers = [1, 2, 3, 4, 5, 6];

const someFunction = (numbers) => {
    return numbers.map(function (number) {
        return number % 2 === 0 ? (number += 1) : (number -= 1);
    });
};

/* 
const someFunction = (numbers) => {
    return numbers.map(function(number){
        if(number % 2 === 0){
            return (number += 1);
        } 
        return (number -= 1);
    });
}; 
*/

console.log(someFunction(numbers));

//    ___ Task 2 ___
console.log(' ___ Task 2 ___');
const words = ['alex', 'Ovechkin', 'oLeG', 'veCn', 'HoHo'];

const capitalizeFunction = (arrayWords) => {
    return words.map(function (word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
};

console.log(capitalizeFunction(words));

//    ___ Task 3 ___
console.log(' ___ Task 3 ___ - НЕ ВЫПОЛНЕНО');

/* const users = [
    {
        name: 'Alex',
        id: 1,
    },
    {
        name: 'Tomara',
        id: 2,
    },
    {
        name: 'Max',
        id: 3,
    },
];
const removeFunction = (users) => {
    return users.delete((user) =>{
        return users.delete();
    })
}
console.log(removeFunction()); */


//    ___ Task 4 ___
console.log(' ___ Task 4 ___');

const polindromFunction = (str) => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(polindromFunction('Anna'))
console.log(polindromFunction('Hello'))
console.log(polindromFunction('ШалаШ'))


//    ___ Task 5 ___
console.log(' ___ Task 5 ___ НЕ СМОГ ВЫПОЛНИТЬ');

/* const customers = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },
];
const someFunc = (customers) => {
    return customers[first_name].concat([last_name]);
}
console.log(someFunc(users)) */

//    ___ Task 6 ___
console.log(' ___ Task 6 ___ НЕ ПОНЯЛ ЗАДАНИЯ');

//    ___ Task 7 ___
console.log(' ___ Task 7 ___ НЕ СМОГ ВЫПОЛНИТЬ');