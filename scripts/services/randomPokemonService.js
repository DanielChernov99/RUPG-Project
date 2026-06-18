
const RandomPokemonService =  function(){

    const getRandomPokemon = async function(){
        try{
            const numberOfPokemons = 1025
            const randomID = Math.floor(Math.random() * numberOfPokemons + 1)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
            if(!response.ok){
                return{
                    result:false,
                    message:"could not get pokemons"
                }
            }
            const data = await response.json()

            return {
                result: true,
                data: {
                    name: data.name,
                    image: data.sprites.front_default
                }
            }
        }
        catch{
            return{
                result:false,
                message:"something went wrong while fetching pokemons"
            }
        }
       
    }

    return{
        getRandomPokemon
    }

}

export default RandomPokemonService