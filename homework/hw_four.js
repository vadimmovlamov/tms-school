console.log('___ Task 1 ___');

const getInfo = async (infoAboutPokemons) => {
    const mainUrl = `https://pokeapi.co/api/v2/pokemon/`;

    try {
        const pokemons = await fetch(mainUrl).then(response => response.json()); // делаем запрос по mainUrl и сразу же распаковываем его
        console.log('1 этап', pokemons);

        const pokemonDetailRequests = pokemons.results.map((pokemon) => fetch(pokemon.url).then(response => response.json()));
        // делаем массив запросов по pokemon.url на детальную информацию об покемоне, и также сразу её распаковываем
        // используем map т.к. массив на входе и массив должен быть на выходе 
        console.log('2 этап - начало выполнения', pokemonDetailRequests);
        // закидываем этов в Promise.all для выполнения 
        const pokemonDetail = await Promise.all(pokemonDetailRequests);
        console.log('2 этап - конец выполнения', pokemonDetail);

        const result = pokemonDetail.map(pokemon => {
            return {
                ...pokemon,
                stats: pokemon.stats.reduce((statMap, statItem) => {
                    statMap[statItem.stat.name] = statItem.base_stat; // ключем будет вложенность stats. stat. name
                    return statMap;
                }, {})
            }
        })
        console.log('3 этап', result);

    } catch (error) {}
}
getInfo()


/* _____ 'второй вариант' _____*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
    const {
        results
    } = await fetch(BASE_URL).then((response) => response.json());

    return results;
};

const getPokemonsDetail = (pokemonsShorList) => {
    const pokemonDetailRequests = pokemonsShorList.map(({
            url
        }) =>
        fetch(url).then((response) => response.json())
    );

    return Promise.all(pokemonDetailRequests);
};

const statsConverter = (statsList) => {
    return statsList.reduce((statMap, {
        stat,
        base_stat
    }) => {
        statMap[stat.name] = base_stat;
        // statMap пустое поле - аккумулятор, в которое передаем поле name со значением base_stat из объекта stat
        return statMap;
    }, {});
};

const getAndAggregatePokemons = async () => {
    try {
        const pokemons = await getPokemons();

        const pokemonDetailsList = await getPokemonsDetail(pokemons);

        return pokemonDetailsList.map(({
            stats,
            ...otherFields
        }) => {
            return {
                ...otherFields,
                stats: statsConverter(stats),
            };
        });
    } catch (error) {}
};
getAndAggregatePokemons().then((data) => console.log('второй вариант', data));