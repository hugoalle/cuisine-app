const express = require('express')
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cuisine-kit')
    .then(() => console.log('connected to cuisine-kit database'))
    .catch((err) => console.error('fail to connect to database', err))




const recetteSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    nbPart: Number,
    duree: String,
    ingredients: [{ ingredient: String, quantite: Number, unite: String }],
    etapes: [String]
})

const RecetteClasse = mongoose.model('Recette', recetteSchema)

async function ajouterRecette(json) {

    const recette = new RecetteClasse(json)

    try {
        const result = await recette.save()
    }
    catch (err) {
        throw new Error(err)
    }
}

const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static', '/index.html'));
});

app.post("/recipes", function (req, res) {

    ajouterRecette(req.body)
        .then(() => { res.status(200).send('recette bien ajoutee a la base') })
        .catch((err) => { res.status(500).send(err) })
})

app.listen(3000)