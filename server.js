const express = require('express')
const path = require('path');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cuisine-kit')
    .then(() => console.log('connected to cuisine-kit database'))
    .catch((err) => console.error('fail to connect to database', err))

const recetteSchema = new mongoose.Schema({
    titre: String, // String is shorthand for {type: String}
    nbPart: Number,
    duree: String,
    ingredients: [{ ingredient: String, quantite: Number, unite: String }],
    etapes: [String]
})

const RecetteClasse = mongoose.model('Recette', recetteSchema)

async function createRecette() {

    const recette = new RecetteClasse({
        titre: 'Crepe',
        nbPart: 4,
        duree: '50min',
        ingredients: [
            { ingredient: 'Farine', quantite: 200, unite: 'gramme' },
            { ingredient: 'Lait', quantite: 500, unite: 'mL' },
            { ingredient: 'Oeuf', quantite: 4, unite: '' }],
        etapes: ['Mettre farine', 'mettre le reste', 'faire cuir']
    })

    const result = await recette.save()
    console.log(result)
}

createRecette();


const app = express()
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static', '/index.html'));
});

app.listen(3000)