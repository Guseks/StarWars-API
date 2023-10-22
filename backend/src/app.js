const express = require('express');
const routes = require('./routes'); 
const cors = require("cors");


function launchApp(){
  const app = express();
  const port = process.env.PORT || 3000;
  const hostname = 'localhost';

  //Assumes the client uses JSON format in the requests
  app.use(express.json());
  
  app.use(cors());

  //Mounts the router used to handle the elevator calls.
  app.use('/swapi', routes);



  // Start the Express.js server
  app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
  });
}



module.exports = {launchApp};