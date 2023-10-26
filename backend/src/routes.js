const express = require("express");
const {addCharacter, getAllCharacters, deleteCharacter, swapCharacters, MultipleCharactersFoundError} = require("./appController");


const router = express.Router();


router.get('/characters/', (req, res) =>{
  const characters = getAllCharacters();
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
  let result;
  try {
    result = await addCharacter(name);
    res.status(201).json({
      message: `Character with name ${name} added to collection`, 
      character: result
    });
  }
  catch (error){
    if (error instanceof MultipleCharactersFoundError){
      res.status(400).json({message: error.message, foundCharacters: error.charactersFound});
    }
    else {
      res.status(400).json({message: error.message});
    }
    return;
  }
  
 
  
  res.end();
});


router.delete('/characters/delete/:name', (req, res)=>{
  const charToDelete = req.params.name;
  try {
    deleteCharacter(charToDelete);
    res.status(200).json({message: `Character with name ${charToDelete} removed from collection`});
  }
  catch (error){
    res.status(400).json({mesage: error.message});
  }
});

router.post('/characters/swap', (req, res)=>{
  const charactersToSwap = req.body.names;
  try {
    swapCharacters(charactersToSwap);
    res.status(200).json({message: `Characters swapped successfully`});
  }
  catch (error){
    res.status(400).json({mesage: error.message});
  }
  
});

// -------------- Help Functions ----------------

function isEmpty(array){
  return array.length === 0;
}

module.exports = router;


