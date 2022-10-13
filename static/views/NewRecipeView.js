export default class NewRecipeView {
    constructor(container) {
        this.container = container
        this.listIngredientInput = []
        this.recipeStepsInput = []

        this.ingredientsPart = this.addIngredientsPart()

    }

    addIngredientsPart() {
        const containerElement = document.createElement('div')
        containerElement.innerHTML = "<p> Ingrédients :</p>"

        const firstIngredientInput = this.addIngredientInput(this.listIngredientInput.length + 1)
        containerElement.appendChild(firstIngredientInput)

        const buttonAddNewIngredient = document.createElement('button')
        // buttonAddNewIngredient.classList.add('buttonAddAnotherIngredient')
        buttonAddNewIngredient.textContent = 'Ajouter un ingrédient'
        buttonAddNewIngredient.addEventListener('click', () => {
            containerElement.insertBefore(this.addIngredientInput(this.listIngredientInput.length + 1), buttonAddNewIngredient)
        })
        containerElement.appendChild(buttonAddNewIngredient)
        return containerElement
    }

    addIngredientInput(i) {
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `<p> Ingrédient ${i}`

        const input = document.createElement('input')
        input.classList.add('inputIngredient')
        this.listIngredientInput.push(input)

        divContainer.appendChild(input)
        return divContainer
    }

    display() {
        this.container.appendChild(this.ingredientsPart)
    }
}