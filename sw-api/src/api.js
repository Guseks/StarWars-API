const axios = require("axios");

/*
async function getCharacter (id){
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(response.data.name);
    return response.data;
  }
  catch (error) {
    console.log(error.message);
  }
  
}
*/

async function getCharacter (name){
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
    //console.log(response.data.name);
    
    return response.data.results;
  }
  catch (error) {
    console.log(error.message);
  }
  
}

module.exports = {getCharacter};