var userChoice = prompt ("Do you choose rock, paper, or scissors?")
var computerChoice = Math.random();
console.log (computerChoice);

if (0 < computerChoice < .33) {
    greeting ="rock"
}   else if (.34 < computerChoice <.66) {
    greeting = "paper"
}   else {
    greeting = "scissors"
}