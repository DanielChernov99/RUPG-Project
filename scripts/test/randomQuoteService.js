const RandomQuoteService  = function(){

    const getRandomQuote = async function(){
        try{
            const response = await fetch("https://api.kanye.rest/")
            if(!response.ok){
                return{
                    result:false,
                    message:"could not get quote"
                }
            }
            const data = await response.json()
            if(!data.quote){
                return {
                    result: false,
                    message: "Invalid quote data"
                }
            }
            return {
                result:true,
                data:data.quote
            }
        }
        catch{
            return {
                result: false,
                message: "something went wrong while fetching quote"
            }
        }
    }

    return{
        getRandomQuote
    }
}

export default RandomQuoteService