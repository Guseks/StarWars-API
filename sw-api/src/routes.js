const express = require("express");
const appController = require("./appController");

const router = express.Router();


router.get('/characters/', (req, res) =>{
  const characters = appController.getAllCharacters();
  if(isEmpty(characters)){
    res.status(200).json({message: "No characters in collection"});
  }  
  else {
    res.status(200).json(characters);
  }
  
  res.end();

});

router.put('/characters/add', async (req, res)=>{
  const name = req.body.name;
  const result = await appController.addCharacter(name);
  if(isEmpty(result)){
    res.status(404).json({message: `Unable to find character with name ${name}. Adding character failed.`});
  }
  if(multipleCharactersFound(result)){
    const foundCharacters = result.map(character => character.name).join(", ");
    res.status(200).json({message: `Found more than 1 character matching that name. Characters found: ${foundCharacters}. Please provide a full name.`}) 
  }
  else {
    res.status(201).json({message: `Character with name ${name} added to collection`, character: result});
  }
  res.end();
});

//Sends all the elevators and their information back to the client. Used mainly for testing.
router.get('/elevator/', (req, res)=>{
  res.send(elevatorManager.elevators);
  res.end();
});

// -------------- Help Functions ----------------

function isEmpty(array){
  return array.length === 0;
}

function multipleCharactersFound(array){
  return array.length > 1;
}



module.exports = router;


