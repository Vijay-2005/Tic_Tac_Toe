let boxes = document.querySelectorAll(".box");  // when we use class we use the syntax .box not #box we used query select 
//all which we want to access by .box 

let resetBtn = document.querySelector(".reset_button");
let winnerPopUp = document.querySelector("#winnerPopUp");

let turnO = true ;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO ){
            box.innerText = "O";
            turnO = false ;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled= true ;
        checkWinner();    
    });
    
});


const checkDraw = () => {
    let filledBoxes = Array.from(boxes).filter(box => box.innerText !== '');
    if (filledBoxes.length === 9) {
        winnerPopUp.innerText = "It's a Draw!";
        winnerPopUp.style.display = "block";
        disableBoxes();
    }
}



const checkWinner = () => {
    for ( let pattern   of winPattern  ){
        // console.log(pattern[0] ,pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //      boxes[pattern[1]].innerText,
        //      boxes[pattern[2]].innerText);

             let pos1Val = boxes[pattern[0]].innerText;
             let pos2Val = boxes[pattern[1]].innerText;
             let pos3Val = boxes[pattern[2]].innerText;

             if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val  && pos2Val === pos3Val){
                    
                    
                    console.log(  pos1Val , "player won 🎉");
                    disableBoxes();
                    winnerPopUp.innerText =  pos1Val + " player won 🎉";
                    winnerPopUp.style.display = "block";
                    resetBtn.innerText = "New game";
                    box.disabled= true;
                    
                    
                }else{
                    checkDraw();
                    // resetBtn.innerText = "New game";
                }
             }


    }
}


const disableBoxes  = () =>{
    for(let box of boxes ){
        box.disabled = true ;
    }
}




resetBtn.addEventListener('click' ,function(){
   
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled= false ;
        winnerPopUp.style.display = "none";
        resetBtn.innerText = "Reset Game";
       
    });
   
})  






