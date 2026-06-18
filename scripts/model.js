import RandomUserService from "./services/randomUserService.js"
import RandomQuoteService from "./services/randomQuoteService.js"

const Model = function(){
    const randomUserService = RandomUserService()
    const randomQuoteService = RandomQuoteService()

    const generateProfile = async function(){
        const [usersResult, quoteResult] = await Promise.all([
            randomUserService.getRandomUsers(),
            randomQuoteService.getRandomQuote()
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