let v1 = document.getElementById("r");
let v2 = document.getElementById("p");
let v3 = document.getElementById("s");
//Math.random() function to get the number between 1 and 3
let val = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
console.log(val);
// Now we have got the Computer's value.
// We will compare the Users value to Computers value.
// 1 = Rock, 2 = Paper, 3 = Scissors
switch (v1 || v2 || v3) {
  case "rock":
    if (val === 1) {
      console.log("Tie!!!");
    } else if (val === 2) {
      console.log("You loose.");
    } else {
      console.log("You won!!!");
    }
    break;
  case "paper":
    if (val === 1) {
      console.log("You Won!!!");
    } else if (val === 2) {
      console.log("Tie!!!");
    } else {
      console.log("You loose.");
    }
    break;
  case "scissors":
    if (val === 1) {
      console.log("You loose.");
    } else if (val === 2) {
      console.log("You Won!!!");
    } else {
      console.log("Tie!!!");
    }
    break;
}
