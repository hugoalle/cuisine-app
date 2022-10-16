export default class NewRecipeView {
    constructor(container) {
        this.container = container
        this.listIngredientInput = []
        this.listRecipeStepsInput = []

        
        this.titleInput = null;
        this.dureeInput = null;

        this.titleAndDurationPart = this.basePart()
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
        const inputQuantite = document.createElement('input')
        input.classList.add('inputIngredient')
        inputQuantite.classList.add('inputIngredientQuantite')
        this.listIngredientInput.push({ingredient: input, quantite: inputQuantite})

        divContainer.appendChild(input)
        divContainer.appendChild(inputQuantite)
        return divContainer
    }

    addRecipeStepInput(i) {
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `<p> Etape ${i}`

        const input = document.createElement('input')
        input.classList.add('inputRecipeStep')
        this.listRecipeStepsInput.push({etape: input})

        divContainer.appendChild(input)
        return divContainer
    }

    basePart() {
        const containerElement = document.createElement('div')

        const titleP = document.createElement('P')
        titleP.innerText = "Ajouter un titre"
        const titleInput = document.createElement('input')
        containerElement.appendChild(titleP)
        containerElement.appendChild(titleInput)
        this.titleInput = titleInput

        const durationP = document.createElement('P')
        durationP.innerText = "Ajouter un titre"
        const durationInput = document.createElement('input')
        containerElement.appendChild(durationP)
        containerElement.appendChild(durationInput)
        this.dureeInput = durationInput

        return containerElement
    }

    display() {
        this.container.appendChild(this.titleAndDurationPart)
        this.container.appendChild(this.ingredientsPart)
        this.container.appendChild(this.recipeStepsPart)
    }
}