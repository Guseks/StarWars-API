const app = require('./app');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let quit = false;

function launchProgram(){
  menu();
}


function isValidChoice(choice){
  return (parseInt(choice) < 6) && (parseInt(choice) > 0);
}

async function menu(){
  
  let choice = "";
  while(!quit){
    console.log('\nWelcome to swapi (CLI version)\n');
    console.log('What do you want to do?');
    console.log("1: Add a character");
    console.log("2: Remove a character");
    console.log("3: Swap position of two characters in collection");
    console.log("4: Print all current characters in collection");
    console.log("5: Quit Program");

    console.log('Make your choice (Options 1-5): ');
    readline.prompt();
    choice = await getUserInput()
    
    
    if(isValidChoice(choice)){
      await menuHandler(choice);
    }
    else {
      console.log("\nInvalid choice, try again!");
      console.log("Returning to the menu....");
      await sleep(1000);
      console.log("____________________________________________");
    
    }
  }  
  
}

async function menuHandler(choice) {
  let charName = "";
  switch (choice) {
    case '1':
      //Add a character
      console.log("\nWhich character do you want to add?");
      charName = await getNameOfCharacterToAdd();      
      
      try {            
        console.log(`\nTrying to add character with name ${charName}`);
        let result = await app.addCharacter(charName);
        if(isEmpty(result)) {
          console.log('Name of character is incorrect. Unable to add the character to the collection');
        }
        else if (multipleCharactersFound(result)){
          console.log(`Found more than one character matching ${charName}`);
          console.log(`Characters Found: `);
          helpPrintCharacters(result);
          console.log("\nWhich one did you want to add? (Write the entire name)");
                    
          let characterAdded = false;
          while(!characterFound){
            
            charName = await getUserInput();
            readline.prompt();
            
            for (character of result){
              if(isCharacterFound(character.name, charName)){
                app.chooseCharacterToAdd(character);
                characterAdded = true;
                console.log(`Adding ${charName} to list of characters`);
              }
            }
            if(!characterAdded){
              console.log(`Unable to find character with name ${charName}. Try again`);
            }
          }
          
        }
        else console.log("Character added successfully!");  
      }
        
      catch (error){
        console.log(error.message);
      }       
      break;
    
    case '2':
      //Code to delete a character in collection if found
      app.printCharacters();
      console.log(`\nWhich character do you want to remove from the collection? (Full name required, back to return to menu)`);

      charName = await getUserInput();
      readline.prompt();
      let nameProvided = false;
      while(!nameProvided){
        if(charName === 'back'){
          break;
        }
        
        else if(charName !== ""){
          app.deleteCharacter(charName);
          nameProvided = true;
        }
        
        
        else {
          charName = await getUserInput();
          readline.prompt();
        }
        
      }
      
        
      
      break;

    case '3':
      //Code to swap position of two characters    
      const names = await getCharactersToSwap();
      app.swapCharacters(names[0], names[1]);

      break;
      
    case '4':
      // Code to print all current characters in collection
      app.printCharacters();
      
      break;
    
    case '5':
      console.log("\nExiting Program, Thanks for using my program!\n");
      readline.close();
      quit = true;
      break;
  }

  if(quit) return;
  
  
  console.log("\nReturning to the menu....");
  console.log("____________________________________________");
  await sleep(1000)
  
  
}

// -------- Help Functions ----------

async function getCharactersToSwap(){
  let namesRecieved = false;
  let names = "";
  while(!namesRecieved){
    console.log("Which characters do you want to swap position of? (Separate names with ,)");
    app.printCharacters();
    console.log("\n");
    names = await getUserInput(); 
    readline.prompt();
    
    if(names.includes(",")){
      namesRecieved = true;
    }
    else {
      console.log("\n Invalid input. Please try again.\n")
    }

  }
  const splitNames = splitString(names);
  return splitNames;

}

function splitString(inputString){
  const splitInput = inputString.split(",");
  splitInput[0] = splitInput[0].trim();
  splitInput[1] = splitInput[1].trim();
  return splitInput;
}

//Handles user input, makes sure we wait until user has provided input -> promise is resolved. 
function getUserInput(){
  return new Promise(resolve =>{
    readline.once('line', input => {
      resolve(input);
    })
  });
}

function isEmpty (array){
  return array.length === 0;
}

function multipleCharactersFound(characters){
  return characters.length > 1
}

function helpPrintCharacters(characters){
  characters.forEach(char => {
    console.log(char.name);
  });
}

function isCharacterFound (name1, name2){
  return name1 === name2;
}

async function getNameOfCharacterToAdd(){
  let charName = await getUserInput();
  readline.prompt();
  
  while(charName ===""){
    console.log("Invalid character name. Please try again.");
    console.log("\nWhich character do you want to add?");
    charName = await getUserInput(); 
    readline.prompt();
  }

  return charName
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {launchProgram};