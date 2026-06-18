import Model from "./model.js"
import Renderer from "./renderer.js"

const renderer = Renderer()
const model = Model()

const generateButton = document.querySelector("#generateButton")
const loadButton = document.querySelector("#loadButton")
const saveButton = document.querySelector("#saveButton")
const profileOptionsContainer = document.querySelector(".select-profile-container")


let currentUser = null

const getUsersFromLocalStorage = function(){
    const users = localStorage.getItem("users")

    if(!users){
        return {}
    }

    return JSON.parse(users)
}
const saveUsersToLocalStorage = function(users){
    localStorage.setItem("users", JSON.stringify(users))
}


generateButton.addEventListener("click", async () => {
    renderer.clearError()
    const newProfile = await model.generateProfile()

    if(!newProfile.result){
        renderer.renderError(newProfile.message)
        return
    }
    currentUser = newProfile.data
    renderer.render(newProfile.data)
})


saveButton.addEventListener("click", () => {
    renderer.clearError()

    if(!currentUser){
        renderer.renderError("Generate a profile before saving.")
        setTimeout(()=>{
            renderer.clearError()
        },2000)
        return
    }

    const users = getUsersFromLocalStorage()
    const userName = `${currentUser.mainUser.firstName} ${currentUser.mainUser.lastName}`

    users[userName] = currentUser

    saveUsersToLocalStorage(users)

    renderer.renderSuccsess("Saved Successfuly")
    setTimeout(()=>{
        renderer.clearError()
    },2000)
})

loadButton.addEventListener("click", () => {
    renderer.clearError()

    if(!profileOptionsContainer.classList.contains("hidden")){
        renderer.hideProfileOptions()
        return
    }

    const users = getUsersFromLocalStorage()
    const profileNames = Object.keys(users)

    renderer.showProfileOptions(profileNames)
})

profileOptionsContainer.addEventListener("click", (event) => {
    if(!event.target.classList.contains("profile-option")){
        return
    }

    const selectedProfileName = event.target.dataset.profileName

    const users = getUsersFromLocalStorage()
    const selectedProfile = users[selectedProfileName]

    if(!selectedProfile){
        renderer.renderError("Selected profile was not found.")
        return
    }

    currentUser = selectedProfile
    renderer.render(currentUser)
    renderer.hideProfileOptions()

    renderer.renderSuccsess("Profile loaded successfully.")
    setTimeout(()=>{
        renderer.clearError()
    },2000)
})