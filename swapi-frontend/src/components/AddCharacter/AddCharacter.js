import React, { useState } from 'react'
import "./addCharacter.css"
import Container from '../Container/Container'

const AddCharacter = ({characters, setCharacters}) => {

  const [newCharacterName, setNewCharacterName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(newCharacterName){
      const newCharacter = {name: newCharacterName};
      setCharacters([...characters, newCharacter]);
      setNewCharacterName("");
    }
    
  };

  return (
    <Container type="operation">
      <h3 className='character-headline'>Add Character</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className="form-control" value={newCharacterName} onChange={(event)=> setNewCharacterName(event.target.value) } />
          <button className="btn btn-secondary" type="submit" >Submit</button>
        </div>
      </form>
    </Container>
  )
}

export default AddCharacter