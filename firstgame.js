let boxes = document.querySelectorAll(".box");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset function
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.innerText = "";
    boxes.forEach((box) => {
        box.style.backgroundColor = "rgb(237, 145, 255)"; // original color
    });
};

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Enable all boxes
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Show winner
const showWinner = (winner) => {
    msg.innerText = `WINNER IS ${winner};`
    disableBoxes();

    // Highlight winning pattern
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText === winner &&
            boxes[b].innerText === winner &&
            boxes[c].innerText === winner
        ) {
            boxes[a].style.backgroundColor = "#90ee90";
            boxes[b].style.backgroundColor = "#90ee90";
            boxes[c].style.backgroundColor = "#90ee90";
        }
    }
};

// Check for winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

// Button event listeners
btn1.addEventListener("click", resetGame);
btn2.addEventListener("click", resetGame);
