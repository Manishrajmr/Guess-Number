let numInput = document.querySelector("[data-guess-num]");
let button = document.querySelector("[data-submit]");

let tryAgain = document.getElementById("try-again");
let attempts = document.getElementById("attempts");

let guessedNum ;
let randomNum;
let count = 0;

generateRandom();
function generateRandom(){
    count = 0;
    randomNum = Math.floor(Math.random()*10 +1);
    console.log(randomNum);
    
}


    numInput.addEventListener('input',(event)=>{
        guessedNum = parseInt(event.target.value);
        tryAgain.innerHTML = "";
        attempts.innerHTML = "";
   })




   
button.addEventListener('click', ()=>{
    


    if(guessedNum === randomNum){
        console.log("Number guessed successfully ...");
        attempts.style.color = "green";
        attempts.innerHTML = "Number guessed successfully ...";
        tryAgain.innerHTML = "";
        
        setTimeout(()=>{
            attempts.innerHTML = "New game";
            attempts.style.color = "red";
            generateRandom();
        },5000)

        // console.log(attempts);
        
    }
    else{

        
        count++;
        console.log("wrong guess");
        tryAgain.innerHTML = `try again! Attempt:  ${count}`;
        
    }

});







// let gussed = false;

// while(!gussed){
//     let GuessedNum = parseInt(prompt("Enter the number"));

//     if(GuessedNum === randomNum){
//         console.log("Number gusses successfully ...");
//         gussed = true;
//     }

//     else{
//         console.log("wrong guess");
//     }
// }