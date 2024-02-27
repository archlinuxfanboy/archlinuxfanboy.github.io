$(document).ready(function() {
    var enterText = "are you ready to play?";
    var delay = 50;
    var pauseDelay = 1000;
    var index = 0;

    function typeEnterText() {
        $("#enter-type-in").append(enterText[index]);
        index++;
        if (index < enterText.length) {
            setTimeout(typeEnterText, delay);
        } else {
            setTimeout(pauseAfterTyping, pauseDelay);
        }
    }

    function pauseAfterTyping() {
        setTimeout(eraseEnterText, pauseDelay);
    }

    function eraseEnterText() {
        var currentText = $("#enter-type-in").text();
        var newText = currentText.slice(0, -1);
        $("#enter-type-in").text(newText);
        index--;
        if (index >= 0) {
            setTimeout(eraseEnterText, delay);
        } else {
            index = 0;
            setTimeout(typeEnterText, delay);
        }
    }

    typeEnterText();

    $("#yes-btn").click(function() {
        $(".button-layer").fadeOut();
        $("#enter-type-in").fadeOut();
        
        var audio = new Audio('assets/audio.mp3');
        audio.play();
        $("<img src='assets/cute.gif' style='position: fixed; bottom: 10px; right: 10px; z-index: 1;'>").hide().appendTo("body").fadeIn();

        const neonText = document.createElement('div');
        neonText.textContent = 'hellhound.sh';
        neonText.classList.add('neon-text', 'fade-in');
        document.body.appendChild(neonText);

        neonText.style.animation = 'vibrate 0.3s infinite';

        const neonTextCSS = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 60px;
            font-weight: bold;
            text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
            opacity: 0;
        `;

        neonText.style.cssText = neonTextCSS;
    });

    $("#no-btn").click(function() {
        $(".button-layer").fadeOut();
        $("#enter-type-in").fadeOut();
        
        $.getJSON('https://api.ipify.org?format=json', function(data) {
            var ipAddress = data.ip;
            
            var ipText = $("<p>").css({
                "font-family": "monospace",
                "font-size": "16px",
                "color": "white",
                "position": "fixed",
                "top": "50%",
                "left": "50%",
                "transform": "translate(-50%, -50%)",
                "text-align": "center"
            }).text("get fucked by hellhound, this you? " + ipAddress).appendTo("body");

            var progressBar = $("<div>").addClass("progress-bar").appendTo("body");
            var progressFill = $("<div>").addClass("progress-fill").appendTo(progressBar);
            var width = 0;
            var interval = setInterval(function() {
                progressFill.width(width + "%");
                width += 1;
                if (width >= 100) {
                    clearInterval(interval);
                    ipText.text("the swat team is coming, hide");
                    progressBar.fadeOut();
                }
            }, 50);

            var audio2 = new Audio('assets/audio2.mp3');
            audio2.play();
        });
    });

    document.addEventListener('contextmenu', (mouseEvent) => {
        mouseEvent.preventDefault();
    });

    document.onkeydown = function(keyEvent) {
        if (keyEvent.keyCode == 123) {
            return false;
        }
        if (keyEvent.ctrlKey && keyEvent.shiftKey && (keyEvent.keyCode == 73 || keyEvent.keyCode == 74 || keyEvent.keyCode == 85)) {
            return false;
        }
    };
});
