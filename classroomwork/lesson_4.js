const user = {
    name: 'alex',
    age: 25,
    isAproved: false,
}
console.log(user.age); // вызов значения по ключу

user.name = 'jopa' // замена значения свойства объекта по ключу Alex на jopa
console.log(user.name);

user.adress = 'burdeynogo'; //добавляем новое свойство объекта 
console.log(user);


const user2 = user; // копируем ссылку в user2 на объект user
user2.friends = ['a', 'b']
console.log(user);
console.log(user2);


// создание независимовй копии, что при копировании не изменялся базовый объект
const user3 = {
    ...user
};
user3.friends = ['c', 'c']
console.log(user);
console.log(user3);

/*  */
console.log('');
console.log('');
console.log('вызов callback');

const someFunction = (arg) => {
    return arg();
}

const sayHello = () => {
    return 'Hello';
}
const sayBuy = () => {
    return 'Buy';
}

console.log(someFunction(sayHello)); // sayHello -> это ссылка на функцию, а sayHello() -> вызов функции
console.log(someFunction(sayBuy));

/*  */
console.log('');
console.log('');
console.log('метод for of');

const numbers = [1, 2, 3, 4, 5];

const funcPow = (numbers) => {
    const result = [];

    for (const number of numbers) {
        result.push(number * 2) //возвращаем массив усноженный на 2
    }
    return result;
}
console.log(funcPow(numbers));

/*  */
console.log('');
console.log('');
console.log('метод map - 1 вариант');

const methodMap = (numbers) => {
    return numbers.map((num) => num * 2)
}
console.log(methodMap(numbers));

/*  */
console.log('метод map - 2 вариант');
const methodMapTwo = (numbers) => numbers.map((item, index) => {
    console.log('item', item);
    console.log('index', index);

    return {
        value: item,
        index: index
    }
    return item * 2;
})
console.log(methodMapTwo(numbers));

/*  */
// изменяем объект useras и возвращаем без age
const users = [{
        name: 'alex',
        age: 12,
    },
    {
        name: 'oleg',
        age: 25,
    }
]

const arrayWithoutAge = (users) => {
    return users.map((user) => {
        return {
            name: user.name
        }
    })
}
console.log(arrayWithoutAge(users));

/*  */
console.log('');
console.log('');
console.log('метод filter');

/* 1 задача */
const filterEvem = (numbList) => {
    return numbList.filter((numb) => {
        return numb % 2 === 0
    })
}
console.log(filterEvem(numbers));

/* 2 задача */
const filterEvemName = (nameList) => {
    return nameList.filter((nameAge) => {
        return nameAge.age >= 15
    })
}

console.log(filterEvemName(users));

/*  */
console.log('');
console.log('');
console.log('__метод for each');

// проиндексируем весь массив
const usersList = [{
        name: 'ab',
        age: 5,
    },
    {
        name: 'cd',
        age: 3,
    },
    {
        name: 'ef',
        age: 1,
    },
    {
        name: 'gh',
        age: 2,
    }
]

const idexUsersMap = usersList.map((item, ind) => {
    return {
        ...item,
        id: ind,
    }
})

const idexUsersForEch = usersList.forEach((item, ind) => {
    return {
        ...item,
        id: ind,
    }
});

const idexUsersForEchT = (usersListes) => {
    const result = [];
    usersListes.forEach((item, ind) => {
        result.push({
            ...item,
            id: ind
        })
    })
    return result;
}

console.log('метод map =');
console.log(idexUsersMap);
console.log('метод for each =');
console.log(idexUsersForEch);
console.log('метод for eachT =');
console.log(idexUsersForEchT);


/*  */
console.log('пример недописан');
console.log('colorizer');

// const button = document.getElementById('LoadDataButton')
// const rootDiv = document.getElementById('root')
const base_usrl = 'https://pokeapi.co/api/v2/';

const getPokemons = () => {
    return fetch(`${base_usrl}/pokemon`).then(response => response.json().then(data => data.results))
}




/* Задачи */
console.log('Задача 1: вернуть массив чисел возведенный в квадрат (методом Мар)');
const newArrayNumbers = [1, 2, 3, 4, 5];
const expFunction = (numbers, degree) => numbers.map((number) => number ** degree);
console.log(expFunction(newArrayNumbers, 2));


console.log('Задача 2: вернуть массив из объектов и указать тип каждого элемента массива');
const arrayValues = [1, 'Hello']
const reverseToObject = (arrays) => {
    return arrays.map((arr) => ({
        value: arr,
        type: typeof arr
    }))
}
console.log(reverseToObject(arrayValues));

console.log('Задача 3: вернуть значение из объекта (деструктуризация)');
const objArrays = {
    value: 1,
    type: 'number',
    array: []
};
const {
    value,
    array,
    ...otherElement
} = objArrays;
console.log(value);
console.log(array);
console.log(otherElement);