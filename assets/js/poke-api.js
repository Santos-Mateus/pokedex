

const pokeApi = {}

function converterDetalhePokeApiParaPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.numero = pokeDetail.order
    pokemon.nome = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.imagem = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getDetalhePokemon = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(converterDetalhePokeApiParaPokemon)

}

pokeApi.getPokemons = (offSet = 0, limit = 8) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`
   
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getDetalhePokemon))    
        .then((requisicaoDetalhes) => Promise.all(requisicaoDetalhes))
        .then((detalhesPokemon) => detalhesPokemon)
    
}

