const RandomUserService  = function(){

    const buildMainUser = function(data){
        return {
            firstName: data.name.first,
            lastName:  data.name.last,
            city: data.location.city,
            state: data.location.state,
            country: data.location.country,
            image: data.picture.large
        }
    }
    const buildFriendUser = function(data){
        return {
            firstName: data.name.first,
            lastName:  data.name.last,
            image: data.picture.large
        }
    }

    const getRandomUsers= async function(){
        try{
            const response = await fetch("https://randomuser.me/api/?results=7&inc=name,location,picture&noinfo")
            if(!response.ok){
                return{
                    result:false,
                    message:"could not return users"
                }
            }
            const data = await response.json()
            
            if(data.error){
                return {
                    result: false,
                    message: data.error
                }
            }
            if (!Array.isArray(data.results)) {
                return {
                    result: false,
                    message: "Invalid users data"
                }
            }
            if (data.results.length < 7) {
                return {
                    result: false,
                    message: "Not enough users received"
                }
            }
            const users = data.results
            const mainUser = buildMainUser(users[0])
            const friends = users.slice(1).map(buildFriendUser)
            return {
                result: true,
                data: {
                    mainUser,
                    friends
                }
            }
        }
        catch{
            return {
                    result: false,
                    message: "something went wrong"
                }
        }
    }

    return {
        getRandomUsers
    }
}
export default RandomUserService