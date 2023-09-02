const api = require('./api.js');

const characters = [];

async function addCharacter(name){
  try {
    const result = await api.getCharacter(name);
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

function swapCharacters(name1, name2){
  let index1 = characters.findIndex((character)=> character.name === name1);
  let index2 = characters.findIndex((character)=> character.name === name2);
  if(index1 === -1){
    console.log(`${name1} does not exist in the collection. Unable to swap.`);
    return
  }
  else if(index2 === -1){
    console.log(`${name2} does not exist in the collection. Unable to swap.`);
    return
  }
  else {
    let temp = characters[index1];
    characters[index1] = characters[index2];
    characters[index2] = temp; 

    //print success message
    console.log(`\n${name1} and ${name2} have swapped positions in the collection`);
  }
 
}



// --------------- Help Functions -----------------
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


module.exports = {addCharacter, printCharacters, chooseCharacterToAdd, deleteCharacter, swapCharacters};
