
const fs = require('fs')
const Person = require('./Person.js')
class Trainer extends Person {

   constructor (firstname, age) {
     super(firstname,age)
     if ( typeof Trainer.counter == 'undefined') {
       Trainer.counter = 1
     }
     this.id = Trainer.counter++;           // attribut static

     this.pokemons = [];

     const d = new Date()
     this.startDate = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`
     console.log(`Here comes a new challenger ••[[ ${this.id} ${this.firstname}`)
      super.hi()
   }

   hey() {
     const nbPokemon = this.pokemons.length
     console.log(`
       Yoooo!
       I'm ${this.firstname} and I'm ${this.age} years old.
       I have ${nbPokemon} pokemon${nbPokemon > 1 ? 's' : ''} and I will be the best virtual pokemon master.
       `);
   }

   start(pokemons) {
     this.pokemons.push(pokemons)
     // this.pokemons.push(pokemons[Math.floor(Math.random() * pokemons.length)])
    console.log(`Yeaaaaaaah, my first pokémon is ${this.pokemons.name}`);


   }

   getPokemons(){
     return this.pokemons
   }


   setPokemons(pokemons){
     this.pokemons = pokemons
   }


   list(){
     for (let pokemon of this.pokemons){
       pokemon.yell();
     }
   }
   // serialize(){
   //   let pokemons = []
   //   for (const p of this.pokemons){
   //     pokemons.push({
   //       number: p.number,
   //       level: p.level
   //     });
   //   }
   //   let data = {
   //     trainers: [
   //       {
   //         id: this.id,
   //         firstname: this.firstname,
   //         age: this.age,
   //         pokemons,
   //         startDate: this.startDate
   //       }
   //     ]
   //   };
   //   fs.writeFileSync("pokestory.json", JSON.stringify(data,null,3));
   // }
}

module.exports = Trainer
