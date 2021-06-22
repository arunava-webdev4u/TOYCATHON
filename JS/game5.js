let questions = [
    {
        id: 1,
        question: "Officially, Indian Republic Day celebration continues for a duration of",
        choice: ['One day', 'Two day', 'Three day', 'Four day'],
        answer: 'Three day',
    },
    {
        id: 2,
        question: "National Youth day is celebrated in the memory of",
        choice: ['Jawaharlal Nehru', 'Subhash Chandra Bose', 'Swami Vivekananda', 'None of the above'],
        answer: 'Swami Vivekananda',
    },
    {
        id: 3,
        question: "Which one is the longest National Highway of India",
        choice: ['NH 5', 'NH 7', 'NH 8', 'NH 10'],
        answer: 'NH 7',
    },
    {
        id: 4,
        question: "Reading newspapers is a good habit and it is already part of modern life. This habit will widen your outlook and will enrich your knowledge. Reading the newspaper makes you well informed. The first Indian newspaper to offer an online edition on internet: ",
        choice: ['Times of India', 'Hindustan Times', 'Anandabazar Patrika', 'The Hindu'],
        answer: 'The Hindu',
    },
    {
        id: 5,
        question: "On which spacecraft did Rakesh Sharma make his historic trip to Space?",
        choice: ['Salyut 7', 'Soyuz-T', 'Apollo 11', 'Progress 1'],
        answer: 'Soyuz-T',
    },
    {
        id: 6,
        question: "The first IIT was established in1951 known as",
        choice: ['IIT Delhi', 'IIT Kanpur', 'IIT Kharagpur', 'IIT Madras'],
        answer: 'IIT Kharagpur',
    },
    {
        id: 7,
        question: "First Minister of Education who have been awarded with Bharat Ratna Award",
        choice: ['Morarji Desai', 'Abul Kalam Azad', 'Zakir Hussain', 'J P Narayan'],
        answer: 'Abul Kalam Azad',
    },
    {
        id: 8,
        question: "World's first Granite Temple was built in India, find the which one",
        choice: ['Brihadeeswarar Temple', 'Somnath Temple', 'Tirupati Temple', 'Sabarimala'],
        answer: 'Brihadeeswarar Temple',
    },
    {
        id: 9,
        question: "Which one is the largest Zoological park (Zoo) in India",
        choice: ['Arignar Anna Zoological Park, Chennai', 'Nandankanan Zoological Park, Bhubneswar', 'Nehru Zoological Park, Hyderabad', 'Mysore Zoo, Mysore'],
        answer: 'Arignar Anna Zoological Park, Chennai',
    },
    {
        id: 10,
        question: "Which state is officially declared as the first Digital State of India",
        choice: ['Kerala', 'Karnataka', 'Maharashtra', 'Tamil Nadu'],
        answer: 'Kerala',
    },
    {
        id: 11,
        question: "The death anniversary day of Rajiv Gandhi is observed as",
        choice: ['National Integration Day', 'Peace Day', 'Anti-Terrorism Day', 'Secular Day'],
        answer: 'Anti-Terrorism Day',
    },
    {
        id: 12,
        question: "The official duration of the National Anthem of India is",
        choice: ['50 sec', '52 sec', '55 sec', '60 sec'],
        answer: '52 sec',
    },
    {
        id: 13,
        question: "Where the headquarters of the Indian Space Research Organization is located",
        choice: ['Mumbai', 'New Delhi', 'Hyderabad', 'Bengaluru'],
        answer: 'Bengaluru',
    },
    {
        id: 14,
        question: "In which year Sikkim declared as the first organic state of India",
        choice: ['2013', '2014', '2015', '2016'],
        answer: '2016',
    },
    {
        id: 15,
        question: "Which one Indian monument became the 'First historical Monument in the World' to debut on Twitter",
        choice: ['Taj Mahal', 'Fatehpur Sikri', 'Qutub Minar', 'Red Fort'],
        answer: 'Taj Mahal',
    },
    {
        id: 16,
        question: "The United Nations Organization (UNO) has declared the birthday of _____ as the 'World Students Day'",
        choice: ['Dr. APJ Abdul Kalam', 'Dr. Sarvapalli Radhakrishnan', 'Jawaharlal Nehru', 'C. V. Raman'],
        answer: 'Dr. APJ Abdul Kalam',
    },
    {
        id: 17,
        question: "National Unity Day is observed to mark the birthday of ___",
        choice: ['Indira Gandhi', 'Lal Bahadur Shastri', 'Rajiv Gandhi', 'Vallabhbhai Patel'],
        answer: 'Vallabhbhai Patel',
    },
    {
        id: 18,
        question: "Which city is also known as the 'Cultural Capital of India'",
    choice: ['Kolkata', 'Varanasi', 'Allahabad', 'Puri'],
        answer: 'Kolkata',
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
//-------------------------popup section-----------------//
let txtContent = document.querySelector("#popup-content-text");
let imgContent = document.querySelector("#image-content-img");
let popup = document.querySelector("#popup");

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
            setTimeout(lateCall, 750);
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

function popupFun(k) {
    popup.style.display = "flex";
    txtContent.innerText = questions[k].about;
    imgContent.setAttribute("src", `./images_game2/${k + 1}.png`)

    let close = document.querySelector("#close");
    close.addEventListener("click", function () {
        popup.style.display = "none";
        return;
    });
}

function popupFun(k) {
    popup.style.display = "flex";
    txtContent.innerText = questions[k].about;
    imgContent.setAttribute("src", `./images_game5/${k + 1}.png`)

    let close = document.querySelector("#close");
    close.addEventListener("click", function () {
        popup.style.display = "none";
        return;
    });
}

function lateCall() {
    j = QUESTION_COUNTER - 1
    popupFun(j);
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