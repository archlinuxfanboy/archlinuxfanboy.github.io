function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value.trim();
    const validPasswords = ['die hard'];

    if (validPasswords.includes(passwordInput.toLowerCase())) {
        showQuestionScreen();
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function showQuestionScreen() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1 id="question" class="glow-text">Will you be my valentine?</h1>
        <div class="button-container">
            <button class="btn" onclick="answer('yes')">Yes</button>
            <button class="btn btn-no" onclick="answer('no')">No</button>
        </div>
        <div id="catImageContainer"></div>
        <audio id="valentineAudio"></audio>
    `;
}

let catImageIndexYes = 0;
let catImageIndexNo = 0;
const catImagesYes = ['cat1.jpg'];
const catImagesNo = ['cat2.jpg'];

function answer(response) {
    const questionElement = document.getElementById('question');
    questionElement.classList.remove('glow-text');

    if (response === 'yes') {
        playAudio('audio1.mp3');
        hideButtons();
        showCatImage(catImagesYes[catImageIndexYes]);
        catImageIndexYes = (catImageIndexYes + 1) % catImagesYes.length;
    } else if (response === 'no') {
        playAudio('audio2.mp3');
        hideButtons();
        createRain();
        showCatImage(catImagesNo[catImageIndexNo]);
        catImageIndexNo = (catImageIndexNo + 1) % catImagesNo.length;
    }
}

function playAudio(audioSource) {
    const audio = document.getElementById('valentineAudio');
    audio.src = audioSource;
    audio.play();
}

function hideButtons() {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style.display = 'none';
}

function showCatImage(catImageSource) {
    const catImageContainer = document.getElementById('catImageContainer');
    const catImage = document.createElement('img');

    catImage.src = catImageSource;
    catImage.alt = 'Cat';
    catImage.classList.add('fade-in', 'small-cat');

    catImageContainer.innerHTML = '';
    catImageContainer.appendChild(catImage);

    setTimeout(() => {
        catImage.classList.add('show');
    }, 0);
}

function createRain() {
    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(drop);
    }
}
