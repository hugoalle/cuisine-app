import NewRecipeView from "./NewRecipeView.js"

export default class HomePageView {
    constructor() {
        this.appDiv = document.getElementById('app')
        this.chooseDishesDiv = null
        this.newRecipeDiv = null

        this.content = this.createContent()

    }

    createContent() {
        this.chooseDishesDiv = document.createElement('div')
        this.chooseDishesDiv.classList.add('chooseDishes', 'box')
        const text1 = document.createElement('P')
        text1.innerText = "Choix des plats pour faire les courses"
        this.chooseDishesDiv.appendChild(text1)

        this.newRecipeDiv = document.createElement('div')
        this.newRecipeDiv.classList.add('newRecipe', 'box')
        const text2 = document.createElement('P')
        text2.innerText = "Ajouter une nouvelle recette"
        this.newRecipeDiv.appendChild(text2)
        this.newRecipeDiv.addEventListener('click', () => this.displayNewRecipeView.call(this))

    }

    displayNewRecipeView() {

        this.emptyView()
        new NewRecipeView(this.appDiv).display()
    }

    emptyView() {
        while (this.appDiv.firstChild) {
            this.appDiv.removeChild(this.appDiv.lastChild)
        }
    }

    display() {
        this.appDiv.appendChild(this.chooseDishesDiv)
        this.appDiv.appendChild(this.newRecipeDiv)
    }

}
