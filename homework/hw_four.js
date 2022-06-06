const getInfo = async (infoAboutPokemons) => {
    const mainUrl = `https://pokeapi.co/api/v2/pokemon/`;

    try {
        const response = await fetch(mainUrl);
        const data = await response.json();

        const array = data.results.map((pokemon) => fetch(pokemon.url).then(response => response.json()));
        console.log(array);
        const pokemons = await Promise.all(array);
        console.log(pokemons);
    } catch (error) {}
}
getInfo()




/*  */

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