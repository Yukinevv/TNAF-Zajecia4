let cookies = 0;
let cookiesPerSeconds = 0;

let levels = [0, 0, 0, 0, 0];
const upgrades = [0.1, 1, 5, 10, 100];
const costs = [10, 100, 1000, 5000, 100000];

const levelUpButton = document.querySelector(".round-button");
const textAreaWhite = document.querySelector(".text-area-white");
const levelUpButtons = document.querySelectorAll(".white-button");
const cookiesPerClickSpan = document.querySelector("#cookies-per-click");
const cookiesPerSecondsSpan = document.querySelector("#cookies-per-seconds");

levelUpButton.addEventListener('click', e => {
    e.preventDefault();

    updateCookies(1);
    console.log(cookies);
});

setInterval(() => {
    updateCookies(cookiesPerSeconds);
}, 1000);

function updateCookies(value) {
    cookies += value;
    cookiesPerClickSpan.innerHTML = Math.floor(cookies);
    cookiesPerSecondsSpan.innerHTML = cookiesPerSeconds.toFixed(1);

    for (let i = 0; i < levelUpButtons.length; i++)
        levelUpButtons[i].classList.toggle("active", cookies >= costs[i] + levels[i] * 0.3 * costs[i]);
}

for (let i = 0; i < levelUpButtons.length; i++) {
    levelUpButtons[i].addEventListener('click', e => {
        e.preventDefault();

        if (cookies < costs[i] + levels[i] * 0.3 * costs[i]) {
            alert("Nie posiadasz wystarczajacej ilosci ciasteczek!");
            return;
        }
        cookiesPerSeconds += upgrades[i];
        console.log(cookiesPerSeconds);

        cookies -= costs[i] + levels[i] * 0.3 * costs[i];
        levels[i] = 1;
        alert("Kupiles ulepszenie " + upgrades[i].toString() + " ciasteczek na sekunde");
    });
}