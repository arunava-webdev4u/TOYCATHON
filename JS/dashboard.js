let username = sessionStorage.getItem('loggedInUserName');
let getData = JSON.parse(localStorage.getItem(username));
// localStorage.removeItem('tempUserData');
getData.splice(0, 1);
let gameScores = getData;

let cards = document.querySelectorAll(".game-cards-box");
let cardsLink = document.querySelectorAll(".game-cards");
let status = document.querySelectorAll(".status");

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
                cardsLink[i].setAttribute("href", `/TOYCATHON/game${i+1}.html`);
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

}
