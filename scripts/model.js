import RandomUserService from "./services/randomUserService.js"
import RandomQuoteService from "./services/randomQuoteService.js"

const Model = function(){
    const randomUserService = RandomUserService()
    const randomQuoteService = RandomQuoteService()
    const randomPokemonService = RandomPokemonService()

    const generateProfile = async function(){
        const [usersResult, quoteResult,pokemonResult] = await Promise.all([
            randomUserService.getRandomUsers(),
            randomQuoteService.getRandomQuote(),
            randomPokemonService.getRandomPokemon()
        ])
        if(!usersResult.result){
            return usersResult
        }
        if(!quoteResult.result){
            return quoteResult
        }
        return {
            result: true,
            data: {
                mainUser: usersResult.data.mainUser,
                friends: usersResult.data.friends,
                quote: quoteResult.data
            }
        }
    }
    return {
        generateProfile
    }
}

export default Model