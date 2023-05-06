let crime, culprit, witnesses;
let attempts = 3;

function getCase() {
    const crimes = ["data theft", "identity theft", "AI kidnapping", "cryptocurrency heist", "digital art forgery"];
    const suspects = ["John", "Sarah", "Mike", "Lucy", "Alice", "Tom", "Rachel", "Victor", "Eva", "Daniel"];
    crime = crimes[Math.floor(Math.random() * crimes.length)];
    culprit = suspects[Math.floor(Math.random() * suspects.length)];
    witnesses = [];
    for (let i = 0; i < 3; i++) {
        let witness;
        do {
            witness = suspects[Math.floor(Math.random() * suspects.length)];
        } while (witness === culprit || witnesses.includes(witness));
        witnesses.push(witness);
    }
}

function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("game-description").style.display = "none";
    document.getElementById("game").style.display = "block";
    getCase();
    document.getElementById("crime").textContent = `A new case has come in: ${crime}.`;
    document.getElementById("witnesses").textContent = `Witnesses: ${witnesses.join(", ")}`;
}

function submitGuess() {
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.trim();
    const resultElement = document.getElementById("result");

    if (guess === culprit) {
        resultElement.textContent = `Congratulations! ${culprit} is indeed the perpetrator of the ${crime}. Case closed!`;
        guessInput.disabled = true;
    } else {
        attempts--;
        if (attempts > 0) {
            resultElement.textContent = `${guess} is not the culprit. You have ${attempts} attempts left.`;
        } else {
            resultElement.textContent = `You've run out of attempts. The real culprit was ${culprit}. Better luck next time!`;
            guessInput.disabled = true;
        }
    }
}

// Adding an event listener to the "start-button"
document.getElementById("start-button").addEventListener("click", startGame);
