// Get the buttons 
const rockRadio = document.getElementById("rock"); 
const paperRadio = document.getElementById("paper"); 
const scissosRadio = document.getElementById("scissors"); 




arry= ["rock" , "paper", "scissors"]



function playGame(userOption)  {
    const random = Math.random()*3
const computerOption = Math.floor(random)
document.getElementById(`${computerOption}`).checked = true;
//computerOption , useroption

 var computerOptionNow = arry[computerOption]


console.log("userOption;",userOption)

if(userOption===computerOptionNow ){
    console.log("it's a tie")
} else if (  userOption=="rock" && computerOptionNow== "scissors"  ) {
console.log(" you win")}
else if (  userOption=="paper" && computerOptionNow== "rock"  ) {
    console.log(" you win")}
else if (  userOption=="scissors" && computerOptionNow== "paper"  ) {
        console.log(" you win")}
        else {
            console.log(" you lost")
        }

} 



rockRadio.addEventListener("change",  function(){
    playGame("rock")
   

} )

paperRadio.addEventListener("change",  function(){
    playGame("paper")
    
} )
scissosRadio.addEventListener("change",  function(){
    playGame("scissors")
   
} )






// function playGame(userOption) {
//     // Get the computer option
//     // Math.floor() rounds a number DOWN to the nearest integer      
//     // Math.random() returns a random number 
//     // Math.random() used with Math.floor() can be used to return random integers         
//     const computerOption = Math.floor(Math.random() * options.length);
//     // check the radio Btm for comuter side 
//     document.getElementById(`${computerOption}`).checked= true;
//     // show up the result 
   
//     // Set the user option
//    // userOptionSpan.innerHTML = userOption;

//     // Set the computer option
//     //computerOptionSpan.innerHTML = computerOption;

//     // Compare the options
//     // A draw
//     if (userOption === options[computerOption]) {
//       resultSpan.innerHTML = "It is a tie!";
//     }
//     // Rock Vs Scissors
//     else if (userOption === "Rock" && options[computerOption] === "Scissors") {
//       resultSpan.innerHTML = "You win!";
//     }
//     // Paper Vs Rock
//     else if (userOption === "Paper" && options[computerOption] === "Rock") {
//       resultSpan.innerHTML = "You win!";
//     }
//     // Scissors Vs Paper
//     else if (userOption === "Scissors" && options[computerOption] === "Paper") {
//       resultSpan.innerHTML = "You win!";
//     }
//     // Otherwise
//     else {
//       resultSpan.innerHTML = "You lose!";
//    }
// }


// setTimeout(
//     function(){
//     paperRadio.checked= false
//     rockRadio.checked= false 
//     scissorsRadio.checked= false  
//     document.getElementById(${computerOption}).checked= false 
//     resultSpan.style.cssText = " width: 0%; font-size: 0px;"
//            } ,3000 )

// setTimeout(
//     function(){
//       resultSpan.style.cssText = " width: 40%; font-size: 5rem;"
//        },200 )
