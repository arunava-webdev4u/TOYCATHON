let questions = [
    {
        id: 1,
        question: "A ‘capital’ is a city where a region's government is located.This is where government buildings are and where government leaders work.At the county level, capitals are usually called ‘county seats’. Which city among the following is the capital of India?",
        choice: ['Mumbai', 'Delhi', 'Bengaluru', 'Kolkata'],
        answer: 'Delhi',
    },
    {
        id: 2,
        question: "In Hindu mythology and the Vedic era, this animal was a symbol of power. It was often depicted as the animal-vehicle of the various forms of Goddess Durga. India is home to 80 percent of this animal in the world. Name the national animal of India?",
        choice: ['The Tiger', 'The Giraffe', 'The Elephant', 'The Lion'],
        answer: 'The Lion',
    },
    {
        id: 3,
        question: "Currency is a medium of exchange for goods and services. In short, it is the money in the form of paper or coins, usually issued by a government and generally accepted at its face value as a method of payment. This is the national currency of India?",
        choice: ['Yen', 'Dollar', 'Pound', 'Rupee'],
        answer: 'Rupee',
    },
    {
        id: 4,
        question: "Currency is a medium of exchange for goods and services. In short, it is the money in the form of paper or coins, usually issued by a government and generally accepted at its face value as a method of payment. This is the national currency of India?",
        choice: ['The sparrow', 'The peacock', 'The pigeon', 'The bulbul'],
        answer: 'The peacock',
    },
    {
        id: 5,
        question: "Gitanjali, written by Rabindranath Tagore is a collection of ",
        choice: ['101 poems', '120 poems', '157 poems', '184 poems'],
        answer: '157 poems',
    },
    {
        id: 6,
        question: "The Indian National Flag is a tri-colored flag with an Ashok Chakra in the centre. You will find these three colours in the flag if you start from the top to the bottom:",
        choice: ['white yellow green', 'white green saffron', 'saffron white green', 'green white saffron'],
        answer: 'saffron white green',
    },
    {
        id: 7,
        question: "I am native to India and thus truly Indian. Since time immemorial, I have been cultivated in India. In ancient times as well, the deliciousness of this fruit has been defined by many renowned poets. I am the national fruit of India:",
        choice: ['apple', 'guava', 'mango', 'orange'],
        answer: 'mango',
    }
];
//-----------------------------------------------------------------------------------------// 
let username = sessionStorage.getItem('loggedInUserName');
let HIGH_SCORE = JSON.parse(localStorage.getItem(username))[1]; //////--------------- for game 1
let CURRENT_SCORE = 0;
let QUESTION_COUNTER = 1;
let CLICKED = false;
let SCORE = [];

// ----------------------head section-------------------------//
let questionCount = document.querySelector('#questionCount');
let totalQuestions = document.querySelector('#totalQuestions');
let currentScore = document.querySelector('#score');
let nextButton = document.querySelector('#next');
let nextButtonBox = document.querySelector('#next-btn');
let progress = document.querySelector('#progressbarFull');
//---------------------- body section -----------------------//
let question = document.querySelector('#question');
let options = document.querySelectorAll('.options');


// -----------------------onload update-----------------
let numberOfQuestions = questions.length;
totalQuestions.innerText = numberOfQuestions;
questionCount.innerText = QUESTION_COUNTER;
progress.style.width = `${(QUESTION_COUNTER / numberOfQuestions) * 100}%`;

question.innerText = questions[0].question;
for (let op = 0; op <= 3; op++)
    options[op].innerText = `${questions[0].choice[op]}`;

// --------------------------program execution----------------------

nextButton.addEventListener('click', next); //allows you to skip questions

for (let i = 0; i <= 3; i++) {
    options[i].addEventListener('click', function (el) {
        let CLICKED = true;
        let ans = el.path[0].innerText;
        let correctAns = questions[QUESTION_COUNTER - 1].answer.toString();
        let max = total(SCORE);

        if (ans === correctAns) {
            if (SCORE.length < numberOfQuestions) {
                SCORE.push(10);
                max = total(SCORE);
                currentScore.innerText = max;

                if (max === numberOfQuestions * 10)
                    CURRENT_SCORE = max;

                if (CURRENT_SCORE == max) {
                    let newData = JSON.parse(localStorage.getItem(username));
                    newData[5] = CURRENT_SCORE;        //////--------------- for game 5
                    // newData[6] = 1;
                    localStorage.setItem(username, JSON.stringify(newData));
                }
            }

            for (let i = 0; i <= 3; i++) {
                options[i].style.backgroundColor = "#9ea2a6";
            }
            el.path[0].style.backgroundColor = "green";
        }
        else {
            if (SCORE.length < numberOfQuestions) {
                SCORE.push(0);
                max = total(SCORE);
                currentScore.innerText = max;
            }

            for (let i = 0; i <= 3; i++) {
                options[i].style.backgroundColor = "#9ea2a6";
            }
            el.path[0].style.backgroundColor = "red";
        }

        if (CLICKED == true) {
            setTimeout(lateCall, 500);
        }
    });
}

// ---------------------------function definitions--------------------------
function next() {
    if (QUESTION_COUNTER === numberOfQuestions) {
        nextButton.setAttribute("href", "dashboard.html");
        return
    }
    if (QUESTION_COUNTER === numberOfQuestions - 1)
        nextButtonBox.innerText = "Finish";

    QUESTION_COUNTER++;

    setHeader();
    setQuestions();
}

function setHeader() {
    questionCount.innerText = QUESTION_COUNTER;
    progress.style.width = `${(QUESTION_COUNTER / numberOfQuestions) * 100}%`;
}

function setQuestions() {
    question.innerText = questions[QUESTION_COUNTER - 1].question;
    for (let op = 0; op <= 3; op++)
        options[op].innerText = `${questions[QUESTION_COUNTER - 1].choice[op]}`;
}

function resetColors() {
    for (let i = 0; i <= 3; i++) {
        options[i].style.backgroundColor = "steelblue";
    }
}

function lateCall() {
    resetColors();
    next();
}
function total(arr) {
    let t = 0;
    for (let j = 0; j < arr.length; j++) {
        t += arr[j];
    }
    return t;
}