let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll('.choice');
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");
const drawGame=()=>{
    console.log("Draw");
    msg.innerText="Its a Draw Play Again";
    msg.style.backgroundColor="white";
    msg.style.color="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You Wins , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lose ${compChoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const genCompChoice=()=>{
    //rain fire umbrella
    const options=['rain','fire','umbrella'];
    const randomIdx=Math.floor(Math.random()*3) ;// trick to gen numbs between 1 to 2
    return options[randomIdx];
}
const playGame=(userChoice)=>{
    console.log("Choice of User",userChoice);
    const compChoice=genCompChoice();
    console.log("Choice of Computer",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rain"){
            //fire umbrella
            userWin=compChoice==="fire"? true :false;
        }else if(userChoice==="fire"){
            // rain umb
            userWin=compChoice==="rain"?false :true;

        }else{
            // user umb
            //rain fire 
            userWin=compChoice==="rain"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{   
        const userChoice=choice.getAttribute('id');
    //    console.log("Choice was clicked !",userChoice);
        playGame(userChoice);
    });
});
reset.addEventListener("click",()=>{
userScore=0;
userScorePara.innerText=userScore;
compScore=0;
compScorePara.innerText=compScore;
msg.innerText="Play Your Move";
msg.style.backgroundColor="white";
msg.style.color="black";
});
