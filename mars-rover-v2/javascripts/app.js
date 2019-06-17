// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  } 
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  var initialPos = [rover.x,rover.y];
  if (rover.direction == "N" && rover.y != 0) {
    rover.y--;
  } 
  else if (rover.direction == "E" && rover.x != 9) {
    rover.x++;
  } 
  else if (rover.direction == "S" && rover.y != 9) {
    rover.y++;
  }
  else if (rover.direction == "W" && rover.x != 0) {
    rover.x--;
  } 
  else{
  console.log("Rover at boundary!");
  }
  rover.travelLog.push(`(${initialPos})`);
  console.log(`New coordinates are (${rover.x},${rover.y})`);
  console.log(`You are now facing ${rover.direction}`);
}

function moveBackward(rover){
  console.log("moveBackward was called")
  var initialPos = [rover.x,rover.y];
  if (rover.direction == "N" && rover.y != 9) {
    rover.y++;
  } 
  else if (rover.direction == "E" && rover.x != 0) {
    rover.x--;
  } 
  else if (rover.direction == "S" && rover.y != 0) {
    rover.y--;
  }
  else if (rover.direction == "W" && rover.x != 9) {
    rover.x++;
  } 
  else{
  console.log("Rover at boundary!");
  }
  rover.travelLog.push(`(${initialPos})`);
  console.log(`New coordinates are (${rover.x},${rover.y})`);
  console.log(`You are now facing ${rover.direction}`);
}

var input = "rffrfflfrff"; //sample input

//main function
function runCommand(input){
  for(i=0; i<input.length; i++){
    switch(input[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f": 
        moveForward(rover);
        break;
      case "b": 
        moveBackward(rover);
        break;
      default:
        console.log("Invalid input");
      }
    }
      console.log(`TravelLog is ${rover.travelLog}`);
      console.log(`Final stop is (${rover.x},${rover.y})`);
  }
