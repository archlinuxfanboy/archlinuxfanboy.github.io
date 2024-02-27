const names = ["arch", "fei", "eve", "rtx", "jayden", "sar", "hoz"];
let currentIndex = 0;

function isInGifRegion(x, y) {
    const gifRegion = {
        x: window.innerWidth - 110,
        y: window.innerHeight - 110,
        width: 100,
        height: 100
    };

    return x >= gifRegion.x && x <= gifRegion.x + gifRegion.width &&
           y >= gifRegion.y && y <= gifRegion.y + gifRegion.height;
}

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');

    let initialX, initialY;
    do {
        initialX = Math.random() * (window.innerWidth - 100);
        initialY = Math.random() * (window.innerHeight - 100);
    } while (isInGifRegion(initialX, initialY));
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

function startBalls() {
    createBall();
    currentIndex = (currentIndex + 1) % names.length;

    setInterval(createBall, 3000);
}

$("#yes-btn").click(function() {
    $(".button-layer").fadeOut();
    $("#enter-type-in").fadeOut();
    startBalls();
});
