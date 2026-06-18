

const Renderer = function(){
    
    const userImage = document.querySelector("#userImage")
    const userFullName = document.querySelector("#userFullName")
    const userLocation = document.querySelector("#userLocation")
    const aboutText = document.querySelector("#aboutText")
    const quoteText = document.querySelector("#quoteText")
    const pokemonImage = document.querySelector("#pokemonImage")
    const pokemonName = document.querySelector("#pokemonName")
    const friendsList = document.querySelector("#friendsList")
    const friendsTitle = document.querySelector("#friendsTitle")
    const errorMessage = document.querySelector("#errorMessage")

    const fillProfile = function(mainUser){
        userImage.src = mainUser.image
        userFullName.textContent = `${mainUser.firstName} ${mainUser.lastName}`
        userLocation.textContent = `${mainUser.city}, ${mainUser.state} , ${mainUser.country}`
         
    }
    const fillFriends = function(friends){
        friendsList.innerHTML = ""
        friends.forEach(friend => {
            const newFriendContainer = document.createElement("div")
            newFriendContainer.classList.add("friend-container")

            const newFriendImageContainer = document.createElement("div")
            newFriendImageContainer.classList.add("friend-image-container")

            const newImage = document.createElement("img")
            newImage.classList.add("friend-image")
            newImage.src = friend.image
            newImage.alt = `${friend.firstName} ${friend.lastName}`

            const newName = document.createElement("p")
            newName.classList.add("friend-name")
            newName.textContent = `${friend.firstName} ${friend.lastName}`

            newFriendImageContainer.appendChild(newImage)

            newFriendContainer.appendChild(newFriendImageContainer)
            newFriendContainer.appendChild(newName)

            friendsList.appendChild(newFriendContainer)
        })
        friendsTitle.textContent = `Friends(${friends.length})`  

    }
    const fillQuote = function(quote){
        quoteText.textContent = quote
    }
    const fillPokemon = function(name,image){
        pokemonName.textContent = name
        pokemonImage.src = image
    }
    const fillAboutme = function(aboutMeText){
        aboutText.textContent = aboutMeText
    }

    const render = function(profile){
        fillProfile(profile.mainUser)
        fillFriends(profile.friends)
        fillQuote(profile.quote)
        fillPokemon(profile.pokemonName, profile.pokemonImage)
        fillAboutme(profile.aboutMe)
    }
    const renderError = function(message){
        errorMessage.textContent = message || "Something went wrong. Please check your internet connection and try again."
        errorMessage.classList.remove("hidden")
    }
    const clearError = function(){
        errorMessage.textContent = ""
        errorMessage.classList.add("hidden")
    }

    return {
        render,
        renderError,
        clearError,
        fillAboutme,
        fillFriends,
        fillQuote,
        fillPokemon,
        fillProfile
    }
}

export default Renderer