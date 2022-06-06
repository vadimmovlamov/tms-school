//    ___ Task 1 ___
console.log('___ Task 1 ___');
const numbers = [1, 2, 3, 4, 5, 6];

 const someFunction = (numbers) => {
    return numbers.map(function(number){
        return number % 2 === 0 ? (number += 1) : (number -= 1);
    });    
};

console.log(someFunction(numbers));


console.log('__ 2 вариант __');

const arrayEven = [1, 2, 3, 4, 5];

const isEven = (arrayNum) => {
    return arrayEven.map((arrayNum) =>((arrayNum % 2 === 0) ? (arrayNum + 1) : (arrayNum - 1)));
}
console.log(isEven(arrayEven));



 //    ___ Task 2 ___
console.log(' ___ Task 2 ___');
const words = ['alex', 'Ovechkin', 'oLeG', 'veCn', 'HoHo'];

const capitalizeFunction = (arrayWords) => {
    return words.map(function(word){
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
};

console.log(capitalizeFunction(words));

console.log('__ 2 вариант __');
const arrayStr = ['hello', 'wOrlD'];

const stringFunction = () => {
    return arrayStr.map((element) => (element[0].toUpperCase() + element.slice(1).toLowerCase()));
}
console.log(stringFunction(arrayStr));


//    ___ Task 3 ___
console.log(' ___ Task 3 ___ ');

const usersClub = [
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

const removeArray = (usersClub, list) => {
    return usersClub.filter(current => !list.includes(current.id)); 
}
// как функция понимает, что current это элемент массива usersClub
// не понимаю зачем мы используем второй аргумент list - Мы его добавляем затем, что бы проверить включается ли элемент по id в наш массив 
console.log(removeArray(usersClub, [1]));


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

const customers = [
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
const removeElementArray = (customers) => {   // почему переносим сюда customers
    const women = [];
    const man = [];

    customers.forEach(({first_name, last_name, ...otherFields}) =>{ // здесь деструктурируем массив, т.е. собираем массив без первых двух элементов
        const customerToPush = {
            ...otherFields, // разворачиваем объект, чтобы все было на одном уровне
            fullName: `${first_name} ${last_name}`
        }
        if (customerToPush.gender === 'Male') { 
            man.push(customerToPush)
        } else {
            women.push(customerToPush)
        }
    })

    return {
        women,
        man
    }
}

console.log(removeElementArray(customers));

//    ___ Task 6 ___
console.log(' ___ Task 6 ___ ');

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "https...",
        url: "https...",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "https...",
        url: "https...",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "https...",
        url: "https...",
        rating: [5.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "https...",
        url: "https...",
        rating: [4.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
];

// мы должны деструктурировать объект
// выделить по заданию только id и title
// и затем вывести объект состоящий из id и title

const mapReal = () => {
    return newReleases.map(({ id, title }) => {
        return ({ id, title })
    })
}

console.log(mapReal(newReleases));


//    ___ Task 7 ___
console.log(' ___ Task 7 ___ ');

const ratingTop = () => {
    const result = [];
    
    newReleases.forEach(({id, rating}) =>{ // выбираем по заданию только id and rating и деструктурируем
        if (rating[0] === 5){ // [0] потому что нужен первый элемент массива, т.к. в поле rating  всегда один элемент
            return result.push(id)
        }
    })
    return result;
}

console.log(ratingTop(newReleases));