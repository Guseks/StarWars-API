const express = require("express");
const ElevatorManager = require("./elevatorManager");

const router = express.Router();
const elevatorManager = new ElevatorManager();

router.get('/elevator/status', (req, res) =>{
  const elevatorsStatus = elevatorManager.getAllStatus();
  res.send(elevatorsStatus);
  
  res.end();

});

router.put('/elevator/call', (req, res)=>{
  
  const floor = req.body.floor;
  console.log(floor);
  const elevatorAlreadyThere = elevatorManager.callElevator(floor);
  if(elevatorAlreadyThere){
    res.send('Elevator already at that floor');
  }
  else {
    res.send(`Call for elevator to floor ${floor} recieved `);
  }
  
  res.end();
});

router.get('/elevator/', (req, res)=>{
  res.send(elevatorManager.elevators);
  res.end();
});


module.exports = router;