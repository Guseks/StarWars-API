const app = require('./app');
const api = require('./api');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

let quit = false;
let userChoice = "";
let choiceMade = false;
function launchProgram(){
  menu();
}


function menu(){
  if(!quit && !choiceMade){
    
    console.log('\nWelcome to swapi (CLI version)\n');
    console.log('What do you want to do?');
    console.log("1: Add a character");
    console.log("2: Print all current characters in collection");
    console.log("3: Quit Program");

    console.log('Make your choice (Options 1-3): ');
    readline.prompt();
    
  }
  //Only run menuHandler when a choice has been made
  if(choiceMade){
    menuHandler(userChoice);
  }
  
    
}

//Listener for user input, called when the user has pressed "Enter"
readline.on('line', (input) =>{
  
  if((parseInt(input) < 4) && (parseInt(input) > 0)){
    userChoice = input;
    choiceMade = true;
    menu();   
  }
  else {
    console.log("\nInvalid choice, try again!");
    console.log("\Returning to the menu....");
    console.log("____________________________________________");
    
    
    menu();
  }
  
});


function menuHandler(choice) {
  switch (choice) {
    case '1':
      //Code to add character to collection
      //Call function in app.js
      console.log(`Performing option ${choice}`);

      break;
    
    case '2':
      // Code to print all current characters in collection
      //call function in app.js
      console.log(`Performing option ${choice}`);
      break;
    
    case '3':
      console.log("\nExiting Program, Thanks for using my program!\n");
      readline.close();
      quit = true;
      break;
  }

  if(quit) return;
  
  sleep(2000).then(() => { 
    choiceMade = false;
    console.log("\nReturning to the menu....");
    console.log("____________________________________________");
    sleep(2000).then(()=>{menu();});    
  });
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {launchProgram};