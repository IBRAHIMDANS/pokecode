
const Game = require("./game")

if (process.argv.length < 3) {
  console.log("Usage : node main.js <filename>");
  process.exit(-1);
}
const filename = process.argv[2]
const on_file = process.argv[3] == "--log"
const to_save = process[4] == "to_save"

const game = new Game (on_file,to_save)
game.init(filename);
game.start()
