import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Heading from './components/Heading/Heading';
import Container from './components/Container/Container';
import CharacterList from './components/CharacterList/CharacterList';
import AddCharacter from './components/AddCharacter/AddCharacter';
import SwapCharacters from './components/SwapCharacters/SwapCharacters';
import MessageComponent from './components/MessageComponent/MessageComponent';



function App() {

  /*const [characters, setCharacters] = useState([
    {name: "Luke Skywalker", movies: "Return of the Jedi"},
    {name: "Anakin Skywalker", movies: "Clone Wars"},
    {name: "Yoda", movies: "Clone Wars"},
    {name: "Emperor", movies: "Clone Wars"},
    {name: "Han Solo", movies: "Clone Wars"},
    {name: "Leia", movies: "Clone Wars"},
    {name: "Grevious", movies: "Clone Wars"}
    

  ]);*/

  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  //const [databaseError, setDatabaseError] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:3000/swapi/characters/")
      .then((res) => setCharacters([...res.data]))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (characterToDelete) => {
    console.log(`Removing character with name ${characterToDelete}`);
    const updatedCharacters = characters.filter((char) => char.name !== characterToDelete);

    setCharacters(updatedCharacters);
  }

  const addCharacterAndCallAPI = async (newCharacterName) => {
    try {
      setLoading(true);
      const response = await axios.put("http://localhost:3000/swapi/characters/add", {name: newCharacterName});
      
      //Successfull
      setLoading(false);
      if(response.status === 201){
        const newCharacter = response.data.character[0];
        setCharacters([...characters, newCharacter]);
        setSuccessMessage("Character added successfully!")

        setTimeout(()=> setSuccessMessage(null), 3000);
      }
    }
    catch (err) {
      setLoading(false);
      if(err.response && err.response.status === 400){
        
        setErrorMessage(err.response.data.message);
        setTimeout(()=> setErrorMessage(null), 10000);  
      }
      else {
        setErrorMessage(`Error: ${err.message}`);
        setTimeout(()=> setErrorMessage(null), 10000);
      }
      
      
    }
    
  }

  return (
    <div className="App">
      <Heading />
      <Container type="content">
        
        <CharacterList characters={characters} onDelete={handleDelete} loading={loading}/>
        <Container type="operations">
          <AddCharacter characters={characters} setCharacters={setCharacters} addCharacterAndCallAPI={addCharacterAndCallAPI}/>            
          <SwapCharacters  />  
        </Container>
      </Container>
      <Container type="messages">
         <MessageComponent successMessage={successMessage} errorMessage={errorMessage}/>
      </Container>
      
    </div>
  );
}

export default App;


/*
<div className="container-content">
        
       
  <div className="container-operations">
    <div className="operation">
      
    </div>
    <div className="operation">
      
    </div>
  </div>  

</div>
*/