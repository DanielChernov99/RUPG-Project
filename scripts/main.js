import Model from "./model.js"
import Renderer from "./renderer.js"

const renderer = Renderer()
const model = Model()

const generateButton = document.querySelector("#generateButton")
const loadButton = document.querySelector("#loadButton")
const saveButton = document.querySelector("#saveButton")


let currentUser = null

const saveUsersToLocalStorage = function(){

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

    localStorage.setItem("savedProfile", JSON.stringify(currentUser))
    renderer.renderSuccsess("Saved Successfuly")
    setTimeout(()=>{
        renderer.clearError()
    },2000)
})

loadButton.addEventListener("click", () => {
    renderer.clearError()

    const savedProfile = localStorage.getItem("savedProfile")

    if(!savedProfile){
        renderer.renderError("No saved profile found.")
        return
    }

    const parsedProfile = JSON.parse(savedProfile)

    currentUser = parsedProfile
    renderer.render(currentUser)

    renderer.renderSuccsess("Profile loaded successfully.")
    setTimeout(()=>{
        renderer.clearError()
    },2000)
})