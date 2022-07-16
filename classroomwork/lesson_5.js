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


const methodReduce = () => {
    return customers.reduce(accumulator, ({first_name, last_name, ...otherFields}) =>{ // здесь деструктурируем массив, т.е. собираем массив без первых двух элементов
        const customerToPush = {
            ...otherFields, // разворачиваем объект, чтобы все было на одном уровне
            fullName: `${first_name} ${last_name}`
        }
        if (customerToPush.gender === 'Male') { 
            accumulator.man.push(customerToPush)
        } else {
            accumulator.women.push(customerToPush)
        }
        return accumulator;
    }, {man: [], women: []})
}

console.log(methodReduce(customers)); */


const shoes = [{
        brand: 'nike',
        size: 42,
        name: 'airmax'
    },
    {
        brand: 'adidas',
        size: 42,
        name: 'noteroute'
    },
    {
        brand: 'nike',
        size: 42,
        name: 'airmax 90'
    },
    {
        brand: 'puma',
        size: 42,
        name: 'ares'
    },
    {
        brand: 'adidas',
        size: 4,
        name: 'original'
    },
    {
        brand: 'reebok',
        size: 42,
        name: 'ares'
    }
];

const aggregateCartItems = (cartItems) => {
    /*     const result = {};

        cartItems.forEach((cartItem) => {
            if (!result[cartItem.brand]) {           //если в нашем объекте такого бренда нету brand = nike то
                result[cartItem.brand] = [cartItem] // то return результат массива с найденым объектом. т.е. создаем новое поле и кладем в него в него массив с найденным первым элементом
            } else{                                 // если в нашем объекте есть brand = nike
                result[cartItem.brand].push(cartItem) // тогда добавляем массив и пушим
            }
        });
        return result;
    } */


    return cartItems.reduce((result, cartItem) => {
        if (!result[cartItem.brand]) {
            result[cartItem.brand] = [cartItem]
        } else {
            result[cartItem.brand].push(cartItem)
        }
        return result;
    }, {})

}
console.log(aggregateCartItems(shoes))


/*  */

// создаем новый элемент объекта из другого объекта

const stats = [{
        title: 'attack',
        value: 23
    },
    {
        title: 'defend',
        value: 22
    }
]

const statIconMap = {
    attack: 'Icon1',
    defend: 'Icon2'
}

const result = stats.map((stat) => ({
    ...stat,
    icon: statIconMap[stat.title]
}))
console.log(result);


/*  */

// обращение к полю которого нет

const user = {
    name: 'Pleg'
}

const logCity = (user) => {
    return user.address?.city
    // когда мы ставим ? и дальше пытаемся обратиться к полю, 
    // он нам  говорит - я буду пытаться взять city в том случае, если  поел adress не undefined
}
console.log(logCity(user));


// деструктурировать массив

// const numbers = [1, 2, 3];

// const [, , third] = numbers;
// const [fisrt, second, third] = numbers;
// const [fisrt, ...rest] = numbers;


// console.log(third);


// метод for in
var wizards = 
{
    name: 'Harry Potter',
    house: 'Gryfindor',
    na: 'Cedric Diggory',
    hse: 'Hufflepuff'
}

for (const key in wizards) {
    console.log(wizards[key]);
}


//превратить объект в массив

const entries = Object.entries(wizards);
console.log(entries);


//превратить массив in object

const arrayInArray = [
    [ 'name', 'Harry Potter' ],
    [ 'house', 'Gryfindor' ],
    [ 'na', 'Cedric Diggory' ],
    [ 'hse', 'Hufflepuff' ]
]
const fromEntries = Object.fromEntries(arrayInArray);
console.log(fromEntries);


/* Задача */

//
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

const aggregateByGender = (customer) => {
    return customer.reduce((result, item) => {
        const gender = item.gender;

        if (result[gender]) {
            result[gender].push(item)
        } else {
            result[gender] = [item]
        }
        return result;
    }, {})
}

console.log(aggregateByGender(customers));