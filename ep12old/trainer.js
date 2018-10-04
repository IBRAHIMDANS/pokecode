const fs = require('fs')

class Trainer{

  constructor(firstname, age ){
    if (typeof Trainer.counter == 'undefined') {
      Trainer.counter =1
    }
    this.firstname =firstname
    this.age = age
    this.id= Trainer.counter++
    this.pokemons =[]

    const d = new Date()
    this.startDate = `${d.getFullYear()}-${d.getMonth() +1}-${d.getDate()}`
    console.log(`Here come's a new challenger ••[[ ${this.id} ${this.firstname}`);
    }

    hey(){
      const nbpokemon = this.pokemons.length
      console.log(`
        Yoooo!
        I'm ${this.firstname} and I'm ${this.age} years old.
        I have ${this.id} pokemon${this.id > 1 ? 's' : ''}and I will be the best virtual pokemon master.
        `)
      }
      start(pokemons){
        this.pokemons.push(pokemons[Math.floor(Math.random() * pokemons.length)]);
        console.log(`Yeaaaaaaah, my first pokémon is ${this.pokemons[0].pokename}
          `);
          this.pokemons[0].yell()
        }
        getPokemons(pokemon){
          return this.pokemons
        }
        setPokemons(pokemon){
          this.pokemons = (pokemon);
        }
        list(){
          for (let pokemon of this.pokemons) {
            pokemon.yell();
          }
        }
        serialize(){
          let pokemons =[]
          for (const p of this.pokemons) {
            pokemons.push(p.number);
          }
          let data = {
            trainers  : [
              {
                id : this.id,
                firstname : this.firstname,
                age : this.age,
                pokemons,
                startDate : this.startDate
              }
            ]
          }
          fs.writeFileSync("pokestory.json",JSON.stringify(data,null, 3));
        }
      }
      module.exports = Trainer
