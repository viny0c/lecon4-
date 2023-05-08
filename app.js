const express = require('express')

let pokemons = require('./mock_pokemon');

const app =express();

const port =3000;

app.listen(port, ()=>{
    console.log(`Serveur demarrer sur le port ${port} avec succes`);
})

app.get('/pokemon/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    // const name = req.params.name
    // res.send(`pokemon n^${id} qui s'appelle ${name}`)
    const pokemon = pokemons.find(pokemon => pokemon.id === id);

    res.send(`vous avez demader ${pokemon.name}`);

})
