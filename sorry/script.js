document.getElementById("acceptBtn").addEventListener("click", () => {
  const card = document.querySelector(".card");
  card.classList.add("fade-out");
  setTimeout(() => {
    card.innerHTML = `
      <h1>Thank You!</h1>
      <p>Your forgiveness means everything to me. ❤️</p>
      <div class="flowers"></div>
      <img src="200.gif" alt="Celebration" class="celebration-gif">
    `;
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
    aaa("song.mp3");
  }, 1000);
});

document.getElementById("denyBtn").addEventListener("click", () => {
  const card = document.querySelector(".card");
  card.classList.add('fade-out');
  setTimeout(() => {
    card.innerHTML = `
      <h1>Oh No!</h1>
      <p>I'm sorry to hear that. 😢</p>
      <div class="flowers"></div>
      <img src="300.gif" alt="Sad" class="celebration-gif">
    `;
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
    aaa('song2.mp3');
  }, 1000);
});

function aaa(song) {
  const audio = new Audio(song);
  audio.play();
}