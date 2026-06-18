import Model from "./model.js"
import Renderer from "./renderer.js"

const renderer = Renderer()
const model = Model()

const generateButton = document.querySelector("#generateButton")
const loadButton = document.querySelector("#loadButton")
const saveButton = document.querySelector("#saveButton")


let currentUser = null

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