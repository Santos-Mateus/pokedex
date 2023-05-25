
const listaPokemon = document.getElementById('listaPokemon')
const botaoCarregarMais = document.getElementById('botaoCarregarMais')
const limit = 5;
let offSet = 0;

function carregarItensPokemons(offSet, limit){
    function converterPokemonParaLi(pokemon) {
        return 
    }
    
    pokeApi.getPokemons(offSet, limit).then((pokemons = []) => {
        const novoHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="numero">#${pokemon.numero}</span>
                <span class="nome">${pokemon.nome}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.imagem}" 
                        alt=${pokemon.nome}>
                </div>
            </li>
        `).join('')
        listaPokemon.innerHTML += novoHtml
    })  
}

carregarItensPokemons(offSet, limit)
 
botaoCarregarMais.addEventListener('click', () => {
    offSet += limit
    carregarItensPokemons(offSet, limit)
})



