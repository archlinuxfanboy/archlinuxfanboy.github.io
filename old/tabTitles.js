const tabTitles = [
    "fucked",
    "by",
    "hellhound.sh",
    "https://t.me/viewmatrix",
];

let index = 0;

function updateTabTitle() {
    document.title = tabTitles[index];
    index = (index + 1) % tabTitles.length;
}

updateTabTitle();

setInterval(updateTabTitle, 500);
