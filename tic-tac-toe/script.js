let boxes = document.querySelectorAll(".box");
let resetB = document.querySelector(".reset-btn");

let turn0 = true;
const winPatern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let WinShow = document.querySelector(".winner");

boxes.forEach((box1) => {
    box1.addEventListener("click",()=>{
        console.log("Jay shree RAM");
        if (turn0) {
            box1.innerText = "O";
            turn0 = false;
        } else {
            box1.innerText = "X";
            turn0 = true;
        }
        box1.disabled = true;

        checkWin();
    });

    //Reset button
    resetB.addEventListener("click",()=>{
        box1.disabled = false;
        box1.innerText = "";
        WinShow.innerText = "";
        WinShow.classList.add("hide");
    })

});

const DisbleBox = ()=>{
    for (const box of boxes) {
        box.disabled = true;
    }
}

const EanbleBox = ()=>{
    for (const box of boxes) {
        box.disabled = false;
        boxes.innerText ="";
    }
}

// showing winner player
const showWinner = (winner) => {
    WinShow.innerText = `Winner is ${winner}`;
    WinShow.classList.remove("hide");
    DisbleBox();
}

function checkWin(){
    for (const patterm of winPatern) {
            let pos1 = boxes[patterm[0]].innerText;
            let pos2 = boxes[patterm[1]].innerText;
            let pos3 = boxes[patterm[2]].innerText;
            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    console.log("winner " + pos1);
                    // bop.disabled = true;
                    // return ("player " + pos1);
                    showWinner(pos1);
                }
            }
    }
}

