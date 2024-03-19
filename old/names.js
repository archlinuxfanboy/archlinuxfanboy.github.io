const names = ["arch", "fei", "eve", "rtx", "jayden", "sar", "hoz"];
let currentIndex = 0;
let isAnimating = false; 

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    const ballWidth = 50;
    const ballHeight = 50; 
    const distanceFromEdges = 200;

    let initialX, initialY;

    do {
        initialX = Math.random() * (window.innerWidth - ballWidth - distanceFromEdges * 2) + distanceFromEdges;
        initialY = Math.random() * (window.innerHeight - ballHeight - distanceFromEdges * 2) + distanceFromEdges;
    } while (isInExcludedRegion(initialX, initialY));

    ball.style.left = initialX + 'px';
    ball.style.top = initialY + 'px';

    const name = names[currentIndex];

    ball.textContent = name;

    document.body.appendChild(ball);

    ball.style.opacity = 0;
    setTimeout(() => {
        ball.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        ball.style.opacity = 0;
        setTimeout(() => {
            ball.parentNode.removeChild(ball);
            currentIndex = (currentIndex + 1) % names.length;
        }, 1000);
    }, 2000);
}

function isInExcludedRegion(x, y) {
    const excludedRegion = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        width: window.innerWidth / 2,
        height: window.innerHeight / 2
    };

    return x >= excludedRegion.x && x <= excludedRegion.x + excludedRegion.width &&
           y >= excludedRegion.y && y <= excludedRegion.y + excludedRegion.height;
}

function startBalls() {
    if (isAnimating) {
        return; 
    }

    isAnimating = true; 

    createBall();
    currentIndex = (currentIndex + 1) % names.length;

    setInterval(createBall, 3000);

    
    setTimeout(() => {
        isAnimating = false;
    }, 9000);
}

$("#yes-btn").click(function() {
    $(".button-layer").fadeOut();
    $("#enter-type-in").fadeOut();
    startBalls();
});
