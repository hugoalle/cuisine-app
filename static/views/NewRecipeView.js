export default class NewRecipeView {
    constructor(container) {
        this.container = container
        this.listIngredientInput = []
        this.listRecipeStepsInput = []

        this.ingredientsPart = this.addIngredientsPart()
        this.recipeStepsPart = this.addRecipePart()

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

    addRecipePart() {
        const containerElement = document.createElement('div')
        containerElement.innerHTML = "<p> Etapes de la recette</p>"

        const firstEtapeInput = this.addRecipeStepInput(this.listRecipeStepsInput.length + 1)
        containerElement.appendChild(firstEtapeInput)

        const buttonAddNewRecipeStep = document.createElement('button')
        // buttonAddNewRecipeStep.classList.add('buttonAddAnotherIngredient')
        buttonAddNewRecipeStep.textContent = 'Ajouter une etape'
        buttonAddNewRecipeStep.addEventListener('click', () => {
            containerElement.insertBefore(this.addRecipeStepInput(this.listRecipeStepsInput.length + 1), buttonAddNewRecipeStep)
        })
        containerElement.appendChild(buttonAddNewRecipeStep)
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

    addRecipeStepInput(i) {
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `<p> Etape ${i}`

        const input = document.createElement('input')
        input.classList.add('inputRecipeStep')
        this.listRecipeStepsInput.push(input)

        divContainer.appendChild(input)
        return divContainer
    }

    display() {
        this.container.appendChild(this.ingredientsPart)
        this.container.appendChild(this.recipeStepsPart)
    }
}