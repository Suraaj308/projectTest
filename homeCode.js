const a = ['R', 'P', 'S'];
let pScore = 0;
let cScore = 0;
let reStat;

window.onload = function () {
    pScore = localStorage.getItem("pScore") ? parseInt(localStorage.getItem("pScore")) : 0;
    cScore = localStorage.getItem("cScore") ? parseInt(localStorage.getItem("cScore")) : 0;

    document.getElementById('playerScore').textContent = pScore;
    document.getElementById('computerScore').textContent = cScore;
}

function showRules() {
    document.getElementById("gameRules").style.display = "block";
}

function closeRules() {
    document.getElementById("gameRules").style.display = "none";
}

function startGame(pChoice) {
    if (pChoice) {

        document.getElementById("opRock").style.display = "none";
        document.getElementById("opPaper").style.display = "none";
        document.getElementById("opScissors").style.display = "none";
        document.getElementById("reStartButton").style.display = "block";

        let cChoice = a[Math.floor(Math.random() * a.length)];

        document.getElementById('playerChoice').textContent = pChoice;
        document.getElementById('computerChoice').textContent = cChoice;

        if (pChoice === cChoice) {
            document.getElementById("tieRe").style.display = "block";
        } else {
            if ((pChoice === 'R' && cChoice === 'S') || (pChoice === 'P' && cChoice === 'R') || (pChoice === 'S' && cChoice === 'P')) {
                pScore += 1;
                reStat = 'W';
                document.getElementById("winRe").style.display = "block";
                document.getElementById("nextButton").style.display = "block";
            } else {
                cScore += 1;
                document.getElementById("loseRe").style.display = "block";
            }
        }

        localStorage.setItem("pScore", pScore);
        localStorage.setItem("cScore", cScore);

        document.getElementById('playerScore').innerHTML = localStorage.getItem("pScore");
        document.getElementById('computerScore').innerHTML = localStorage.getItem("cScore");
        document.getElementById('reStat').textContent = reStat;

        return;
    }
}

function reStartGame() {
    document.getElementById("reStartButton").style.display = "none";
    document.getElementById("opRock").style.display = "block";
    document.getElementById("opPaper").style.display = "block";
    document.getElementById("opScissors").style.display = "block";
    document.getElementById("winRe").style.display = "none";
    document.getElementById("loseRe").style.display = "none";
    document.getElementById("tieRe").style.display = "none";
}
