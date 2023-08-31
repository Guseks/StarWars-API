const api = require('./api.js');

/*
async function test(){
  try {
    const character = await api.getCharacter(1);
    console.log(character);
  }
  catch (error) {
    console.log(error.message);
  }
}
*/

const characters = [];

async function addCharacter(name){
  try {
    const character = await api.getCharacter(name);
    //console.log(character);
    if(character === undefined){
      return false;
    }
    else {
      characters.push(character);
      return true;
    }
    
  }
  catch (error) {
    console.log(error.message);
  }
  
}

function printCharacters(){
  console.log("\nPrinting all current characters:");
  characters.forEach(c => console.log(c.name));
}


module.exports = {addCharacter, printCharacters};
