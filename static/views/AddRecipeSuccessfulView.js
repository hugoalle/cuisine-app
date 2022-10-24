import HomePageView from "./HomePageView.js"
import NewRecipeView from "./NewRecipeView.js"

export default class AddNewRecipeSuccessfulView {
    constructor(container) {
        this.container = container
        this.AddNewRecipeButton = null
        this.homepageViewButton = null

        this.content = this.createContent()
    }

    createContent() {
        const containerElement = document.createElement('div')

        const textContent = document.createElement('P')
        textContent.innerText = "Recette ajoutée à votre liste de recettes"

        this.AddNewRecipeButton = document.createElement('button')
        this.AddNewRecipeButton.textContent = "Ajouter une nouvelle recette"
        this.AddNewRecipeButton.addEventListener('click', () => this.displayNewRecipeView.call(this))

        this.homepageViewButton = document.createElement('button')
        this.homepageViewButton.textContent = "Retourner à l'écran d'accueil"
        this.homepageViewButton.addEventListener('click', () => this.displayHomePage.call(this))

        containerElement.appendChild(textContent)
        containerElement.appendChild(this.AddNewRecipeButton)
        containerElement.appendChild(this.homepageViewButton)

        return containerElement
    }

    display() {
        this.container.appendChild(this.content)
    }

    displayNewRecipeView() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.lastChild)
        }
        new NewRecipeView(this.container).display()
    }

    displayHomePage() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.lastChild)
        }
        new HomePageView().display()
    }
}