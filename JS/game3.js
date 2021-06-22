let questions = [
    {
        id: 1,
        question: "Which state is known as India's Spice Garden?",
        choice: ['Kerala', 'Karnataka', 'Assam', 'Andhra Pradesh'],
        answer: 'Kerala',
    },
    {
        id: 2,
        question: "Situated at an altitude of 2,258 metres (7,407 ft). Which railway station is at highest altitude in India?",
        choice: ['Ghum', 'Ooty', 'Shimla', 'Solan'],
        answer: 'Ghum',
    },
    {
        id: 3,
        question: "Bharatanatyam, a pre-eminent Indian classical dance form, presumably the oldest classical dance heritage of India is regarded as the mother of many other Indian classical dance forms. 'Bharata Natyam' is a classical dance from the state?",
        choice: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh'],
        answer: 'Tamil Nadu',
    },
    {
        id: 4,
        question: "There can be no joy greater than reading, no friend greater than knowledge.” Which one is the most literate state in India, according to 2011 census?",
        choice: ['Mizoram', 'Kerala', 'Lakshadweep', 'Manipur'],
        answer: 'Kerala',
    },
    {
        id: 5,
        question: "The benefits of bicycles have been tirelessly elaborated upon; bicycles improve health, ease congestion, save money, use less space, and provide efficient transportation with zero fuel consumption and zero carbon emissions. The first Indian state to have a dedicated pop-up cycle lane is?",
        choice: ['Bangalore', 'Guwahati', 'Pune', 'Madurai'],
        answer: 'Bangalore',
    },
    {
        id: 6,
        question: "The National Stock Exchange of India is located at?",
        choice: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'],
        answer: 'Mumbai',
    },
    {
        id: 7,
        question: "Named after the main material in computer microprocessors, Silicon Valley is home to dozens of major technology, software, and internet companies. Silicon Valley is one of the wealthiest regions in the world, and one of the hottest real estate markets.Which among the following is known as 'Silicon Valley of India'?",
        choice: ['Delhi', 'Kolkata', 'Hyderabad', 'Bengaluru'],
        answer: 'Bengaluru',
    },
    {
        id: 8,
        question: "Which one of the following longitudes determine the Indian Standard Time?",
        choice: ['80.5° E', '81.5° E', '82.5° E', '85.5° E'],
        answer: '82.5° E',
    },
    {
        id: 9,
        question: "A British-built HEC 2M computer, happened to be the first digital computer in India, which was imported and installed during 1955. Where was India's first computer installed?",
        choice: ['Indian Institute of Technology, Delhi', 'Indian Iron and Steel Co Ltd., Burnpur', 'Indian Statistical Institute, Calcutta', 'Indian Institute of Science, Bangalore'],
        answer: 'Indian Statistical Institute, Calcutta',
    },
    {
        id: 10,
        question: "It is one of the largest freshwater lakes in Asia. The lake basin was formed by the result of tectonic activity and is fed by the Jhelum River. In 1990, it was designated as a Wetland of International Importance under the Ramsar Convention. Name the largest freshwater lake in India:",
        choice: ['Wular Lake, Kashmir', 'Hussain Sagar, Hyderabad', 'Ramgarh Lake, Rajasthan', 'Dal Lake, Kashmir'],
        answer: 'Wular Lake, Kashmir',
    },
    {
        id: 11,
        question: "The world's third highest mountain. It is located at the India-Nepal border in the Himalayas at an altitude of 8586 m above sea level. It is known all over the world for its breathtaking views. A clear day makes you feel that the mountains are just the image of a white wall hanging from the sky. It is considered as a sacred mountain by the natives of Sikkim. It is the highest mountain peak in India. Which one is the highest mountain peak in India?",
        choice: ['Everest', 'Nanda Devi', 'Kanchenjunga', 'Yamunotri'],
        answer: 'Kanchenjunga',
    },
    {
        id: 12,
        question: "Where is the headquarters of Indian Railway is located",
        choice: ['Delhi', 'Kolkata', 'Pune', 'Mumbai'],
        answer: 'Delhi',
    },
    {
        id: 13,
        question: "In which of the following states, Garo, Khasi and Jaintia hills are located",
        choice: ['Jammu and Kashmir', 'Manipur', 'Meghalaya', 'Arunachal Pradesh'],
        answer: 'Meghalaya',
    },
    {
        id: 14,
        question: "We depend on forests for our survival, from the air we breathe to the wood we use. Besides providing habitats for animals and livelihoods for humans, forests also offer watershed protection, prevent soil erosion and mitigate climate change. The state having the largest area of forest cover in India is?",
        choice: ['Arunachal Pradesh', 'Haryana', 'Madhya Pradesh', 'Assam'],
        answer: 'Madhya Pradesh',
    },
    {
        id: 15,
        question: "French is one of the official language of which union territories",
        choice: ['Goa', 'Daman and Diu', 'Puducherry', 'Lakshadweep'],
        answer: 'Puducherry',
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
                    newData[3] = CURRENT_SCORE;        //////--------------- for game 3
                    newData[4] = 1;
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
    imgContent.setAttribute("src", `./images_game3/${k + 1}.png`)

    let close = document.querySelector("#close");
    close.addEventListener("click", function () {
        popup.style.display = "none";
        return;
    });
}

function popupFun(k) {
    popup.style.display = "flex";
    txtContent.innerText = questions[k].about;
    imgContent.setAttribute("src", `./images_game3/${k + 1}.png`)

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