const fs = require('fs');
const Trainer = require('./trainer');
const pokedex = require('../data/pokedex.json')



class Pokemon {


  constructor ({number,name,size,weight,type,attacks,level=3}, is_yelling = false){
    this.number = number
    this.pokename = name
    this.size = size
    this.weight = weight
    this.type = type
    this.level = level
    this.attacks = attacks
    if(is_yelling){
    this.yell()
    }
  }
   action(){

     
   }
  yell(){
    console.log(`•••••• ${this.pokename.toUpperCase()}`);
      console.log(this.attacks);
  }

  dump(on_file= false){
    let type_str= '[';
    for (const t of this.type){
      type_str += `'${t}']`;
    }
    let attack= '[';
    for (let currentAttack of this.attacks){
      currentAttack += `'${currentAttack.name}']`;
    }
    let output = `
    ••••••#${this.number} ${this.pokename}
    size >> ${this.size}, weight >> ${this.weight}, type >> ${type_str}
    `;

  if (on_file) {
    const d = new Date();
    const  formatDate =  `${d.getFullYear()}-${d.getMonth()+ 1}-${d.getDate()}`;
    const logname = `pokedecode.${formatDate}.log`;
    fs.writeFileSync(logname, output, "utf-8");
    console.log(`# The dump is successfully saved on file ${logname}`);



  }
  else
  {
    console.log(output);
    }
  }
}
module.exports = Pokemon
