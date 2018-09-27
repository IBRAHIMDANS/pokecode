const fs = require('fs');
const Trainer = require('./trainer');
const Pokemon = require('./Pokemon');

function main(file) {

const data = fs.readFileSync(file,'utf-8')
 const output = data.replace(/\n/g,'')
 console.log(`Reading new json data information >> ${output}`)

const json = JSON.parse(data)
let trainer = new Trainer(json.firstname, json.age)
trainer.hey()

}
if (process.argv.length != 3) {
  console.log("Usage : node main.js <filename>");
process.exit(-1);
}
main(process.argv[2]) // mainProcessargv 2 me permet de recuperer mon fichier
