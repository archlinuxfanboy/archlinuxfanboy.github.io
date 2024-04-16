document.addEventListener("DOMContentLoaded", function() {
    const fullscreenImage = document.getElementById('fullscreen-image');
    const audio = document.getElementById('audio');

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    document.addEventListener('click', function() {
        toggleAudio();
        toggleFullScreen();
    });

    fullscreenImage.addEventListener('load', function() {
        fullscreenImage.style.opacity = 1;
    });
});
