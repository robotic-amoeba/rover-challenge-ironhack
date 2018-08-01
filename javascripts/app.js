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

    case "E":
      rover.direction = "N";
      break;

    case "S":
      rover.direction = "E";
      break;
    
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("Current position: " + rover.direction)
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
  console.log("Current orientation: " + rover.direction)
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    
    case "N":
      if (rover.y === 0) {
      console.error("Can not move to negative coordinates");
      break;
      } else {
      rover.y -= 1;
      break;
      }

    case "E":
      if (rover.x === 10) {
      console.error("Can not move beyond the limit of the map (x:10, y:10)");
      break;
      } else {
      rover.x += 1;
      break;
      }

    case "S":
      if (rover.y === 10) {
      console.error("Can not move beyond the limit of the map (x:10, y:10)");
      break;
      }
      rover.y += 1;
      break;

    case "W":
      if (rover.x === 0) {
        console.error("Can not move to negative coordinates");
        break;
      } else {
      rover.x -= 1;
      break;
      }
  }
  console.log("Current position: X=" + rover.x + " Y=" + rover.y);
}

function moveBackwards(rover) {
  console.log("moveBackwards was called");
  switch (rover.direction) {
    
    case "N":
      if (rover.y === 10) {
      console.error("Can not move beyond the limit of the map (x:10, y:10)");
      break;
      } else {
      rover.y += 1;
      break;
      }

    case "E":
      if (rover.x === 0) {
      console.error("Can not move to negative coordinates");
      break;
      } else {
      rover.x -= 1;
      break;
      }

    case "S":
      if (rover.y === 0) {
      console.error("Can not move to negative coordinates");
      break;
      }
      rover.y -= 1;
      break;

    case "W":
      if (rover.x === 10) {
        console.error("Can not move to negative coordinates");
        break;
      } else {
      rover.x += 1;
      break;
      }
  }
  console.log("Current position: X=" + rover.x + " Y=" + rover.y);
}

function movementSequence(sequence) {
  for (let elm of sequence) {
    switch (elm) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
    }
  }   
  rover.travelLog.push([rover.x, rover.y]);
  //Travel Log
  console.log("Travel Log:");
  for (let elm of rover.travelLog) {
    console.log("[" + elm + "] ");
  }
  return "ready to go again"
}
