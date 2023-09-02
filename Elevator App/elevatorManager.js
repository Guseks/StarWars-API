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
    let closestDistance;
    for(let elevator of this.elevators){
      
      let distance = Math.abs(elevator.currentFloor - floor);
      
      if(distance === 1){
        closestElevator = elevator;
        break;
      }
      if(distance < closestDistance){
        closestDistance = distance;
        closestElevator = elevator;
      }
    }
    //console.log(closestElevator);
    if(closestElevator.currentFloor < floor){
      this.updateElevatorStatus(closestElevator.id, 'moving_up', floor);
      closestElevator.move();
      
    }
    else {
      this.updateElevatorStatus(closestElevator.id, 'moving_down', floor);
      this.printElevators();
      closestElevator.move();
      
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