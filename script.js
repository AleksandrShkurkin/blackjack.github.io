// JavaScript source code

let username = new String();
let usernameTrimmed = new String();
let textButton;
let scoreHuman = 0;
let scoreAIs = 0;
let pointH1;
let pointH2;
let pointAI1;
let pointAI2;
let exitPress = false;
let roundCount = 0;
let humanWin = 0;
let aiWin = 0;
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let cardColor;

let buttonSignIn = document.getElementById("complete");
let buttonRound = document.getElementById("round");
let logOffPromt = document.getElementById("logOff");
let buttonLogOff = document.getElementById("exit");
let buttonYes = document.getElementById("yes");
let buttonNo = document.getElementById("no");
let hum1 = document.getElementById("h1");
let hum2 = document.getElementById("h2");
let ai1 = document.getElementById("ai1");
let ai2 = document.getElementById("ai2");
let scoreH = document.getElementById("scoreH");
let scoreAI = document.getElementById("scoreAI");
let signIn = document.getElementById("signInDiv");
let game = document.getElementById("gameDiv");
let userName = document.getElementById("usernameOut");
let HumanWin = document.getElementById("winH");
let AIWin = document.getElementById("winAI");
let buttonText = document.createTextNode('Start the game');
let humanRounds = document.createTextNode('');
let aiRounds = document.createTextNode('');
let name;
let ballH1 = document.createTextNode('');
let ballH2 = document.createTextNode('');
let ballAI1 = document.createTextNode('');
let ballAI2 = document.createTextNode('');
let scoreHumanOut = document.createTextNode('');
let scoreAIOut = document.createTextNode('');

HumanWin.appendChild(humanRounds);
AIWin.appendChild(aiRounds);

buttonSignIn.addEventListener('click', () => {
    username = document.signIn.username.value;
    usernameTrimmed = username.trim();
    if (usernameTrimmed.length != 0 && usernameTrimmed.length < 30) {
        name = document.createTextNode(usernameTrimmed);
        userName.appendChild(name);
        buttonRound.appendChild(buttonText);
        signIn.style.display = 'none';
        game.style.display = 'flex';
    }
    else {
        if (usernameTrimmed.length >= 30) {
            alert("Please, use shorter username");
        }
        else {
            alert("Username empty");
        }
    }
});

buttonLogOff.addEventListener('click', () => {
    if (!exitPress) {
        logOffPromt.style.display = 'flex';
        exitPress = true;
    }
    else {
        logOffPromt.style.display = 'none';
        exitPress = false;
    }
});

buttonNo.addEventListener('click', () => {
    logOffPromt.style.display = 'none';
    exitPress = 0;
});

buttonYes.addEventListener('click', () => {
    document.signIn.username.value = '';
    buttonText.remove();
    name.remove();
    logOffPromt.style.display = 'none';
    signIn.style.display = 'flex';
    game.style.display = 'none';
    exitPress = 0;
    roundCount = 0;
    humanWin = 0;
    aiWin = 0;
    ballH1.remove();
    ballH2.remove();
    ballAI1.remove();
    ballAI2.remove();
    scoreHumanOut.remove();
    scoreAIOut.remove();
    humanRounds.textContent = '';
    aiRounds.textContent = '';
});

buttonRound.addEventListener('click', () => {
    if (buttonText.textContent == 'Start new game') {
        ballH1.remove();
        ballH2.remove();
        ballAI1.remove();
        ballAI2.remove();
        scoreHumanOut.remove();
        scoreAIOut.remove();
    }
    roundCount++;
    buttonText.textContent = 'Next round';
    if (roundCount > 1) {
        ballH1.remove();
        ballH2.remove();
        ballAI1.remove();
        ballAI2.remove();
        scoreHumanOut.remove();
        scoreAIOut.remove();
    }
    pointH1 = Math.floor(Math.random() * (12 + 1));
    pointH2 = Math.floor(Math.random() * (12 + 1));
    pointAI1 = Math.floor(Math.random() * (12 + 1));
    pointAI2 = Math.floor(Math.random() * (12 + 1));
    ballH1.textContent = cards[pointH1];
    cardColor = Math.floor(Math.random() * (1 + 1));
    if (cardColor == 0) {
        hum1.style.color = 'red';
    }
    else {
        hum1.style.color = 'black';
    }
    ballH2.textContent = cards[pointH2];
    cardColor = Math.floor(Math.random() * (1 + 1));
    if (cardColor == 0) {
        hum2.style.color = 'red';
    }
    else {
        hum2.style.color = 'black';
    }
    ballAI1.textContent = cards[pointAI1];
    cardColor = Math.floor(Math.random() * (1 + 1));
    if (cardColor == 0) {
        ai1.style.color = 'red';
    }
    else {
        ai1.style.color = 'black';
    }
    ballAI2.textContent = cards[pointAI2];
    cardColor = Math.floor(Math.random() * (1 + 1));
    if (cardColor == 0) {
        ai2.style.color = 'red';
    }
    else {
        ai2.style.color = 'black';
    }
    hum1.appendChild(ballH1);
    hum2.appendChild(ballH2);
    ai1.appendChild(ballAI1);
    ai2.appendChild(ballAI2);
    if (isNaN(cards[pointH1]) == false) {
        pointH1 += 2;
    }
    else {
        if (cards[pointH1] == "A") {
            if (cards[pointH2] == "A") {
                pointH1 = 1;
            }
            else {
                pointH1 = 11;
            }
        }
        else {
            pointH1 = 10;
        }
    }
    if (isNaN(cards[pointH2]) == false) {
        pointH2 += 2;
    }
    else {
        if (cards[pointH2] == "A") {
            if (cards[pointH1] == "A") {
                pointH2 = 1;
            }
            else {
                pointH2 = 11;
            }
        }
        else {
            pointH2 = 10;
        }
    }
    if (isNaN(cards[pointAI1]) == false) {
        pointAI1 += 2;
    }
    else {
        if (cards[pointAI1] == "A") {
            if (cards[pointAI2] == "A") {
                pointAI1 = 1;
            }
            else {
                pointAI1 = 11;
            }
        }
        else {
            pointAI1 = 10;
        }
    }
    if (isNaN(cards[pointAI2]) == false) {
        pointAI2 += 2;
    }
    else {
        if (cards[pointAI2] == "A") {
            if (cards[pointAI1] == "A") {
                pointAI2 = 1;
            }
            else {
                pointAI2 = 11;
            }
        }
        else {
            pointAI2 = 10;
        }
    }
    scoreHuman = pointH1 + pointH2;
    scoreAIs = pointAI1 + pointAI2;
    scoreHumanOut.textContent = 'Score: ' + scoreHuman;
    scoreAIOut.textContent = 'Score: ' + scoreAIs;
    scoreH.appendChild(scoreHumanOut);
    scoreAI.appendChild(scoreAIOut);

    if (scoreHuman > scoreAIs) {
        humanWin++;
        humanRounds.textContent = 'Wins: ' + humanWin + ' out of 3';
        aiRounds.textContent = 'Wins: ' + aiWin + ' out of 3';
    }
    else if (scoreHuman < scoreAIs) {
        aiWin++;
        humanRounds.textContent = 'Wins: ' + humanWin + ' out of 3';
        aiRounds.textContent = 'Wins: ' + aiWin + ' out of 3';
    }
    else {
        humanRounds.textContent = 'Wins: ' + humanWin + ' out of 3 (tie)';
        aiRounds.textContent = 'Wins: ' + aiWin + ' out of 3 (tie)';
    }

    if (humanWin == 3 || aiWin == 3) {
        if (humanWin == 3) {
            humanRounds.textContent = 'You win';
            aiRounds.textContent = 'You lost';
        }
        else {
            humanRounds.textContent = 'You lost';
            aiRounds.textContent = 'You win';
        }
        buttonText.textContent = 'Start new game';
        roundCount = 0;
        humanWin = 0;
        aiWin = 0;
    }

});
//make sign in and buttonRound responsive