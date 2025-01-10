let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let boxcount = 0;
document.getElementById('btn').addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guessInput').value);
    const lock = document.getElementById('lock');
    if (guess === randomNumber) {
        boxcount++;
        lock.src = 'https://www.antiquebox.org/wp-content/uploads/2021/10/antique-dressing-case-03-700x438.jpg';

        display(`Congratulations! You opened Box ${boxcount}`);
        randomNumber = Math.floor(Math.random() * 100) + 1; 
        attempts = 10; 
        setTimeout(() => {
            lock.src = 'locked.jpg';
            display("Guess the number to open Box "+boxcount + 1);
            document.getElementById('guessInput').value = ''; 
        }, 5000);
        if (boxcount === 5) {
            display("Congratulations! You won the game!");
            document.getElementById('btn').disabled = true;
            document.getElementById('guessInput').disabled = true;
        }
    } else if (guess < randomNumber) {
        display('Number is too Low! Try a higher number.');
    } else {
        display('Number is too High! Try a lower number.');
    }
    attempts--;
    if (attempts === 0) {
        display('Game Over! Try Again.');
        document.getElementById('btn').disabled = true;
        document.getElementById('guessInput').disabled = true;
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}