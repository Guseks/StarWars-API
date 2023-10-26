import axios from "axios";

export const addCharacterAndCallAPI = async (newCharacterName, stateVariables) => {
  const [characters, setCharacters, setLoading, setSuccessMessage, setErrorMessage] = stateVariables;
  try {
    setLoading(true);
    const response = await axios.put("http://localhost:3000/swapi/characters/add", {name: newCharacterName});
    
    //Successfull
    setLoading(false);
    if(response.status === 201){
      const newCharacter = response.data.character[0];
      setCharacters([...characters, newCharacter]);
      setSuccessMessage(response.data.message);

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

export const deleteCharacterAndCallAPI = async (characterName, stateVariables) => {
  const [characters, setCharacters, setLoading, setSuccessMessage, setErrorMessage] = stateVariables;

  try {
    setLoading(true);
    const response = await axios.delete(`http://localhost:3000/swapi/characters/delete/${characterName}`);

    //Successfull
    setLoading(false);
    if(response.status === 200){
      setSuccessMessage(response.data.message);
      
      const updatedCharacters = characters.filter((char) => char.name !== characterName);
      setCharacters(updatedCharacters);
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