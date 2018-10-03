const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./Pokemon');
const PokemonFactory = require('./PokemonFactory');
const pokedex = require('../data/pokedex.json')

function main(file, ) {
  const pokestory = "pokestory.json"
  if (fs.existsSync(pokestory,'utf-8')) {
  const parsePokestory = fs.readFileSync(pokestory,'utf-8')
  const json = JSON.parse(parsePokestory)

let trainers = []
  for (let item of json.trainers) {
   let trainer = new Trainer(item.firstname,item.age);
   for (let numberPokemon of item.pokemons) {
     const pokemon = PokemonFactory.create({
       key : 'ndex',
       value: numberPokemon})
       pokemon.dump(true)
       trainer.addPokemon(pokemon);

   }
trainer.list()
trainers.push(trainer)
  }
} else {
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
if (process.argv.length < 3) {
  console.log("Usage : node main.js <filename>");
process.exit(-1);
}
const on_file = process.argv[3] == "--log"
main(process.argv[2], on_file) // mainProcessargv 2 me permet de recuperer mon fichier
