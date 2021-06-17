let questions = [
    {
        id: 1,
        question: 'what is 2+2?',
        choice : [2, 4, 15, 20],
        answer: 4,
    },
    {
        id: 2,
        question: 'what is 0+0?',
        choice: [21, 9, 5, 0],
        answer: 0,
    },
    {
        id: 3,
        question: 'what is 8+2?',
        choice: [57, 96, 15, 10],
        answer: 10,
    },
    {
        id: 4,
        question: 'what is 8+8?',
        choice: [16, 56, 1, 10],
        answer: 16,
    },
    {
        id: 5,
        question: 'what is 1+1?',
        choice: [7, 6, 21, 2],
        answer: 2,
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

        if (ans === correctAns)
        {
            if (SCORE.length < numberOfQuestions)
            {
                SCORE.push(10);
                max = total(SCORE);
                currentScore.innerText = max;

                if (max === numberOfQuestions*10)
                    CURRENT_SCORE = max;

                if (CURRENT_SCORE == max)
                {
                    let newData = JSON.parse(localStorage.getItem(username));
                    newData[1] = CURRENT_SCORE;        //////--------------- for game 1
                    newData[2] = 1;
                    localStorage.setItem(username, JSON.stringify(newData));
                }
            }

            for (let i = 0; i <= 3; i++){
                options[i].style.backgroundColor = "#9ea2a6";
            }
            el.path[0].style.backgroundColor = "green";
        }
        else
        {
            if (SCORE.length < numberOfQuestions){
                SCORE.push(0);
                max = total(SCORE);
                currentScore.innerText = max;
            }

            for (let i = 0; i <= 3; i++) {
                options[i].style.backgroundColor = "#9ea2a6";
            }
            el.path[0].style.backgroundColor = "red";
        }

        if(CLICKED == true)
        {
            setTimeout(lateCall, 250);
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

function setHeader()
{
    questionCount.innerText = QUESTION_COUNTER;
    progress.style.width = `${(QUESTION_COUNTER / numberOfQuestions) * 100}%`;
}

function setQuestions()
{
    question.innerText = questions[QUESTION_COUNTER-1].question;
    for (let op = 0; op <= 3; op++)
        options[op].innerText = `${questions[QUESTION_COUNTER - 1].choice[op]}`;
}

function resetColors()
{
    for (let i = 0; i <= 3; i++) {
        options[i].style.backgroundColor = "steelblue";
    }
}

function lateCall()
{
    resetColors();
    next();
}
function total(arr)
{
    let t = 0;
    for (let j = 0; j < arr.length; j++)
    {
        t += arr[j];
    }
    return t;
}