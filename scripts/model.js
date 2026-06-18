import RandomUserService from "./services/randomUserService.js"


const Model = function(){
    const randomUserService = RandomUserService()
    
    const generateProfile = async function(){
        const usersResult = randomUserService.getRandomUsers()
        if(!usersResult.result){
            return usersResult
        }
        return{
            result: true,
            mainUser=  usersResult.data.mainUser,
            mainUser=  usersResult.data.friends
        }
    }

    return{
        generateProfile
    }
}

export default Model