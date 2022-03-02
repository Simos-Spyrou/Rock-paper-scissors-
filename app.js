let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const slide_div = document.getElementsByClassName("selectionArea");
const slider = document.getElementById("slider");
var prevPcChoice = null;
var prevUserChoice = null;
var i = 0;

main();

// basic functions
function draw() {
    result_div.innerHTML = "Draw.";
}
function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "Victory!";
    slide_div.background = "#5ea343be";
    
}
function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Defeat...";
}


function game(userChoice) {
    //pc choice
    const choices = ['r', 'p', 's'];
    const selectionIndex = Math.floor(Math.random() * 3);
    const pcChoice = choices[selectionIndex];
    var pcChoiceVar = pcChoice;
    
    //delete old image elements
    if(i>0) {
        var previous_sel_user = document.getElementById("sel"+(i-1)); 
        previous_sel_user.parentElement.removeChild(previous_sel_user);
        var previous_sel_pc = document.getElementById("pc-sel"+(i-1)); 
        previous_sel_pc.parentElement.removeChild(previous_sel_pc);
    }

    //create, place and animate new image element 
    var image = document.createElement("img");
    var pc_image = document.createElement("img");
    
    image.classList.add("selectionImage");
    pc_image.classList.add("selectionImage");

    
    var imageParent = document.getElementById("user-sel");
    var pc_image_Parent = document.getElementById("pc-sel");
    
    image.style.maxHeight = "90%";
    pc_image.style.maxHeight = "90%";
    
    image.id = "sel" + i;
    pc_image.id = "pc-sel" + i;
    
    image.src = userChoice + ".png";
    pc_image.src = pcChoiceVar + ".png";
    
    imageParent.appendChild(image);
    pc_image_Parent.appendChild(pc_image);
    
    setTimeout(() => {image.classList.add("slide-right");}, 10);
    setTimeout(() => {pc_image.classList.add("slide-left");}, 10);
    
    //result evaluation
    switch(userChoice) {
        case('r') : {
            switch(pcChoice) {
                case('r') : draw(); break;
                case('p') : lose(); break;
                case('s') : win(); break;
            }
            break;
        }
        case('p') : {
            switch(choices[selectionIndex]) {
                case('p') : draw(); break;
                case('s') : lose(); break;
                case('r') : win(); break;
            }
            break;
        }
        case('s') : {
            switch(choices[selectionIndex]) {
                case('s') : draw(); break;
                case('r') : lose(); break;
                case('p') : win(); break;
            }
            break;
        }
        
    }
    i++;
}


function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
