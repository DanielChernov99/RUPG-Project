import RandomUserService from "./services/randomUserService.js"
import RandomQuoteService from "./services/randomQuoteService.js"
import RandomPokemonService from "./services/randomPokemonService.js"
import RandomBaconService from "./services/randomBaconService.js"

const Model = function(){
    const randomUserService = RandomUserService()
    const randomQuoteService = RandomQuoteService()
    const randomPokemonService = RandomPokemonService()
    const randomBaconService = RandomBaconService()

    const generateProfile = async function(){
        const [usersResult, quoteResult,pokemonResult,baconService] = await Promise.all([
            randomUserService.getRandomUsers(),
            randomQuoteService.getRandomQuote(),
            randomPokemonService.getRandomPokemon(),
            randomBaconService.getRandomBacon()
        ])
        if(!usersResult.result){
            return usersResult
        }
        if(!quoteResult.result){
            return quoteResult
        }
        if(!pokemonResult){
            return pokemonResult
        }
        if(!baconService){
            return baconService
        }
        return {
            result: true,
            data: {
                mainUser: usersResult.data.mainUser,
                friends: usersResult.data.friends,
                quote: quoteResult.data,
                aboutMe:baconService.data
            }
        }
    }
    return {
        generateProfile
    }
}

export default Model