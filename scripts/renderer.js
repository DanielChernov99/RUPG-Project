

const Renderer = function(){
    
    const userImage = document.querySelector("#userImage")
    const userFullName = document.querySelector("#userFullName")
    const userLocation = document.querySelector("#userLocation")
    const aboutText = document.querySelector("#aboutText")
    const quoteText = document.querySelector("#quoteText")
    const pokemonImage = document.querySelector("#pokemonImage")
    const pokemonName = document.querySelector("#pokemonName")
    const friendsList = document.querySelector("#friendsList")

    const fillProfile = function(mainUser){
         
    }
    const fillFriends = function(friends){

    }
    const fillQuote = function(quote){

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
    return {
        render,
        fillAboutme,
        fillFriends,
        fillQuote,
        fillPokemon,
        fillProfile
    }
}

export default Renderer