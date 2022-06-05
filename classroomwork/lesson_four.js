// const customers = [
//     {
//         id: 1,
//         first_name: 'Jeanette',
//         last_name: 'Penddreth',
//         email: 'jpenddreth0@census.gov',
//         gender: 'Female',
//         ip_address: '26.58.193.2',
//     },
//     {
//         id: 2,
//         first_name: 'Petr',
//         last_name: 'Jackson',
//         email: 'gfrediani1@senate.gov',
//         gender: 'Male',
//         ip_address: '229.179.4.212',
//     },
// ];


// const methodReduce = () => {
//     return customers.reduce(accumulator, ({first_name, last_name, ...otherFields}) =>{ // здесь деструктурируем массив, т.е. собираем массив без первых двух элементов
//         const customerToPush = {
//             ...otherFields, // разворачиваем объект, чтобы все было на одном уровне
//             fullName: `${first_name} ${last_name}`
//         }
//         if (customerToPush.gender === 'Male') { 
//             accumulator.man.push(customerToPush)
//         } else {
//             accumulator.women.push(customerToPush)
//         }
//         return accumulator;
//     }, {man: [], women: []})
// }

// console.log(methodReduce(customers));


const shoes = [
    {
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
    const result = {};

    cartItems.forEach((cartItem) => {
        if (!result[cartItem.brand]) {           //если в нашем объекте нету brand = nike то
            result[cartItem.brand] = [cartItem] // то return результат массива с найденым объектом. т.е. создаем новое поле и кладем в него в него массив с найденным первым элементом
        } else{                                 // если в нашем объекте есть brand = nike
            result[cartItem.brand].push(cartItem) // тогда добавляем массив и пушим
        }
    });
    return result;
}

console.log(aggregateCartItems(shoes));