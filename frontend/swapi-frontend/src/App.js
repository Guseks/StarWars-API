
import './App.css';
import Heading from './components/Heading/Heading';
import Container from './components/Container/Container';
import CharacterList from './components/CharacterList/CharacterList';
import AddCharacter from './components/AddCharacter/AddCharacter';
import SwapCharacters from './components/SwapCharacters/SwapCharacters';
import DeleteCharacter from './components/DeleteCharacter/DeleteCharacter';


function App() {

  const characters = [
    {name: "Luke Skywalker", movies: "Return of the Jedi"},
    {name: "Anakin Skywalker", movies: "Clone Wars"},
    {name: "Yoda", movies: "Clone Wars"},
    {name: "Emperor", movies: "Clone Wars"},
    {name: "Han Solo", movies: "Clone Wars"},
    {name: "Leia", movies: "Clone Wars"},
    {name: "Grevious", movies: "Clone Wars"}
    

  ]

  return (
    <div className="App">
      <Heading />
      <Container type="content">
        <CharacterList characters={characters}/>
        <Container type="operations">
          <AddCharacter />            
          <SwapCharacters />  
          <DeleteCharacter />
        </Container>
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