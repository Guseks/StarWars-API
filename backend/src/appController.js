const api = require('./api.js');


const characters = [];


async function addCharacter(name){
  const result = await api.getCharacter(name);
  if(isEmpty(result)){
    throw new Error(`Unable to find character with name ${name}. Adding character failed.`);
  
  }
  if(multipleCharactersFound(result)){
    throw new MultipleCharactersFoundError(`Found more than 1 character matching that name. Please provide a full name.`, result);
    
  }
  else {
    characters.push(result[0]);
    return result;
  }
    
}



function deleteCharacter(name){
  let index = getIndex(name);
  if(characterFound(index)){
    characters.splice(index, 1);
    return; 
  }
  else {
    throw new Error(`Character with name ${name} not found in collection. Unable to delete character.`);
  }
  
}



function swapCharacters(charactersToSwap){
  if(charactersToSwap.length !== 2){
    throw new Error(`You have to provide two characters to Swap. Unable to swap`);
  }

  const name1 = charactersToSwap[0];
  const name2 = charactersToSwap[1];
  const indexes = helpFindCharacters(name1, name2);
  
  if(!characterFound(indexes[0])){
    throw new Error(`Character with name ${name1} does not exist in collection. Unable to swap`);
  }
  if(!characterFound(indexes[1])){
    throw new Error(`Character with name ${name2} does not exist in collection. Unable to swap`);
  }
  
  helpSwapCharacters(indexes[0], indexes[1]);
  return;
 
  function helpFindCharacters(name1, name2){
    const index1 = getIndex(name1);
    const index2 = getIndex(name2);
    return [index1, index2];
  }

  function helpSwapCharacters(index1, index2){
    let temp = characters[index1];
    characters[index1] = characters[index2];
    characters[index2] = temp; 
  }
 
}

// --------------- Help Functions -----------------

//returns -1 if character with charName is not found
function getIndex(charName){
  return characters.findIndex((character)=> character.name === charName);
}

function characterFound(index){
  return index !== -1;
}

function isEmpty (array){
  return array.length === 0;
}


function getAllCharacters(){
  return characters;
  
  
}

function multipleCharactersFound(array){
  return array.length > 1;
}

//Handling the case of finding multiple characters to add, using a custom Error class. 
class MultipleCharactersFoundError extends Error {
  constructor (message, data) {
    super(message);
    this.name = 'multipleCharactersFound';
    this.charactersFound = data;
  }
}

module.exports = {
  addCharacter, 
  getAllCharacters, 
  deleteCharacter, 
  swapCharacters, 
  MultipleCharactersFoundError
};
