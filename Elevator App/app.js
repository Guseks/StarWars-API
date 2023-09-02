const express = require('express');
const routes = require('./routes'); 

const app = express();
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.use(express.json());

app.use('/api', routes);



// Start the Express.js server
app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});