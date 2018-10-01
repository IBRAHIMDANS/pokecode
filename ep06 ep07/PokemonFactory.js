const Pokemon = require('./Pokemon');
const pokedex = require('../data/pokedex.json')

class PokemonFactory {

  static create(name){
    const pokemon = pokedex.find(function(item){
      return item.nom == name;
    });
    let i =1
    let type = []
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
