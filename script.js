const colorSquare = document.getElementById('colorSquare');  
const scoreDisplay = document.getElementById('score');  
const startBtn = document.getElementById('startBtn');  
const timerDisplay = document.getElementById('time');  
const messageDisplay = document.getElementById('message');  

let score = 0;  
let timeLeft = 10;  
let interval;  

function getRandomColor() {  
    const letters = '0123456789ABCDEF';  
    let color = '#';  
    for (let i = 0; i < 6; i++) {  
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;  
}  

function startGame() {  
    score = 0;  
    timeLeft = 10;  
    scoreDisplay.textContent = score;  
    timerDisplay.textContent = timeLeft;  
    messageDisplay.textContent = '';  
    
    changeColor();  
    
    interval = setInterval(() => {  
        timeLeft--;  
        timerDisplay.textContent = timeLeft;  
        if (timeLeft <= 0) {  
            clearInterval(interval);  
            messageDisplay.textContent = `Игра окончена! Ваш счет: ${score}`;  
            colorSquare.style.backgroundColor = '#282c36'; // Сброс цвета  
        }  
    }, 1000);  
}  

function changeColor() {  
    colorSquare.style.backgroundColor = getRandomColor();  
}  

colorSquare.addEventListener('click', () => {  
    if (timeLeft > 0) {  
        score++;  
        scoreDisplay.textContent = score;  
        changeColor();  
    }  
});  

startBtn.addEventListener('click', startGame);
