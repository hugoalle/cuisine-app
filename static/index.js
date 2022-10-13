import NewRecipeView from "./views/NewRecipeView.js"

const chooseDishesDiv = document.getElementsByClassName('chooseDishes')[0]
const newRecipeDiv = document.getElementsByClassName('newRecipe')[0]

newRecipeDiv.addEventListener('click', () => {
    const appDiv = document.getElementById('app')
    while (appDiv.firstChild) {
        appDiv.removeChild(appDiv.lastChild)
    }

    const newRecipeView = new NewRecipeView(appDiv)
    newRecipeView.display()

})
