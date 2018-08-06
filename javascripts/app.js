//console help for the user
console.log("How to play:\n" +
"You can have up to 3 rovers (rover1, rover2 and rover3) moving around in the map. \n" +
"There are a few obstacles in the map marcked with 'X' symbols. \n" +
"paintMap(map): Paints the map and the rovers that had been deployed (moved). \n" + 
"movementSequence(rover1, 'rlfb'): turns the rover1 'right, left' and then moves 'forward, backwards'. \n" +
"Use painMap(map) after moving the rovers to get a new updted map."
);

// Rover Object Goes Here
// ======================
var rover1 = {
  id: "r1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var rover2 = {
  id: "r2",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var rover3 = {
  id: "r3",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================

let map = [//X= 0    1    2    3    4    5    6    7    8    9
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //Y=0
              ["X", "X", "O", "O", "O", "O", "O", "O", "X", "O"], //Y=1
              ["O", "X", "O", "O", "O", "O", "O", "O", "O", "O"], //Y=2
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"], //Y=3
              ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O"], //Y=4
              ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O"], //Y=5
              ["O", "O", "O", "X", "X", "O", "O", "O", "O", "O"], //Y=6
              ["O", "X", "O", "O", "O", "O", "O", "O", "O", "O"], //Y=7
              ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O"], //Y=8
              ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"]  //Y=9
];

let numberMap = 0;
function paintMap(map) {
  let count = 0;
  numberMap += 1;
  document.write ("Map " + numberMap + "<br>");
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
      else {
        document.write("     " + tile + "       ");
      }
    }
  }
  document.write("<hr>")
};

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
};


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
};

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    
    case "N":
      if (rover.y === 0) {    //checks map limits
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.y - 1][rover.x] !== "O") {   //checks if the tile is available
        console.error("There's an obstacle or another rover in the way! Position: [" + rover.x + ", " + (rover.y - 1) + "]");
        break;
      } else {    //actually moves the rover if everything is ok and leaves the map tile vacant
        map[rover.y][rover.x] = "O";
        rover.y -= 1;
        break;
      }

    case "E":
      if (rover.x === 9) {
        console.error("Can not move beyond the limit of the map (x:10, y:10)");
        break;
      } else if (map[rover.y][rover.x + 1] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + (rover.x + 1) + ", " + rover.y + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.x += 1;
        break;
      }

    case "S":
      if (rover.y === 9) {
        console.error("Can not move beyond the limit of the map (x:10, y:10)");
        break;
      } else if (map[rover.y + 1][rover.x] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + rover.x + ", " + (rover.y + 1) + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.y += 1;
        break;
      }

    case "W":
      if (rover.x === 0) {
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.y][rover.x - 1] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + (rover.x - 1) + ", " + rover.y + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.x -= 1;
        break;
      }
  }
  console.log("Current position: X=" + rover.x + " Y=" + rover.y);
};

function moveBackwards(rover) {
  console.log("moveBackwards was called");
  switch (rover.direction) {
    
    case "N":
      if (rover.y === 9) {
        console.error("Can not move beyond the limit of the map (x:10, y:10)");
        break;
      } else if (map[rover.y + 1][rover.x] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + (rover.x + 1) + ", " + rover.y + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.y += 1;
        break;
      }

    case "E":
      if (rover.x === 0) {
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.y][rover.x - 1] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + (rover.x + 1) + ", " + rover.y + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.x -= 1;
        break;
      }

    case "S":
      if (rover.y === 0) {
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.y - 1][rover.x] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + (rover.x + 1) + ", " + rover.y + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.y -= 1;
        break;
      }

    case "W":
      if (rover.x === 9) {
        console.error("Can not move to negative coordinates");
        break;
      } else if (map[rover.y][rover.x + 1] !== "O") {
        console.error("There's an obstacle or another rover in the way! Position: [" + (rover.x + 1) + ", " + rover.y + "]");
        break;
      } else {
        map[rover.y][rover.x] = "O";
        rover.x += 1;
        break;
      }
  }
  console.log("Current position: X=" + rover.x + " Y=" + rover.y);
};

function movementSequence(rover,  sequence) {

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
  map[rover.y][rover.x] = rover.id;

  return "ready to go again"
};
