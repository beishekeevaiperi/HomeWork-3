// №1
const gmailInput = document.getElementById('gmail_input'),
    gmailBtn = document.getElementById('gmail_button'),
    gmailResult = document.getElementById('gmail_result')


const regExp = /^(.+)@(gmail.com)$/ 

gmailBtn.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "Непрваильный Формат"
        gmailResult.style.color = "red"
}
    }


const childBlock = document.querySelector('.child_block')
let positionX = 0, positionY = 0


const moveBlock = () => {
    if (positionX <= 440 && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    } else if(positionY <= 440 && positionX > 440){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }else if (positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 0)
    }else if (positionY >= 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 0)
    }
}

moveBlock()

// №2
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let mlSeconds = document.getElementById('ml-seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const resumeBtn = document.getElementById('resume');

let minuteS = 0, secondS = 0, mlSecondS = 0;
let timerId = null; 

function updateTimer() {
    mlSecondS++;
    if (mlSecondS > 99) { 
        mlSecondS = 0;
        secondS++;
        if (secondS > 59) { 
            secondS = 0;
            minuteS++;
            if (minuteS > 59) { 
                minuteS = 0;
            }
            minutes.innerHTML = minuteS.toString().padStart(2, "0");
        }
        seconds.innerHTML = secondS.toString().padStart(2, "0");
    }
    mlSeconds.innerHTML = mlSecondS.toString().padStart(2, "0");
}


startBtn.onclick = function() {
    if (timerId === null) { 
        timerId = setInterval(updateTimer, 10);
    }
};

stopBtn.onclick = function() {
    clearInterval(timerId);
    timerId = null; 
};


resetBtn.onclick = function() {
    clearInterval(timerId);
    timerId = null;
    minuteS = 0;
    secondS = 0;
    mlSecondS = 0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    mlSeconds.innerHTML = "00";
};

resumeBtn.onclick = function() {
    if (timerId === null) { 
        timerId = setInterval(updateTimer, 10);
    }
};
