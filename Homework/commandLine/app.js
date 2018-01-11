// Step 9: at random times, print a taunt for the user. You'll have to cancel the taunt when the user gets it right, otherwise the process will never exit!
// Step 11: whenever the user enters a valid guess, reschedule the taunt. You don't want to bother the user if he's guessing quickly enough!
// Step 14: before prompting the user for their name at the beginning, load the previous high scores, and display them to the user. Note that winning from fewer guesses is better than winning from more guesses, so the entries with the fewer number of guesses should be higher on the highscore table than the entries with higher number of guesses.



let readline = require('readline');
let fs = require('fs');
let rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });
let guesses = 0;
const randomNumber = Math.floor(Math.random() * 100);
let stdin = process.openStdin();
let cheat = Math.sqrt((randomNumber + 38 - 15) / 66);
let player = {
    name: "",
    guesses: guesses
}
let scores;

console.log("This is the generated number: ",  randomNumber);
console.log("welcome, let's play a game. guess a number")


readHighScores();

// ===============
// PROMPT USER FOR NAME AND FIRST INPUT
// ===============

rl.question("What is your name?", (answer) => {
    player.name = answer;

    rl.setPrompt(`Welcome  ${answer}, let's play a game. Guess a number or say ('exit', 'q', or 'quit' to leave). If you want a cheat code, type 'cheat'. If you cheat you get 50 guesses added to your score!`);

    rl.prompt();

    rl.on("line", function(guess) {
        validate(guess);
    })
});


function guessNumber() {
    rl.question("What is your next guess?", (answer) => {
        validate(answer);
    });
};





// ==================
// CHECKING WHETHER USER IMPUT MATCHES RANDOM NUMBER
// ==================

function validate(num) {
    if(num && !isNaN(parseInt(num))) {
        ++ guesses
        player.guesses = guesses;
        console.log("This is the number of guesses you've made so far: ", guesses);
    }


    if(isNaN(parseInt(num))) {
        if(num === "q" || num === "quit" || num === "exit") {
            console.log("ok bai, the number was " + randomNumber);
            rl.close();
        }

        if(num === "cheat") {
            console.log("Here's a hint: if you raise " + cheat + " to the second power, then multiply it by 66, subtract 38 and add 15 you will get the number");
            guesses += 50;
            guessNumber();
        }

        if(num !== "cheat") {
            console.log("pls read the instructions k thx and fuck you");
            guessNumber();
        }
    }

    if (parseInt(num) === randomNumber) {
        console.log("You are correct, and it took you " + guesses + " tries!");
        updateScores();
        setTimeout(
            function close() {
                rl.close()}
            , 1000);
    }

    if (parseInt(num) > randomNumber) {
        if(parseInt(num) <= randomNumber + 10) {
            console.log("You are within 10 of the actual number.");
        }
        console.log("Your guess is too high");
        guessNumber();
    }

    if (parseInt(num) < randomNumber) {
        if(parseInt(num) >= randomNumber - 10) {
            console.log("You are within 10 of the actual number.");
        }
        console.log("Your guess is too low!");
        guessNumber();
    }


}


rl.on("close", function() {
    console.log("%s made %j guesses", player.name, player.guesses);
    process.exit();
})



// ======================
// PARSING JSON - UPDATING AND WRITING HIGH updateHighScores
// ======================




function readHighScores() {
    fs.readFile('./parsed.json', function (err, res) {
        try {
          scores = JSON.parse(res);
        } catch (err) {
          scores = {};
        }


        for(let i = 0; i < Object.keys(scores).length; i++) {
            let highScores = [];
            let score = scores[Object.keys(scores)[i]].guesses;
            // console.log(scores[Object.keys(scores)[i]].guesses);
            console.log(Object.keys(scores)[i]);
            // let previousScore = scores[Object.keys(scores)[j]].guesses;
            // console.log(highScores);
            let scoresAsArray = Object.keys(scores).map((name) => {
                scores[name];
            })
        }
    })
}




function updateScores() {
    if (!scores[player.name]) {
      console.log("user not found, creating new user")
      scores[player.name] = {
        name: player.name,
        guesses: player.guesses
      }
    }
    const writeableData = JSON.stringify(scores);

      fs.writeFile('./parsed.json', writeableData, (err) => {
        console.log("updated high scores and saved:", scores);
      })
}






// =================
// GENERATE RANDOM TAUNTS AND TAUNT USER
// =================


let taunts = [
    "hehe you suck at this",
    "Did a cockroach teach you math?",
    "What are you, a potato?",
    "Go back to first grade!",
    "Welp, better luck in hell!"
]



// function randomTaunt() {
//     let taunt = Math.floor(Math.random() * 5);
//     console.log(taunts[taunt]);
// }

// randomTaunt();


