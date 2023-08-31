const api = require('./api.js');


async function test(){
  try {
    const character = await api.getCharacter(1);
    console.log(character);
  }
  catch (error) {
    console.log(error.message);
  }
}

module.exports = {test};
