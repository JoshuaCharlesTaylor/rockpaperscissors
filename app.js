
var rock = document.getElementById("rock").addEventListener("click", selectrock);
var paper = document.getElementById("paper").addEventListener("click", selectpaper);
var scissors = document.getElementById("scissors").addEventListener("click", selectscissors);

var rockClick = false;
var paperClick = false;
var scissorClick = false;

var computer = Math.floor(Math.random() * 3) + 1;
//1=rock,2=paper,3=scissors

var win = document.getElementById("win");
var lose = document.getElementById("lose");
var tie = document.getElementById("ties");

var tieTally = 0;
var loseTally = 0;
var winTally = 0;

function selectrock() {
    rockClick = true;
    if (rockClick = true){
        console.log ("clicked");
        console.log (computer);
        if (computer == 1){
            console.log ("tie");
            tieTally++;
            tie.innerHTML = "Ties = " + tieTally;
        }
        if (computer == 2){
            console.log ("lose");
            loseTally++;
            lose.innerHTML = "Losses = " + loseTally;
        }
        if (computer == 3){
            console.log ("win");
            winTally++;
            win.innerHTML = "Wins = " + winTally;
        }
        rockClick = false;
        computer = Math.floor(Math.random() * 3) + 1;
    }
}

function selectpaper() {
    paperClick = true;
    if (paperClick = true) {
        console.log ("clicked");
        console.log (computer);
        if (computer == 1){
            console.log ("win");
            winTally++;
            win.innerHTML = "Wins = " + winTally;
        }
        if (computer == 2){
            console.log ("tie");
            tieTally++;
            tie.innerHTML = "Ties = " + tieTally;
        }
        if (computer == 3){
            console.log ("lose");
            loseTally++;
            lose.innerHTML = "Losses = " + loseTally;
        }
        paperClick = false;
        computer = Math.floor(Math.random() * 3) + 1;
    }
}

function selectscissors() {
    scissorClick = true;
    if (scissorClick = true) {
        console.log ("clicked");
        console.log (computer);
        if (computer == 1){
            console.log ("lose");
            loseTally++;
            lose.innerHTML = "Losses = " + loseTally;
        }
        if (computer == 2){
            console.log ("win");
            winTally++;
            win.innerHTML = "Wins = " + winTally;
        }
        if (computer == 3){
            console.log ("tie");
            tieTally++;
            tie.innerHTML = "Ties = " + tieTally;
        }
        scissorClick = false;
        computer = Math.floor(Math.random() * 3) + 1;
    }
}