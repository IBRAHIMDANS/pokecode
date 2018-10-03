const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./Pokemon');
const PokemonFactory = require('./PokemonFactory');
const pokedex = require('../data/pokedex.json')

class Game {
  constructor(to_save = false) {
    this.tosave = to_save;
    this.pokestory = "pokestory.json"

  }

  init(){
    if (fs.existsSync(this.pokestory)) {
      const data = fs.readFileSync(this.pokestory,"utf-8");
      const json = JSON.parse(data);


      let trainers = []
      for (let item of json.trainers) {
        let trainer = new Trainer(item.firstname,item.age);
        for (let numberPokemon of item.pokemons) {
          const pokemon = PokemonFactory.create({
            key : 'ndex',
            value: numberPokemon
          });
        trainer.addPokemon(pokemon);
        pokemon.action();
        }


        trainer.list()
        trainers.push(trainer)


      }
    }
    else {
      const data = fs.readFileSync(file,'utf-8')
      const output = data.replace(/\n/g,'')
      console.log(`Reading new json data information >> ${output}`);

      const json = JSON.parse(data)
      let trainer = new Trainer(json.firstname, json.age)
      trainer.hey()

      const Arraypok = []
      for (const item of ["Bulbizarre","Salamèche","Carapuce"]){
        Arraypok.push(PokemonFactory.create(item))  }

        trainer.start(Arraypok)
        trainer.serialize()

      }
    }

    start(){
      console.log("0 : Hello");
      console.log("1 : Goodbye");

      process.stdin.setEncoding("ascii");

      process.stdin.on("data'", function(chunk){
        console.log(`You write ${chunk}`);

      });
      process.stdin.on("end", function(){
        console.log('The game is ended');

      })
    }
  }
  module.exports = Game;
