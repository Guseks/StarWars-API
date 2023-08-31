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
    if(response.data.results[0] === undefined){
      throw new Error('Name of character is incorrect. Please try again');
    }
    return response.data.results[0];
  }
  catch (error) {
    console.log(error.message);
  }
  
}

module.exports = {getCharacter};