
      // Get the buttons
      const rockRadio = document.getElementById("rock");
      const paperRadio = document.getElementById("paper");
      const scissorsRadio = document.getElementById("scissors");

      // Get the spans
     // const userOptionSpan = document.getElementById("user-option");
     // const computerOptionSpan = document.getElementById("computer-option");
      const resultSpan = document.getElementById("result");
      // Define the options
      const options = ["Rock", "Paper", "Scissors"];
      // Add click events to the buttons
      rockRadio.addEventListener("change", function() {
        playGame(options[0]);
      });
      paperRadio.addEventListener("change", function() {
       playGame(options[1]);
      });

      scissorsRadio.addEventListener("change", function() {
        playGame(options[2]); 
      });

      // Play the game function
      function playGame(userOption) {
        // Get the computer option
        // Math.floor() rounds a number DOWN to the nearest integer      
        // Math.random() returns a random number 
        // Math.random() used with Math.floor() can be used to return random integers         
        const computerOption = Math.floor(Math.random() * options.length);
        // check the radio Btm for comuter side 
        document.getElementById(`${computerOption}`).checked= true;
        // show up the result 
        setTimeout(
          function(){
            resultSpan.style.cssText = " width: 40%; font-size: 5rem;"
             },200 )
              // hide the hands and the result 
        setTimeout(
          function(){
          paperRadio.checked= false
          rockRadio.checked= false 
          scissorsRadio.checked= false  
          document.getElementById(`${computerOption}`).checked= false 
          resultSpan.style.cssText = " width: 0%; font-size: 0px;"
                 } ,3000 )
        // Set the user option
       // userOptionSpan.innerHTML = userOption;

        // Set the computer option
        //computerOptionSpan.innerHTML = computerOption;

        // Compare the options
        // A draw
        if (userOption === options[computerOption]) {
          resultSpan.innerHTML = "It is a tie!";
        }
        // Rock Vs Scissors
        else if (userOption === "Rock" && options[computerOption] === "Scissors") {
          resultSpan.innerHTML = "You win!";
        }
        // Paper Vs Rock
        else if (userOption === "Paper" && options[computerOption] === "Rock") {
          resultSpan.innerHTML = "You win!";
        }
        // Scissors Vs Paper
        else if (userOption === "Scissors" && options[computerOption] === "Paper") {
          resultSpan.innerHTML = "You win!";
        }
        // Otherwise
        else {
          resultSpan.innerHTML = "You lose!";
        }
       
    }
