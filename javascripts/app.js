// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// ======================

let map = [//Y= 0    1    2    3    4    5    6    7    8    9
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=0
              ["O", "X", "O", "O", "O", "O", "O", "O", "O", "O"], //x=1
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=2
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=3
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=4
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=5
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=6
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=7
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //x=8
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"]  //x=9
]
 
function paintMap(map) {
  let count = 0;
  document.write("<br><br>")
  for (let row of map) {
    for (let tile of row) {
      count += 1;
      if (count >= 11) {
        count=1;
        document.write("<br>");
      }
      if (tile === "O") {
        document.write("     O     ");
      }
      else if (tile === "X") {
        document.write("     X     ");
    
      }
      else if (tile === "R") {
        document.write("     R     ");
      }
    }
  }
}

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
      if (rover.y === 0) {    //checks map limits
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.x][rover.y - 1] === "X") {   //checks obstacles (X values) in map array
        console.error("There's an obstacle in the way! Position: [" + rover.x + ", " + (rover.y - 1) + "]");
        break;
      } else {    //actually moves the rover if everything is ok
        rover.y -= 1;
        break;
      }

    case "E":
      if (rover.x === 9) {
        console.error("Can not move beyond the limit of the map (x:10, y:10)");
        break;
      } else if (map[rover.x + 1][rover.y] === "X") {
        console.error("There's an obstacle in the way! Position: [" + (rover.x + 1) + ", " + rover.y + "]");
        break;
      } else {
        rover.x += 1;
        break;
      }

    case "S":
      if (rover.y === 9) {
        console.error("Can not move beyond the limit of the map (x:10, y:10)");
        break;
      } else if (map[rover.x][rover.y + 1] === "X") {
        console.error("There's an obstacle in the way! Position: [" + rover.x + ", " + (rover.y + 1) + "]");
        break;
      } else {
        rover.y += 1;
        break;
      }

    case "W":
      if (rover.x === 0) {
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.x - 1][rover.y] === "X") {
        console.error("There's an obstacle in the way! Position: [" + (rover.x - 1) + ", " + rover.y + "]");
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
      if (rover.y === 9) {
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
      } else {
        rover.y -= 1;
        break;
      }

    case "W":
      if (rover.x === 9) {
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

  //checks if the sequence is valid before moving the rover 
  for (let elm of sequence) {
    if (elm !== "f" && elm !== "b" && elm !== "r" && elm !== "l") {
      return 'Bad movement sequence. Use f,b,r or l to move forward backwards right or left, like in "ffrlb"'
    } else {continue} 
  }

  //moves the rover    
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

  //Travel Log
  rover.travelLog.push([rover.x, rover.y]);
  console.log("Travel Log:");
  for (let elm of rover.travelLog) {
    console.log("[" + elm + "] ");
  }
  
  //Updates the rover's position in the map
  map[rover.x][rover.y] = "R";

  return "ready to go again"
}
