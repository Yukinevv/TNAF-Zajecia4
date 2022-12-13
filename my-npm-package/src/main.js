let ciasteczka = 0;
let ciasteczkaPerSeconds = 0;

const levelUpButton = document.querySelector(".round-button");

const textAreaWhite = document.querySelector(".text-area-white");

const levelUpButtons = document.querySelectorAll(".white-button");

const ciasteczkaPerClickSpan = document.querySelector("#ciasteczka-per-click");
const ciasteczkaPerSecondsSpan = document.querySelector("#ciasteczka-per-seconds");

levelUpButton.addEventListener('click', e => {
    e.preventDefault();

    updateCiasteczka(1);
    console.log(ciasteczka);
});

setInterval(() => {
    updateCiasteczka(ciasteczkaPerSeconds);
}, 1000);

function updateCiasteczka(value) {
    ciasteczka += value;

    ciasteczkaPerClickSpan.innerHTML = Math.floor(ciasteczka);
    ciasteczkaPerSecondsSpan.innerHTML = ciasteczkaPerSeconds;

    if (ciasteczka >= 10) {
        levelUpButtons[0].classList.add("active");
    }
    else
        levelUpButtons[0].classList.remove("active");

    if (ciasteczka >= 100) {
        levelUpButtons[1].classList.add("active");
    }
    else
        levelUpButtons[1].classList.remove("active");

    if (ciasteczka >= 1000) {
        levelUpButtons[2].classList.add("active");
    }
    else
        levelUpButtons[2].classList.remove("active");

    if (ciasteczka >= 5000) {
        levelUpButtons[3].classList.add("active");
    }
    else
        levelUpButtons[3].classList.remove("active");

    if (ciasteczka >= 100000) {
        levelUpButtons[4].classList.add("active");
    }
    else
        levelUpButtons[4].classList.remove("active");

    //levelUpButtons[0].classList.toggle("active", ciasteczka > 10);
}

let poziomy = [0, 0, 0, 0, 0];

levelUpButtons[0].addEventListener('click', e => {
    e.preventDefault();

    if (ciasteczka < 10 + poziomy[0] * 0.3 * 10) {
        alert("Nie posiadasz wystarczajacej ilosci ciasteczek!");
        return;
    }
    ciasteczkaPerSeconds += 0.1;
    console.log(ciasteczkaPerSeconds);

    ciasteczka -= 10 + poziomy[0] * 0.3 * 10;
    poziomy[0] = 1;
    alert("Kupiles ulepszenie + 0.1 ciasteczek na sekunde");
});

levelUpButtons[1].addEventListener('click', e => {
    e.preventDefault();

    if (ciasteczka < 100 + poziomy[1] * 0.3 * 100) {
        alert("Nie posiadasz wystarczajacej ilosci ciasteczek!");
        return;
    }
    ciasteczkaPerSeconds += 1;
    console.log(ciasteczkaPerSeconds);

    ciasteczka -= 100 + poziomy[1] * 0.3 * 100;
    poziomy[1] = 1;
    alert("Kupiles ulepszenie + 1 ciasteczek na sekunde");
});

levelUpButtons[2].addEventListener('click', e => {
    e.preventDefault();
    if (ciasteczka < 1000 + poziomy[2] * 0.3 * 1000) {
        alert("Nie posiadasz wystarczajacej ilosci ciasteczek!");
        return;
    }

    ciasteczkaPerSeconds += 5;
    console.log(ciasteczkaPerSeconds);

    ciasteczka -= 1000 + poziomy[2] * 0.3 * 1000;
    alert("Kupiles ulepszenie + 5 ciasteczek na sekunde");
});

levelUpButtons[3].addEventListener('click', e => {
    e.preventDefault();

    if (ciasteczka < 5000 + poziomy[3] * 0.3 * 5000) {
        alert("Nie posiadasz wystarczajacej ilosci ciasteczek!");
        return;
    }

    ciasteczkaPerSeconds += 10;
    console.log(ciasteczkaPerSeconds);

    ciasteczka -= 5000 + poziomy[3] * 0.3 * 5000;
    alert("Kupiles ulepszenie + 10 ciasteczek na sekunde");
});

levelUpButtons[4].addEventListener('click', e => {
    e.preventDefault();

    if (ciasteczka < 100000 + poziomy[4] * 0.3 * 100000) {
        alert("Nie posiadasz wystarczajacej ilosci ciasteczek!");
        return;
    }
    ciasteczkaPerSeconds += 100;
    console.log(ciasteczkaPerSeconds);

    ciasteczka -= 100000 + poziomy[4] * 0.3 * 100000;
    alert("Kupiles ulepszenie + 100 ciasteczek na sekunde");
});

