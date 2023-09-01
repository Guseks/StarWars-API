const api = require('./api.js');

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

function deleteCharacter(name){
  let index = characters.findIndex((character) => character.name === name);
  if(index !==-1){
    characters.splice(index, 1);
    console.log(`Character with name ${name} successfully removed`);
  }
  else {
    console.log(`Character with name ${name} does not exist in collection, unable to remove character.`);
  }
}

function chooseCharacterToAdd(character){
  characters.push(character);
}

function printCharacters(){
  if(characters.length === 0){
    console.log("No characters in collection to print");
  }
  else {
    console.log("\nPrinting all current characters:");
  characters.forEach(c => console.log(c.name));
  }
  
}


module.exports = {addCharacter, printCharacters, chooseCharacterToAdd, deleteCharacter};
