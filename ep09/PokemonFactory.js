const Pokemon = require('./Pokemon');
const pokedex = require('../data/pokedex.json')

class PokemonFactory {

  static create({key, value}){
    const pokemon = pokedex.find(function(item){
      return item[key] == value;
    });

    let type = []
    let i =1
    while (pokemon[`type${i}`] != undefined) {
      type.push(pokemon[`type${i++}`]);
    }
    let pokedata = {
      number : pokemon.ndex,
      name : pokemon.nom,
      size : pokemon.taille,
      weight : pokemon.poids,
      type
    };
    return new Pokemon(pokedata);
  }
}
module.exports = PokemonFactory
