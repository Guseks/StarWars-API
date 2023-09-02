const axios = require("axios");

async function getCharacter (name){
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);    
    return response.data.results;
  }
  catch (error) {
    console.log(error.message);
  }
  
}

module.exports = {getCharacter};