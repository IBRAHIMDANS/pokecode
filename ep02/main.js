const fs = require('fs');
const Trainer = require('./trainer');

function main(file) {

const data = fs.readFileSync(file,'utf-8')
 const output = data.replace(/\n/g,'')
 console.log(`Reading new json data information >> ${output}`);

const json = JSON.parse(data)
let trainer = new Trainer(json.firstname, json.age)
trainer.hey()

}
main(process.argv[2]) // mainProcessargv 2 me permet de recuperer mon fichier
