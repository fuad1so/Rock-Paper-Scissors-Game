// Get the buttons 
const rockRadio = document.getElementById("rock"); 
const paperRadio = document.getElementById("paper"); 
const scissosRadio = document.getElementById("scissos"); 



useroption =  "rock"
arry= [ "rock" , " scissors", "paper" ]



function playGame(){
    const random = Math.random()*3
const computerOption = random.toFixed(0)
document.getElementById(`${computerOption}`).checked = true ;

//computerOption , useroption
}



rockRadio.addEventListener("change",  function(){
    playGame()
    useroption="rock"
    console.log("the value:",arry[0] )
} )

paperRadio.addEventListener("change",  function(){
    playGame()
    useroption="paper"
} )
scissosRadio.addEventListener("change",  function(){
    playGame()
} )

