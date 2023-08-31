const app = require('./app');
const api = require('./api');
const { read } = require('fs');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let quit = false;
let userChoice = "";
let choiceMade = false;
function launchProgram(){
  menu();
}


function isValidChoice(choice){
  return (parseInt(choice) < 4) && (parseInt(choice) > 0);
}

async function menu(){
  
  let choice = "";  
  console.log('\nWelcome to swapi (CLI version)\n');
  console.log('What do you want to do?');
  console.log("1: Add a character");
  console.log("2: Print all current characters in collection");
  console.log("3: Quit Program");

  console.log('Make your choice (Options 1-3): ');
  readline.prompt();
  choice = await getUserInput()
  
  
  if(isValidChoice(choice)){
    
    await menuHandler(choice);
    
      
  }
  else {
    console.log("\nInvalid choice, try again!");
    console.log("Returning to the menu....");
    console.log("____________________________________________");
    //await menu();
  
  }
  if(!quit)  await menu(); 
  
}



function getUserInput(){
  return new Promise(resolve =>{
    readline.once('line', input => {
      resolve(input);
    })
  });
}


async function menuHandler(choice) {
  switch (choice) {
    case '1':
      
      console.log("\nWhich character do you want to add?");
      let charName = await getUserInput();
      readline.prompt();
      console.log(charName);
      
      while(charName ===""){
        console.log("Invalid character name. Please try again.");
        console.log("\nWhich character do you want to add?");
        charName = await getUserInput(); // Await again within the loop
        readline.prompt();
      }
      
      // Call function in app.js to add character
      try {
        
      /*while(!successful){
        successful = await app.addCharacter(charName);
        if(!successful) {
          readline.prompt();
          charName = await getUserInput();
          console.log(`\nTrying to add character with name ${charName}`);
        }*/
        console.log(`\nTrying to add character with name ${charName}`);
        let successful = await app.addCharacter(charName);
        if(!successful) {
          console.log('Name of character is incorrect. Unable to add the character to the collection');
        }
        else console.log("Character added successfully!");  
      }
        
      catch (error){
        console.log(error.message);
      }       
      break;
      
    case '2':
      // Code to print all current characters in collection
      //call function in app.js
      app.printCharacters();
      
      break;
    
    case '3':
      console.log("\nExiting Program, Thanks for using my program!\n");
      readline.close();
      quit = true;
      break;
  }

  if(quit) return;
  
  
  console.log("\nReturning to the menu....");
  console.log("____________________________________________");
  await sleep(2000)
  //menu();  
    
    
  
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {launchProgram};