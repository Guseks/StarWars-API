class Elevator {
  constructor(id) {
    this.id = id;
    this.currentFloor = 1;
    this.status = 'idle'; 
    this.destinationFloor = null; 
    this.queue = [];
  } 

  // Methods to update elevator status and destination floor
  updateStatus(status) {
  
    this.status = status;
    
  }
  updateDestination(destinationFloor){
    this.destinationFloor = destinationFloor;
  }
  updateCurrentFloor(floor){
    this.currentFloor = floor;
  }

  // Method to check if the elevator is available
  isAvailable() {
   
    //return this.status === 'idle' || (this.status === 'moving_up' && this.destinationFloor > this.currentFloor) || (this.status === 'moving_down' && this.destinationFloor < this.currentFloor);
    return this.status === 'idle';
  }


  queueFloor(floor){
    this.queue.push(floor);
  }

  getNextQueuedFloor(){
    return this.queue.shift();
  }
  //Simulate the movement of elevator, using a fixed delay.
  //Delay is the time it takes for the elevator to move
  moveToNextFloor (){
    const nextFloor = this.getNextQueuedFloor();
    if(nextFloor !==undefined){
      if(nextFloor < this.currentFloor){
        this.updateStatus('moving_down');
        this.updateDestination(nextFloor);
        this.move();
      }
      else if(nextFloor > this.currentFloor){
        this.updateStatus('moving_up');
        this.updateDestination(nextFloor);
        this.move();
      }
    }
    
    
  }
  move(){
    setTimeout(()=>{
      this.currentFloor = this.destinationFloor;
      this.status = 'idle';
      this.destinationFloor = null;
      this.moveToNextFloor();
    }, 30000);
  }

}

module.exports = Elevator;