import RandomUserService from "./services/randomUserService.js"


const Model = function(){
    const randomUserService = RandomUserService()

    const generateProfile = async function(){
        const usersResult = await randomUserService.getRandomUsers()
        if(!usersResult.result){
            return usersResult
        }
        return {
            result: true,
            data: {
                mainUser: usersResult.data.mainUser,
                friends: usersResult.data.friends
            }
        }
    }

    return{
        generateProfile
    }
}

export default Model