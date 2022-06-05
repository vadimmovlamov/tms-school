
const getInfo = async (infoAboutPokemons) => {
    const mainUrl = `https://pokeapi.co/api/v2/pokemon/`;

    try {
        const getRequest = await fetch(mainUrl);
        const data = await getRequest.json();
        // return data.results;
        console.log(data.results);
    } catch (error) {

    }
}
getInfo()
// console.log(getInfo());