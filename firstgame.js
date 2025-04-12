
let boxes=document.querySelectorAll(".box");
let btn1=document.querySelector(".btn1");
let btn2 =document.querySelector(".btn2");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");
let turnO= true;
const winpattrens =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msg.innerText="";
    
}





boxes.forEach ((box)=>{
   box.addEventListener("click",()=>{
    if(box.innerText !="")
        return;
    console.log("box was clicked");
    if(turnO){
        box.innerText="O"
        turnO=false;
    } else {
          box.innerText=" X";
          turnO=true

    }
    box.diabled=true;
    
    checkWinner();
   });
});


const diableboxes =()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



const showWinner = (winner)=>{
    msg.innerText=`WINNER IS ${winner}`;
    boxes.forEach((box)=>box.disabled = true);
       return;
   diableboxes() ;
};




const checkWinner=()=>{
    for(let pattren of winpattrens){
        let pos1val = boxes[pattren[0]].innerText;
        let pos2val = boxes[pattren[1]].innerText;
        let pos3val = boxes[pattren[2]].innerText;
         
        if (pos1val !="" && pos2val != "" && pos3val != "" ){
            if ( pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

btn2.addEventListener("click",resetGame);
btn1.addEventListener("click",resetGame)