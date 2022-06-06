//
console.log(' ___ Task 1 ___');

const videos = [
    {
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

const myVideos = (function(videos){
    return videos.forEach(item => {
        console.log(`${item.id} : ${item.title}`);
    });
})

console.log(myVideos(videos));

//
console.log(' ___ Task 2 ___');

const boxarts = [
    {
        with: 200,
        height: 200,
        url: 'http:URL-1'
    },
    {
        with: 150,
        height: 200,
        url: 'http:URL-2'
    },
    {
        with: 300,
        height: 200,
        url: 'http:URL-3'
    },
    {
        with: 425,
        height: 150,
        url: 'http:URL-4'
    },
];

const someFunction = (boxart) => {
    return boxarts.map(boxart => [boxartsItem.with] * [boxartsItem.height])
    const someFunction = (numbers) => {
        return numbers.map(function (number) {
            return number % 2 === 0 ? (number += 1) : (number -= 1);
        });
    };
};

console.log(someFunction(boxarts));


console.log('__ 2 вариант __');

const arrayEven = [1, 2, 3, 4, 5];

const isEven = (arrayNum) => {
    return arrayEven.map((arrayNum) => ((arrayNum % 2 === 0) ? (arrayNum + 1) : (arrayNum - 1)));
}
console.log(isEven(arrayEven));



//    ___ Task 2 ___
console.log(' ___ Task 2 ___');
const words = ['alex', 'Ovechkin', 'oLeG', 'veCn', 'HoHo'];

const capitalizeFunction = (arrayWords) => {
    return words.map(function (word) {
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

const usersClub = [{
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

// как функция понимает, что current  это элемент массива usersClub - current говорит что это ссылка на элемент массива userCub
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
console.log(' ___ Task 5 ___ ');

const customers = [{
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
const removeElementArray = (customers) => { // почему переносим сюда customers
    const women = [];
    const man = [];

    customers.forEach(({
        first_name,
        last_name,
        ...otherFields
    }) => { // здесь деструктурируем массив, т.е. собираем массив без первых двух элементов
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

const newReleases = [{
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
        bookmark: [{
            id: 432534,
            time: 65876586
        }],
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
        bookmark: [{
            id: 432534,
            time: 65876586
        }],
    },
];

// мы должны деструктурировать объект
// выделить по заданию только id и title
// и затем вывести объект состоящий из id и title

const mapReal = () => {
    return newReleases.map(({
        id,
        title
    }) => {
        return ({
            id,
            title
        })
    })
}


const number = '188';

const someFunc = (stringValue) => {
    const splitNum = stringValue.split("");
    console.log(splitNum);
    const sum = splitNum.reduce((result, elem) => {
        return result + Number(elem);
    }, 0);
    console.log(sum);

    if (sum > 9){
        return someFunc(sum.toString());
    } 
    return sum;

    console.log(sum);

const ratingTop = () => {
    const result = [];

    newReleases.forEach(({
        id,
        rating
    }) => { // выбираем по заданию только id and rating и деструктурируем
        if (rating[0] === 5) { // [0] потому что нужен первый элемент массива, т.к. в поле rating  всегда один элемент
            return result.push(id)
        }
    })
    return result;
}
}


console.log(someFunc(number));
