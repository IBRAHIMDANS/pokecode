const fs = require('fs');

function main(file) {

const json = fs.readFileSync(file,'utf-8')
 const output = json.replace(/\n/g,'')
 console.log(`Reading new json data information >> ${ output } `);
}
main(process.argv[2]) // mainProcessargv 2 me permet de recuperer mon fichier
