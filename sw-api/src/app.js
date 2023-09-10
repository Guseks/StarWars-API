const api = require('./api.js');

const characters = [];


async function addCharacter(name){
  try {
    const result = await api.getCharacter(name);
    if(isEmpty(result)){
      return result;
    }
    else {
      characters.push(result[0]);
      return result;
    }
    
  }
  catch (error) {
    console.log(error.message);
  }
  
}



function deleteCharacter(name){
  let index = getIndex(name);
  if(indexNotFound(index)){
    console.log(`Character with name ${name} does not exist in collection, unable to remove character.`);
  }
  else {
    characters.splice(index, 1);
    console.log(`Character with name ${name} successfully removed`);
    
  }
}



function swapCharacters(name1, name2){
  let index1 = getIndex(name1);
  let index2 = getIndex(name2);
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

//returns -1 if character with charName is not found
function getIndex(charName){
  return characters.findIndex((character)=> character.name === charName);
}

function isEmpty (array){
  return array.length === 0;
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


module.exports = {addCharacter, printCharacters, chooseCharacterToAdd, deleteCharacter, swapCharacters};
