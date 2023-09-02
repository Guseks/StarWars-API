class Elevator {
  constructor(id) {
    this.id = id;
    this.currentFloor = 1;
    this.status = 'idle'; 
    this.destinationFloor = null; 
  } 

  // Method to update elevator status and destination floor
  updateStatusAndDestination(status, destinationFloor) {
  
    this.status = status;
    this.destinationFloor = destinationFloor;
  }

  // Method to check if the elevator is available
  isAvailable() {
   
    //return this.status === 'idle' || (this.status === 'moving_up' && this.destinationFloor > this.currentFloor) || (this.status === 'moving_down' && this.destinationFloor < this.currentFloor);
    return this.status === 'idle';
  }

}

module.exports = Elevator;