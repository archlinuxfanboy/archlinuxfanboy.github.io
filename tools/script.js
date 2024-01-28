document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('surprise.mp3');
    var playButton = document.getElementById('playButton');
    var mobileGirl = document.querySelector('.mobile-girl');
    var title = document.querySelector('.title');
    var buttonContainer = document.querySelector('.button-container');
    var downloadButtons = document.querySelectorAll('.download-button'); 
    var buttonClicked = false; 

    
    downloadButtons.forEach(function (button) {
        button.disabled = true;
    });

    playButton.addEventListener('click', function () {
        if (!buttonClicked) {
            audio.play();
            fadeIn(mobileGirl);
            fadeIn(title);
            fadeIn(buttonContainer);
            fadeOut(playButton, 300);
            buttonClicked = true;
            startSnowfall();

            
            downloadButtons.forEach(function (button) {
                button.disabled = false;
            });
        }
    });

    downloadButtons.forEach(function (button) {
        button.addEventListener('mouseover', function (event) {
            if (!buttonClicked) {
                event.preventDefault();
                event.stopPropagation();
            }
        });

        button.addEventListener('mouseout', function (event) {
            if (!buttonClicked) {
                event.preventDefault();
                event.stopPropagation();
            }
        });

        button.addEventListener('click', function (event) {
            if (!buttonClicked) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
    });

    function fadeOut(element, duration) {
        var opacity = 1;
        var interval = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
                element.style.pointerEvents = 'none'; 
            }
        }, duration / 10); 
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
});