const e = require("express");
const Elevator = require("./elevator");

class ElevatorManager {
  constructor() {
    this.elevators = [];
    const numberOfElevators = 3
    for(let i=1; i <= numberOfElevators; i++){
      this.elevators.push(new Elevator(i))
    }    
  }
  
  callElevator(floor) {
    let closestElevator;
    let closestDistance = Infinity;
    let elevatorCalled = false;
    
    
    for(let elevator of this.elevators){
      
      if(elevator.isAvailable()){
        elevatorCalled = true;
        let distance = Math.abs(elevator.currentFloor - floor);

        if(distance < closestDistance){
          closestDistance = distance;
          closestElevator = elevator;
        }
        if((elevator.currentFloor === floor) && elevator.isAvailable()){
          console.log(`Elevator ${elevator.id} already at floor ${floor}`);
          
          return true;
        }
      }
    }
    if(!elevatorCalled){
      this.elevators.forEach(elevator =>{
        let distance = Math.abs(elevator.destinationFloor - floor);
        if(distance < closestDistance){
          closestElevator = elevator;
          closestDistance = distance;
          
        }
      });
      closestElevator.queueFloor(floor);
      console.log(`Elevator ${closestElevator.id} queued for floor ${floor}`);
    }
    else {
      closestElevator.queueFloor(floor);
      closestElevator.moveToNextFloor();
    }
    
    
  }

  updateElevatorStatus(elevatorId, status, destinationFloor){
    this.elevators.forEach(elevator => {
      if(elevator.id === elevatorId){
        elevator.updateStatus(status);
        elevator.updateDestination(destinationFloor);
      }
    })

  }
  getAllStatus(){
    return this.elevators.map(elevator => elevator.status)
  }
  printElevators(){
    this.elevators.forEach(elevator => console.log(elevator));
  }
  
}

module.exports = ElevatorManager;