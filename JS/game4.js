let questions = [
    {
        id: 1,
        question: "Which one is the original source from which the Indian national motto Satyameva jayate is adopted?",
        choice: ['Mundaka Upanishad', 'Prashna Upanishad', ' Samaveda', ' Yajurveda'],
        answer: 'Mundaka Upanishad',
    },
    {
        id: 2,
        question: "The Ashok stambh of which place has been adopted as the national emblem of India?",
        choice: ['Sanchi', 'Vaishali', ' Sarnath', 'Allahabad'],
        answer: 'Sarnath',
    },
    {
        id: 3,
        question: "Declared as World Heritage Sites by UNESCO since 1983, the paintings and sculptures of Ajanta and Ellora, considered masterpieces of Buddhist religious art, have had a great influence in the development of art in India. Total number of caves present in the Ajanta and Ellora Caves, Maharashtra are?",
        choice: ['41,20', '33,31', '21,30', '30,34'],
        answer: '30,34',
    },
    {
        id: 4,
        question: "Museums collect and preserve our objects and materials of religious, cultural and historical value. They are a good source of entertainment. These museums help to preserve and promote our cultural heritage. The largest museum of India is located at",
        choice: ['Kolkata', 'Delhi', 'Mumbai', 'Hyderabad'],
        answer: 'Kolkata',
    },
    {
        id: 5,
        question: "The Rath Yatra at Puri is celebrated in honour of which Hindu deity",
        choice: ['Ram', 'Jagannath', 'Vishnu', 'Shiva'],
        answer: 'Jagannath',
    },
    {
        id: 6,
        question: "Jana Gana Mana is the national anthem of India. It was originally composed as Bharoto Bhagyo Bidhata in Bengali by polymath Rabindranath Tagore. The first stanza of the song Bharoto Bhagyo Bidhata was adopted by the Constituent Assembly of India as the National Anthem on 24 January 1950. The National Anthem was first sung in the year?",
        choice: ['1921', '1911', '1931', '1941'],
        answer: '1911',
    },
    {
        id: 7,
        question: "The National Song of India, Vande Mataram, composed in Sanskrit  was a source of inspiration to the people in their struggle for freedom. The National Song of India was composed by?",
        choice: ['Sarat Chandra Chattopadhyay', 'Kazi Nazrul Islam', 'Bankimchandra Chatterji', 'Ram Mohan Roy'],
        answer: 'Bankimchandra Chatterji',
    },
    {
        id: 8,
        question: "Who composed the famous song 'Sare Jahan Se Achha'?",
        choice: ['Allama Iqbal', 'Javed Iqbal', 'Jaun Elia', 'Muhammad Ali Jinnah'],
        answer: 'Allama Iqbal',
    },
    {
        id: 9,
        question: "‘Dandiya’ or ‘Dandiya Raas’ is a dance form performed during the time of Navratri. Originally performed in honor of Goddess Durga, the dance form represents a battle between the demon Mahishasura and the Goddess. 'Dandia' is a popular dance of:",
        choice: ['Rajasthan', 'Gujarat', 'Assam', 'Karnataka'],
        answer: 'Gujarat',
    },
    {
        id: 10,
        question: "Tansen, a great musician of his time, was in the court of –",
        choice: ['Akbar', 'Shah Jahan', 'Jahangir', 'Humayun'],
        answer: 'Akbar',
    },
    {
        id: 11,
        question: "The Panchatantra is a book of niti,the wise conduct of life,written in the form of a chain of simple stories.Each of these stories has a moral and philosophical theme aiming to guide the reader on how to attain success in life by understanding human nature.‘Panchatantra’ is originally written by",
        choice: ['Kalidas', 'Vishnu Sharma', 'Tulsi Das', 'None of these'],
        answer: 'Vishnu Sharma',
    },
    {
        id: 12,
        question: "The famous Red Fort is known by that name because of the red stone with which it is built and it is one of the most magnificent palaces in the world. Where is it located?",
        choice: ['Kolkata', 'Chennai', 'Delhi', 'Jaipur'],
        answer: 'Delhi',
    },
    {
        id: 13,
        question: "An important monument of the city, is a memorial built in commemoration of more than 80,000 Indian soldiers who were killed during World War I. The monument is an imposing 42 meters high arch and was designed by the famous architect Edwin Lutyens. Name this monument:",
        choice: ['Qutub Minar', 'Charminar', 'India Gate', 'Gwalior Fort'],
        answer: 'India Gate',
    },
    {
        id: 14,
        question: "During the last 150 years, many writers have contributed to the development of modern Indian literature, written in a number of regional languages as well as in English. One of the greatest Bengali writers, ___ became the first Indian to win the Nobel Prize for literature in 1913. Fill in the blanks:",
        choice: ['Kabir Das', 'Sarojini Naidu', 'Rabindranath Tagore', 'Kazi Nazrul Islam'],
        answer: 'Rabindranath Tagore',
    },
    {
        id: 15,
        question: "The National School of Drama(NSD) - one of the foremost theatre institutions in the world and the only one of its kind in India was set up by Sangeet Natak Akademi in?",
        choice: ['1969', '1953', '1959', '1963'],
        answer: '1959',
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
                    newData[4] = CURRENT_SCORE;        //////--------------- for game 4
                    newData[5] = 1;
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

        if (CLICKED == true)
        {
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
    imgContent.setAttribute("src", `./images_game4/${k + 1}.png`)

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