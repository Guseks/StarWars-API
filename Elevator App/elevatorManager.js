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
    for(let elevator of this.elevators){
      if(elevator.currentFloor === floor){
        console.log(`Elevator ${elevator.id} already at floor ${floor}`);
        return;
      }
    }
    let closestElevator;
    for(let elevator of this.elevators){
      let distance = Math.abs(elevator.currentFloor - floor);
      if(distance < closestDistance){
        closestElevator = elevator;
      }
    }
    if(closestElevator.currentFloor < floor){
      this.updateElevatorStatus(closestElevator.id, 'moving_up', floor);
    }
    else {
      this.updateElevatorStatus(closestElevator.id, 'moving_down', floor);
    }
    
  }

  updateElevatorStatus(elevatorId, status, destinationFloor){

  }
  getAllStatus(){
    return this.elevators.map(elevator => elevator.status)
  }
  printElevators(){
    this.elevators.forEach(elevator => console.log(elevator));
  }
  
}

module.exports = ElevatorManager;