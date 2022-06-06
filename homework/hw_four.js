
const getInfo = async (infoAboutPokemons) => {
    const mainUrl = 'https://pokeapi.co/api/v2/pokemon/';
    
    try {
        const response = await fetch(mainUrl);
        console.log(response);
        const data = await response.json();
        console.log(data.url);
            
            // .then((response) => response.json())
            // .then((data) => data)
            
        //     {
        //     abilities: [],
        //     forms: [],
        // });
        // const data = await getRequest.json();
        // return data.results;
            // console.log(data);
    } catch (error) {

    }
}
getInfo()
// console.log(getInfo());





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