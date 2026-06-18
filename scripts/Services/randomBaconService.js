const RandomBaconService = function(){

    const getRandomBacon = async function(){
        try{
            const response = await fetch("https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1")
            if(!response.ok){
                return {
                    result:false,
                    message:"could not fetch bacons"
                }
            }
            const data = await response.json()
            return {
                result:true,
                data:data
            }
        }
        catch{
            return {
                result:false,
                message:"something went wrong while fetching"
            }
        }
    }
    return{
        getRandomBacon
    }
}

export default RandomBaconService