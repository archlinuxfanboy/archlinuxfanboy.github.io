document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', (mouseEvent) => {
        mouseEvent.preventDefault();
    });
// no inspect element for you kiddies
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

        document.querySelector('.swinging-image').style.opacity = 1;

        var audio = new Audio('assets/audio3.mp3');
        audio.play();

        var namesList = document.querySelector('.names-list');
        namesList.style.display = 'block';
        setTimeout(function() {
            namesList.classList.add('show');
        }, 100);

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
