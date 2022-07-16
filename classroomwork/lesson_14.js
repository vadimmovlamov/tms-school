// замыкание

const counter = () => {
    let count = 0;

    return () => {
        return (count += 1)
    }
}

const myCounter = counter();

myCounter();
myCounter();
myCounter();
myCounter();
myCounter();

const x = myCounter();

console.log(x);

/* если в таком случае то область видимости идет на замыкание */

const counterY = () => {
    let count = 0;

    return (count += 1)
}

counterY()
counterY()
counterY()
counterY()
counterY()

console.log(counterY());
console.log('');


/*  */

const dictionary = {
    alex: 100,
    max: 200,
    vlad: 50
}

const users = [{
    name: 'alex'
}, {
    name: 'max'
}, {
    name: 'vlad'
}]

const resulte = (users) => {
    return users.map((user) => {
        return ({
            ...user,
            bax: dictionary[user.name]
        })
    })
}
console.log(resulte(users));
console.log('');

/* выписать последний ip подмассива и добавить поле total c суммой всех value. 
Результат должен быть тако -> 
[{ip: 139.12.22', total: 47 }, {ip: '1467.12.22', total: 14}]  */

/* перевести чисо в строку */
const a = 370;
const replace = [...a.toString()]
console.log(replace);
console.log('');

const dummyData = [
    [{
            ip: '139.12.13',
            value: 25
        },
        {
            ip: '139.12.134',
            value: 12
        },
        {
            ip: '139.12.22',
            value: 10
        }
    ],
    [{
            ip: '144.12.13',
            value: 3
        },
        {
            ip: '1467.12.22',
            value: 11
        }
    ]
]


/* first variant */
const sumFun = (item) => {
    return item.map((elem) => {
        const {
            ip
        } = elem[elem.length - 1];
        return {
            ip,
            total: elem.reduce((result, sum) => result + sum.value, 0),
        };
    });
}

console.log(sumFun(dummyData));


/* second variant */
const result = dummyData.map((subarray) => {
    const {
        ip
    } = subarray[subarray.length - 1];

    return {
        ip,
        total: subarray.reduce((sum, item) => sum + item.value, 0)
    }
})

console.log(result);