 const pokemonName = document.querySelector('.pokemon-name')
 const pokemonNumber = document.querySelector('.pokemon-number')
 const pokemonImage = document.querySelector('.pokemon-image')


 const form = document.querySelector('.form')
 const input = document.querySelector('.pokemon-search')

 const buttonprev = document.querySelector('.btn-prev')
 const buttonnext = document.querySelector('.btn-next')

 let searchpokemon=1;

 const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


    if(APIResponse.status=200){
    const data = await APIResponse.json()
    return data;
    }
}

const renderPokemon = async (pokemon) =>{ 
    const data = await fetchPokemon (pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default'];
        input.value = '';
        searchpokemon = data.id;   
    } else {
        pokemonName.innerHTML = 'Not Found :(';
        pokemonNumber.innerHTML = '';
        
    }
    
} 
  
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value='';
});


buttonprev.addEventListener('click', ()=>{
    if(searchpokemon>1){
        searchpokemon-=1;
        renderPokemon(searchpokemon)
    }
    
});

buttonnext.addEventListener('click', ()=>{
    searchpokemon+=1;
    renderPokemon(searchpokemon)
});
renderPokemon(searchpokemon);