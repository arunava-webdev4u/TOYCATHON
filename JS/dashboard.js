let username = sessionStorage.getItem('loggedInUserName');
let getData = JSON.parse(localStorage.getItem(username));
// localStorage.removeItem('tempUserData');
getData.splice(0, 1);
let gameScores = getData;

let cards = document.querySelectorAll(".game-cards-box");
let cardsLink = document.querySelectorAll(".game-cards");
let status = document.querySelectorAll(".status");
let winner = document.querySelector("article");

let info = document.querySelector("#dropdown");
let infoText = document.querySelector("#dropdown-content");

// let help = document.querySelector("#help");
// help.addEventListener('click', function(){
//     this.setAttribute("href", "help.html");
// });

info.addEventListener('mouseover', function () {
    infoText.style.display = "block";
});
info.addEventListener('mouseout', function () {
    infoText.style.display = "none";
});

greet();
setupCards();
setStatus();

// ---------------------------- function definations--------------------------//
function greet()
{
    let welcome = document.querySelector("#name");
    welcome.innerText += " " + username;
}

function setupCards()
{
    for (let i = 0; i <= 4; i++)
    {

        if (gameScores[i] === 0)
        {
            cards[i].classList.add('disabled');
        }
        else
        {
            cards[i].addEventListener('click', function () {
                cardsLink[i].setAttribute("href", `game${i+1}.html`);
            });
        }
    }
}

function setStatus()
{
    for (let i = 0; i <= 4; i++)
    {
        if (gameScores[i] === 0)
            status[i].innerText = "Locked";

        else if (gameScores[i] === 1)
            status[i].innerText = "Ongoing...";
        else
            status[i].innerText = "Completed";
    }

    if (gameScores[4] > 1)
        winner.classList.add('hide-me');
}