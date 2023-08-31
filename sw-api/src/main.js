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
    
    console.log('\nVälkommen till swapi (CLI version)\n');
    console.log('Välj vad du vill göra');
    console.log("1: Lägg till en karaktär");
    console.log("2: Skriv ut alla karaktärer");
    console.log("3: Avsluta programmet");

    console.log('Gör ditt val (Alternativ 1-3: ');
    readline.prompt();

    
    
    
  }
  else if(choiceMade){
    menuHandler(userChoice);
  }
  
  return;
  
    
}
readline.on('line', (input) =>{
  userChoice = input;
  choiceMade = true;
  menu();
  
  
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
      console.log("\nAvslutar Programmet, tack för att du använde mitt program!\n");
      readline.close();
      quit = true;
      break;
  }

  if(quit) return;
  
  sleep(2000).then(() => { 
    choiceMade = false;
    console.log("\nRestarting the Program....\n");
    sleep(2000).then(()=>{menu();});    
  });
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {launchProgram};