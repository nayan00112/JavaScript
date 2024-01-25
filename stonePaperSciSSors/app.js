let choices = document.querySelectorAll(".choice");
let butonWin = document.querySelector("#start1");
let userPara = document.querySelector("#para1");
let BotPara = document.querySelector("#para2");
let container = document.querySelector(".reset");

let userScore = 0 ;
let BotScore = 0 ;

const ganCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const DrawGame = () => {
    console.log("Draw Game");
    butonWin.innerText = `Game Drawwed `;
}

const ShowScore = (userWin) =>{
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
    }else{
        BotScore++;
        BotPara.innerText = BotScore;
    }
}

const showWin = (userWin,userChoice,CompChoice) => {
    if (userWin) {
        console.log("You Win!!");
        butonWin.innerText = `You Win bot choose ${CompChoice}`;
    } else {
        console.log("You loss");
        butonWin.innerText = `You loss, you choose ${userChoice} and bot choose ${CompChoice}`;
    }
}

const playGame = (userChoice) => {
    console.log("User choice is :", userChoice);
    const CompChoice = ganCompChoice();
    console.log("Computer choice is :", CompChoice);

    if (userChoice === CompChoice) {
        // both same choice
        DrawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            // CompChoice == scissor, paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // CompChoice == scissor, stone
            userWin = CompChoice === "scissors" ? false : true;
        } else {
            // CompChoice == stone, paper
            userWin = CompChoice === "stone" ? false : true;
        }
        showWin(userWin,userChoice,CompChoice);
        ShowScore(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`your choice is : ${userChoice}`);
        playGame(userChoice);
    });
});

const Reset = () =>{
    butonWin.innerText = "Pick Your Choice";
    userPara.innerText = 0;
    BotPara.innerText = 0;
}

container.addEventListener("click",Reset);

