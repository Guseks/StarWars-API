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
    const result = await api.getCharacter(name);
    //console.log(character);
    if(result === undefined){
      return [false, result];
    }
    else if (result.length > 1) {
      return [true, result]
    }
    else {
      characters.push(result[0]);
      return [true, result];
    }
    
  }
  catch (error) {
    console.log(error.message);
  }
  
}

function chooseCharacterToAdd(character){
  characters.push(character);
}

function printCharacters(){
  console.log("\nPrinting all current characters:");
  characters.forEach(c => console.log(c.name));
}


module.exports = {addCharacter, printCharacters, chooseCharacterToAdd};
