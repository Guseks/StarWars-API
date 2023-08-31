const axios = require("axios");


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

module.exports = {getCharacter};