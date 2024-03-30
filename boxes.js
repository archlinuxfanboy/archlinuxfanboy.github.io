document.addEventListener('DOMContentLoaded', function() {
    var downloadButtons = document.querySelectorAll('.names-list ul li');
    var isWindowsXPOpen = false;

    downloadButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            var buttonText = button.textContent.toLowerCase();
            var customText = getCustomText(buttonText);
            var imageName = buttonText + '.png'; 
            
            createWindowsXPPopup(customText, imageName);
        });
    });

    function getCustomText(buttonText) {
        switch (buttonText) {
            case 'arch':
                return '<a href="https://t.me/slityourself" target="_blank">t.me/slityourself</a>';
            case 'fei':
                return '<a href="https://t.me/viewmatrix" target="_blank">t.me/viewmatrix</a>';
            case 'sorrow':
                return 'does not own any socials (w opsec)';
            case 'rtx':
                return '<a href="https://t.me/sliturself" target="_blank">t.me/sliturself</a>';
            case 'jayden':
                return '<a href="https://t.me/starjumps" target="_blank">t.me/starjumps</a>';
            case 'hoz':
                return '<a href="https://t.me/jassimbruv" target="_blank">t.me/jassimbruv</a>';
            case 'sar':
                return 'begged me to add him here';
            default:
                return '';
        }
    }
    

    function createWindowsXPPopup(text, imageName) {
        if (isWindowsXPOpen) {
            return;
        }

        var popupContainer = document.createElement('div');
        popupContainer.className = 'windows-xp-popup';

        var popupWindow = document.createElement('div');
        popupWindow.className = 'windows-xp-window';

        var blueBar = document.createElement('div');
        blueBar.className = 'windows-xp-blue-bar';
        blueBar.style.cursor = 'grab';

        var closeButton = document.createElement('div');
        closeButton.className = 'windows-xp-close-button';
        closeButton.innerHTML = 'X';

        closeButton.addEventListener('click', function () {
            document.body.removeChild(popupContainer);
            isWindowsXPOpen = false; 
        });

        var popupText = document.createElement('div');
        popupText.className = 'windows-xp-text';
        popupText.innerHTML = text;

        var profilePicture = document.createElement('img');
        profilePicture.className = 'profile-picture';
        profilePicture.src = imageName;

        var kittyImage = null;
        if (imageName === 'fei.png') {
            kittyImage = document.createElement('img');
            kittyImage.className = 'kitty-image';
            kittyImage.src = 'kitty.gif';
            kittyImage.style.position = 'absolute';
            kittyImage.style.bottom = '0';
            kittyImage.style.left = '0';
            kittyImage.style.pointerEvents = 'none';
        }

        popupWindow.appendChild(blueBar);
        popupWindow.appendChild(closeButton);
        popupWindow.appendChild(popupText);
        popupWindow.appendChild(profilePicture);
        
        if (kittyImage !== null) {
            popupWindow.appendChild(kittyImage);
        }

        popupContainer.appendChild(popupWindow);
        document.body.appendChild(popupContainer);

        var isDragging = false;
        var offsetTop, offsetLeft;

        var top = Math.random() * (window.innerHeight - 200);
        var left = Math.random() * (window.innerWidth - 300);

        popupContainer.style.top = top + 'px';
        popupContainer.style.left = left + 'px';

        popupWindow.addEventListener('mousedown', function (event) {
            if (event.target.tagName.toLowerCase() === 'a') {
                return;
            }
            isDragging = true;
            offsetTop = event.clientY - popupContainer.getBoundingClientRect().top;
            offsetLeft = event.clientX - popupContainer.getBoundingClientRect().left;
        });

        document.addEventListener('mousemove', function (event) {
            if (isDragging) {
                var top = event.clientY - offsetTop;
                var left = event.clientX - offsetLeft;
                popupContainer.style.top = top + 'px';
                popupContainer.style.left = left + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });

        isWindowsXPOpen = true; 
    }
});
