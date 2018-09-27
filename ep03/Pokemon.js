
class Pokemon {

constructor ({number,name,size,weight,type,level=3}){
  this.number = number
  this.pokename = name
  this.size = size
  this.weight = weight
  this.type = type
  this.level = level
  this.yell()
}
 yell(){
   console.log(`•••••• ${this.pokename}`);
 }

}
module.exports = Pokemon
