/* ООП в JS - это протипно-ориентированный язык программирования с элементами объектно-ориентированного программирования */
const animal = {
    eats: true,
    walk: true,
    say() {
        console.log('...');
    }
};
const cat = {
    name: 'barsik',
    age: 2,
    __proto__: animal // прототип объекта animal
}
console.log(cat);
console.log(cat.eats);
console.log('');


/*  контектст */

const animals = {
    say() {
        console.log(this.name);
    }
};

const cats = {
    name: 'vlor',
    __proto__: animals
}

cats.say();

/* class */
console.log('');

const User = function ({name, email, lastName}) {  // <-- функция-конструктор
    this.name = name;
    this.email = email;
    this.lastName = lastName;
};

const alex = new User({ // для того что бы функция-конструктор что то нам собрал мы вызываем через new 
    name: 'alex',
    email: 'asadad@gmail.com',
    lastName: 'Loper'
})

console.log(alex);
console.log('');

class Useres {
    constructor({name, email, lastName}) {
        this.name = name;
        this.email = email;
        this.lastName = lastName;
    } 

    sayName(){
        console.log(this.name);
        return this.name;
    }
}
const oleg = new Useres({name: 'Oleg', email: 'asadad@gmail.com', lastName: 'Loper'});
console.log(oleg.sayName());

class Admin extends User{
    constructor({name, email, lastName}) {
        super({name, email, lastName});
        this.role = 'Admin';
    }
}
const admin = new Admin({name: 'qwerty', email: '111d@gmail.com', lastName: 'kotykr'})
console.log(admin);


class SuperAdmin extends Admin{
    constructor({name, email, lastName}) {
        super({name, email, lastName});
        this.role = 'superAdmin';
        this.ability = 'force'
    }
}
const superAdmin = new SuperAdmin({name: 'superb', email: '111d@gmail.com', lastName: 'pre'})
console.log(superAdmin);



console.log('');

class PokeApi {
    baseUrl = `https://pokeapi.co/api/v2/pokemon`;

    async getPokemonDetailsWithConvertedStats(){ // список методов который вызывает внутри себя методы приведенные нижу
        try { // trycatch именно тут так как нужно ловить много async поэтому было все преемещено сюда что бы отрабатывать только один метод
            const pokemons = await this.getPokemons();
    
            const pokemonDetailCalls = await this.getPokemonDetail(pokemons);
    
            return pokemonDetail.map((pokemon) => ({
                ...pokemon,
                stats: this.statsConverter(pokemon.stats),
            }))
        } catch (error) {
            console.log(error.message);
        }
    }
    
    async getPokemons(){ // получить покемонов
        const {result} = await fetch(this.baseUrl).then(response => response.json());

        return result;
    }

    getPokemonDetail(pokemons) { // получить детали инфы о покемонах
        const pokemonDetailCalls = pokemons.map(({url}) => fetch(url).then(response => response.json()));
        return Promise.all(pokemonDetailCalls);
    }

    statsConverter(pokemonDetailList) { // преобразование в stat
        return pokemonDetailList.reduce((statMap, {base_stat, stat}) => {
            statMap[stat.name] = base_stat;
            return statMap;
        }, {});
    }
}
const api = new PokeApi();
api.getPokemonDetailsWithConvertedStats().then(data => console.log(data));


/* Задачки */
console.log('');

const array = [1, 3, 10, 2, 4];

const someFun = (numbers) => numbers.reduce((acc, element) => {
    if (element % 2 === 0) {
        acc.even += element //сумма всех четных чисел
    } else {
        acc.odd += element //сумма всех не четных чисел
    }
    return acc;
}, {
    even: 0,
    odd: 0
})
console.log(someFun(array));
console.log(someFun([12, 3, 4, 5, 4]));