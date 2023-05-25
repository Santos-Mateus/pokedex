

function converterPokemonParaLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="numero">#${pokemon.numero}</span>
            <span class="nome">${pokemon.nome}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.imagem}" 
                    alt=${pokemon.nome}>
            </div>
        </li>
    `
}

const listaPokemon = document.getElementById('listaPokemon')

pokeApi.getPokemons().then((pokemons = []) => {
    const novoHtml = pokemons.map(converterPokemonParaLi).join('')
    listaPokemon.innerHTML = novoHtml
})   
 



