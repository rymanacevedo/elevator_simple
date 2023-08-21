class Elevator {
  FLOOR_TIME = 10;
  constructor(startFloor) {
    this.currentFloor = startFloor;
    this.travelTime = 0;
  }

  goTo(floor) {
    this.travelTime += Math.abs(floor - this.currentFloor) * this.FLOOR_TIME;
    this.currentFloor = floor;
  }

}
const trip = (start, ...floors) => {
  const elevator = new Elevator(start);
  const visited = [start];
  for (const floor of floors) {
    elevator.goTo(floor);
    visited.push(floor);
  }

  return {
    time: elevator.travelTime,
    visited
  }
}


const input = prompt('Enter the elevator start and floors to visit seperated by commas (e.g. 12,2,9,1,32):');

const floors = input.split(',').map(Number);
const startFloor = floors[0];
const result = trip(startFloor, ...floors.slice(1));
console.log(`Total Travel Time: ${result.time} seconds`);
console.log("Floors visited in order:", result.visited.join(','));