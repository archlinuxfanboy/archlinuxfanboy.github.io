document.addEventListener('DOMContentLoaded', function() {
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

    document.querySelector('.fade-button').addEventListener('click', function() {
       
        this.style.opacity = 0;
        this.disabled = true;
        this.style.cursor = 'default';

        
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
            font-family: Poppins;
            font-size: 80px;
            font-weight: bold;
            text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
            opacity: 1; /* Changed opacity to 1 to make it visible */
        `;

        neonText.style.cssText = neonTextCSS;

        var audio = new Audio('assets/audio.mp3');
        audio.play();

        var namesList = document.querySelector('.names-list');
        namesList.style.display = 'block';
        setTimeout(function() {
            namesList.classList.add('show');
        }, 100);

       
        const swingingImage = document.querySelector('.swinging-image');
        swingingImage.style.opacity = 1;

        // fullscreen prank lol
        var element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { 
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { 
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    });
});
