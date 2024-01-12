document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('surprise.mp3');
    var playButton = document.getElementById('playButton');
    var mobileGirl = document.querySelector('.mobile-girl');
    var title = document.querySelector('.title');
    var buttonClicked = false; // Variable to track if the button has been clicked

    playButton.addEventListener('click', function () {
        if (!buttonClicked) {
            audio.play();
            fadeIn(mobileGirl); // Call the fadeIn function
            fadeIn(title); // Make the title visible
            fadeOut(playButton); // Make the button gradually disappear
            buttonClicked = true; // Set the variable to true to prevent further clicks
            startSnowfall();
        }
    });
});

function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.style.pointerEvents = 'none'; // Disable button clicks
        }
    }, 100);
}

function startSnowfall() {
    var snowfallInterval = setInterval(function () {
        createSnowflake();
    }, 100);

    setTimeout(function () {
        clearInterval(snowfallInterval);
    }, 5000);
}

function createSnowflake() {
    var snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(snowflake);

    void snowflake.offsetWidth;

    snowflake.style.top = '-10px';
}

// Function to fade in an element gradually
function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
