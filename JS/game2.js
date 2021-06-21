let questions = [
    {
        id: 1,
        question: "He discovered the sea route to India during the year 1497 – 1499. On 20th May, 1498, two years after he set his sail from Lisbon, Portugal, he arrived on the Western sea coast of India at Kozhikode (Calicut), Kerala. This was the first time when a European had arrived in India via the sea. Hence, he is credited with the discovery of the sea route to India. Sailing down the western coast of Africa and rounding the Cape of Good Hope, his expedition had numerous halts in Africa before reaching the trading post of Calicut. Who is he?",
        choice: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Marco Polo'],
        answer: 'Vasco da Gama',
    },
    {
        id: 2,
        question: "On 13 May 1998, two additional fission devices were detonated, and the Indian government led by Prime Minister Atal Bihari Vajpayee shortly convened a press conference to declare India as a full-fledged nuclear state. What was the codename of the first nuclear tests conducted by India on 18 May 1974, in Pokhran, Rajasthan ?",
        choice: ['Operation Vijay', 'Operation Shakti', 'Smiling Buddha', 'Operation Ashwamedh'],
        answer: 'Smiling Buddha',
    },
    {
        id: 3,
        question: "India is the most successful team in Field Hockey at the Olympics, with 11 medals in total, including 8 gold medals. The golden era of Indian hockey ended with a gold medal at the 1980 Moscow Olympics. India won its first Olympic hockey gold in?",
        choice: ['1930', '1928', '1932', '1927'],
        answer: '1928',
    },
    {
        id: 4,
        question: "In today’s time, when success is measured by how much you excel in a particular field, it becomes important for students to choose the right university; as it can help them in exploring their interest as well as grab opportunities, right from their college days. Name the first University established in India ",
        choice: ['University of Calcutta', 'Delhi University', 'Madras University', 'Banaras Hindu University'],
        answer: 'University of Calcutta',
    },
    {
        id: 5,
        question: "The first India national elections under the Constitution held in the year?",
        choice: ['1948', '1950', '1952', '1955'],
        answer: '1952',
    },
    {
        id: 6,
        question: "One of the oldest Indo-European languages for which substantial documentation exists, Sanskrit is the primary sacred language of Hinduism, and has been used as a philosophical language in the religions of Hinduism, Buddhism, and Jainism. Sanskrit is the official language of which state among the following?",
        choice: ['Bihar', 'Uttar Pradesh', 'Uttarakhand', 'Madhya Pradesh'],
        answer: 'Uttarakhand',
    },
    {
        id: 7,
        question: "India became a member of the United Nations in which year?",
        choice: ['1944', '1945', '1947', '1952'],
        answer: '1945',
    },
    {
        id: 8,
        question: "An immense mausoleum of white marble, built in Agra between 1631 and 1648, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. It is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. The Taj Mahal was built by which Mughal emperor?",
        choice: ['Shah Jahan', 'Akbar', 'Babur', 'Jahangir'],
        answer: 'Shah Jahan',
    },
    {
        id: 9,
        question: "It was launched on April 19, 1975, from Kapustin Yar, a Russian rocket launch and development site using a Kosmos-3M launch vehicle. It was built by the Indian Space Research Organisation (ISRO).  India made history when it launched its first artificial satellite, thus making her entry into the world of satellite technology. Which is India's first artificial satellite?",
        choice: ['INSAT', 'Aryabhata', 'Bhaskara', 'Rohini'],
        answer: 'Aryabhata',
    },
    {
        id: 10,
        question: "The symbol π (pronounced paɪ in English) is the 16th letter of the Greek alphabet and is used in mathematics to stand for a real number of special significance. The value of 'pi' was first calculated by the Indian mathematician ",
        choice: ['Varahamihira', 'Aryabhata', 'Panini', 'Budhayana'],
        answer: 'Budhayana',
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
                    newData[2] = CURRENT_SCORE;        //////--------------- for game 1
                    newData[3] = 1;
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