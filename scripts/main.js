import Model from "./model.js"
import Renderer from "./renderer.js"

const renderer = Renderer()
const model = Model()

const generateButton = document.querySelector("#generateButton")
const loadButton = document.querySelector("#loadButton")
const saveButton = document.querySelector("#saveButton")




generateButton.addEventListener("click", async () => {
    const newProfile = await model.generateProfile()

    if(!newProfile.result){
        renderer.renderError()
        return
    }

    renderer.render(newProfile.data)
})