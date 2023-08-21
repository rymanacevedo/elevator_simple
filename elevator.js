class Elevator {
  constructor(startFloor) {
    this.currentFloor = startFloor;
    this.travelTime = 0;
  }

  goTo(floor) {
    this.travelTime += (floor - this.currentFloor) * 10;
    this.currentFloor = floor;
  }

}


const input = prompt('Enter the elevator start and floors to visit seperated by commas (e.g. 12,2,9,1,32):');

const floors = input.split(',').map(Number);
const startFllor = floor[0];