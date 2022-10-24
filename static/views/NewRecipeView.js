import AddNewRecipeSuccessfulView from './AddRecipeSuccessfulView.js'
import AddRecipeSuccessful from './AddRecipeSuccessfulView.js'

export default class NewRecipeView {
    constructor(container) {
        this.container = container
        this.listIngredientInput = []
        this.listRecipeStepsInput = []
        this.buttonValidate = null


        this.titleInput = null
        this.dureeInput = null
        this.nbParInput = null

        this.titleAndDurationPart = this.basePart()
        this.ingredientsPart = this.addIngredientsPart()
        this.recipeStepsPart = this.addRecipePart()
        this.buttonValidatePart = this.addButtonValidate()

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

        const input = document.createElement('input')
        const inputLabel = document.createElement('label')
        inputLabel.textContent = `Ingrédient ${i}`
        const inputQuantite = document.createElement('input')
        const inputQuantiteLabel = document.createElement('label')
        inputQuantiteLabel.textContent = "quantité : "
        const inputUnite = document.createElement('input')
        const inputUniteLabel = document.createElement('label')
        inputUniteLabel.textContent = "Unité : "


        input.classList.add('inputIngredient')
        inputQuantite.classList.add('inputIngredientQuantite')
        this.listIngredientInput.push({ ingredient: input, quantite: inputQuantite, unite: inputUnite })

        divContainer.appendChild(inputLabel)
        divContainer.appendChild(input)
        divContainer.appendChild(inputQuantiteLabel)
        divContainer.appendChild(inputQuantite)
        divContainer.appendChild(inputUniteLabel)
        divContainer.appendChild(inputUnite)
        return divContainer
    }

    addRecipeStepInput(i) {
        const divContainer = document.createElement('div')
        divContainer.innerHTML = `<p> Etape ${i}`

        const input = document.createElement('input')
        input.classList.add('inputRecipeStep')
        this.listRecipeStepsInput.push({ etape: input })

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
        durationP.innerText = "Ajouter une durée de préparation"
        const durationInput = document.createElement('input')
        containerElement.appendChild(durationP)
        containerElement.appendChild(durationInput)
        this.dureeInput = durationInput

        const nbPartP = document.createElement('P')
        nbPartP.innerText = "Pour combien de personnes ?"
        const nbPartInput = document.createElement('input')
        containerElement.appendChild(nbPartP)
        containerElement.appendChild(nbPartInput)
        this.nbParInput = nbPartInput

        return containerElement
    }

    addButtonValidate() {
        const containerElement = document.createElement('div')
        this.buttonValidate = document.createElement('button')
        this.buttonValidate.textContent = "valider"
        this.buttonValidate.addEventListener('click', () => this.validateClicked.call(this))
        containerElement.appendChild(this.buttonValidate)
        return containerElement
    }

    display() {
        this.container.appendChild(this.titleAndDurationPart)
        this.container.appendChild(this.ingredientsPart)
        this.container.appendChild(this.recipeStepsPart)
        this.container.appendChild(this.buttonValidatePart)
    }

    emptyView() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.lastChild)
        }
    }

    emptyInput() {
        this.titleInput.value = ""
        this.dureeInput.value = ""
        this.nbParInput.value = ""
        this.listIngredientInput.forEach((x) => {
            x.ingredient.value = ""
            x.quantite.value = ""
            x.unite.value = ""
        })
        this.listRecipeStepsInput.forEach((x) => { x.etape.value = "" })
    }

    validateClicked() {

        this.emptyView()
        this.emptyInput()

        const jsonToSend = this.getJSONObjectFromInputField()
        // TO DO : Send data

        new AddNewRecipeSuccessfulView(this.container).display()

    }

    getJSONObjectFromInputField() {
        const obj = {}
        obj.title = this.titleInput.value
        obj.duree = this.dureeInput.value
        obj.nbPart = this.nbParInput.value

        obj.ingredients = []
        this.listIngredientInput.forEach((x) => {
            const objReturned = {}
            objReturned.ingredient = x.ingredient.value
            objReturned.quantite = x.quantite.value
            objReturned.unite = x.unite.value
            obj.ingredients.push(objReturned)
        })

        obj.etapes = []
        this.listRecipeStepsInput.forEach((x) => {
            obj.etapes.push(x.etape.value)
        })

        return JSON.stringify(obj)

    }

}