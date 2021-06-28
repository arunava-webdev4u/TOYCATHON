let questions = [
    {
        id: 1,
        question: "Officially, Indian Republic Day celebration continues for a duration of",
        choice: ['One day', 'Two day', 'Three day', 'Four day'],
        answer: 'Three day',
        about: "Republic Day is a national holiday in India. It honours the date on which the Constitution of India came into effect on 26 January 1950 replacing the Government of India Act (1935) as the governing document of India and thus, turning the nation into a newly formed republic.",
        hint: 'How many colours are there in the Indial national flag?',
    },
    {
        id: 2,
        question: "National Youth day is celebrated in the memory of",
        choice: ['Jawaharlal Nehru', 'Subhash Chandra Bose', 'Swami Vivekananda', 'None of the above'],
        answer: 'Swami Vivekananda',
        about: "National Youth Day is celebrated on January 12, every year in India to honor the birth anniversary of Swami Vivekananda. National Youth Day is celebrated on January 12, every year in India to honor the birth anniversary of Swami Vivekananda, one of India's greatest leaders and believers of youth power.",
        hint: 'Hindu spiritual leader',
    },
    {
        id: 3,
        question: "Which one is the longest National Highway of India",
        choice: ['NH 5', 'NH 7', 'NH 44', 'NH 10'],
        answer: 'NH 44',
        about: "National Highway 44 – It is the longest national highway in India with a length of 3,745 kilometres running from Srinagar in the north to Kanyakumari in the South. This highway connects 11 states and about 30 important cities with each other.",
        hint: 'Not an odd number',
    },
    {
        id: 4,
        question: "Reading newspapers is a good habit and it is already part of modern life. This habit will widen your outlook and will enrich your knowledge. Reading the newspaper makes you well informed. The first Indian newspaper to offer an online edition on internet: ",
        choice: ['Times of India', 'Hindustan Times', 'Anandabazar Patrika', 'The Hindu'],
        answer: 'The Hindu',
        about: "In 1986 the Delhi edition is launched. Pages are transmitted from madras via satellite. In 1995 The Hindu becomes the first Indian newspaper to have an internet edition.",
        hint: 'Started in 1878 as a weekly, became a daily in 1889.',
    },
    {
        id: 5,
        question: "On which spacecraft did Rakesh Sharma make his historic trip to Space?",
        choice: ['Salyut 7', 'Soyuz-T', 'Apollo 11', 'Progress 1'],
        answer: 'Soyuz-T',
        about: "On April 3, 1984, Sharma flew Soyuz T-11 with two Soviet cosmonauts, commander Yury Malyshev and flight engineer Gennady Strekalov, to the space station Salyut 7 and made history 37 years ago.",
        hint: 'Not a number',
    },
    {
        id: 6,
        question: "The first IIT was established in 1951 known as",
        choice: ['IIT Delhi', 'IIT Kanpur', 'IIT Kharagpur', 'IIT Madras'],
        answer: 'IIT Kharagpur',
        about: "Indian Institute of Technology Kharagpur (IIT Kharagpur) is a public technical and research university established by the government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance.",
        hint: 'In west Bengal',
    },
    {
        id: 7,
        question: "First Minister of Education who have been awarded with Bharat Ratna Award",
        choice: ['Morarji Desai', 'Abul Kalam Azad', 'Zakir Hussain', 'J P Narayan'],
        answer: 'Abul Kalam Azad',
        about: "Maulana Abul Kalam Azad was the first education minister of independent India, who served from 15 August 1947 until 2 February 1958. In 1992 he was posthumously awarded Indias highest civilian award, the Bharat Ratna.",
        hint: 'Born: 11 November 1888 Makkah, Hejaz, Ottoman Empire',
    },
    {
        id: 8,
        question: "World's first Granite Temple was built in India, find the which one",
        choice: ['Brihadeeswarar Temple', 'Somnath Temple', 'Tirupati Temple', 'Sabarimala'],
        answer: 'Brihadeeswarar Temple',
        about: "'The Brihadeeswara Temple' at Thanjavur in Tamil Nadu which is the world's first all-granite temple.",
        hint: 'In Tamil Nadu',
    },
    {
        id: 9,
        question: "Which one is the largest Zoological park (Zoo) in India.",
        choice: ['Arignar Anna Zoological Park, Chennai', 'Nandankanan Zoological Park, Bhubneswar', 'Nehru Zoological Park, Hyderabad', 'Mysore Zoo, Mysore'],
        answer: 'Arignar Anna Zoological Park, Chennai',
        about: "Arignar Anna Zoological Park (abbreviated AAZP), also known as the Vandalur Zoo, is a zoological garden located in Vandalur, is in the southwestern part of Chennai, Tamil Nadu, about 31 kilometres (19 mi) from the Chennai Central and 15 kilometres (9.3 mi) from Chennai Airport. Established in 1855, it is the first public zoo in India.",
        hint: 'Chennai',
    },
    {
        id: 10,
        question: "Which state is officially declared as the first Digital State of India",
        choice: ['Kerala', 'Karnataka', 'Maharashtra', 'Tamil Nadu'],
        answer: 'Kerala',
        about: "President Pranab Mukherjee declared Kerala a digital state on Feb 27, 2016.",
        hint: 'South west state',
    },
    {
        id: 11,
        question: "The death anniversary day of Rajiv Gandhi is observed as",
        choice: ['National Integration Day', 'Peace Day', 'Anti-Terrorism Day', 'Secular Day'],
        answer: 'Anti-Terrorism Day',
        about: "Anti Terrorism Day is observed every year on May 21, the death anniversary of former prime minister Rajiv Gandhi. In 1991, on this day he was assassinated by the LTTE terrorists while campaigning for the Congress party at Sriperumbudur in Tamil Nadu.",
        hint: 'Anti-Terrorism Day',
    },
    {
        id: 12,
        question: "The official duration of the National Anthem of India is",
        choice: ['50 sec', '52 sec', '55 sec', '60 sec'],
        answer: '52 sec',
        about: "Jaya he, Jaya he, Jaya he, jaya jaya jaya jaya he. The above is the full version of the Anthem and its playing time is approximately 52 seconds.",
        hint: 'Not an odd number',
    },
    {
        id: 13,
        question: "Where the headquarters of the Indian Space Research Organization is located",
        choice: ['Mumbai', 'New Delhi', 'Hyderabad', 'Bengaluru'],
        answer: 'Bengaluru',
        about: "The Indian Space Research Organisation[a] (ISRO /ˈɪsroʊ/) or (IAST : Bhāratīya Antrikṣ Anusandhān Saṅgaṭhan) is the national space agency of India, headquartered in Bengaluru. It operates under Department of Space (DOS) which is directly overseen by the Prime Minister of India while Chairman of ISRO acts as executive of DOS as well.",
        hint: 'South India',
    },
    {
        id: 14,
        question: "In which year Sikkim declared as the first organic state of India",
        choice: ['2013', '2014', '2015', '2016'],
        answer: '2016',
        about: "In January 2016, Sikkim became India's first “100 per cent organic” state. Today, all farming in Sikkim is carried out without the use of synthetic fertilisers and pesticides, providing access to safer food choices and making agriculture a more environment-friendly activity.",
        hint: 'That year Summer Olympics are held in Rio de Janeiro, Brazil, the first time in a South American nation.',
    },
    {
        id: 15,
        question: "Which one Indian monument became the 'First historical Monument in the World' to debut on Twitter",
        choice: ['Taj Mahal', 'Fatehpur Sikri', 'Qutub Minar', 'Red Fort'],
        answer: 'Taj Mahal',
        about: "'(16-Aug-2015) Taj Mahal, the monument of love in Agra, made its debut on Twitter on Saturday to become the first wonder of the world to mark its presence on the social networking site. Uttar Pradesh chief minister Akhilesh Yadav launched the official handle @Taj Mahal on the occasion of Independence Day in Lucknow.'",
        hint: 'One of the Wonders of the World',
    },
    {
        id: 16,
        question: "The United Nations Organization (UNO) has declared the birthday of _____ as the 'World Students Day'",
        choice: ['Dr. APJ Abdul Kalam', 'Dr. Sarvapalli Radhakrishnan', 'Jawaharlal Nehru', 'C. V. Raman'],
        answer: 'Dr. APJ Abdul Kalam',
        about: "APJ Abdul Kalam. Did you know that United Nations Organization (U.N.O) had declared his birthday (October 15th) as “World Students Day“. It was back in 2010 that United Nations had decided to honour this great man. It is an honour that the man rightly deserves.",
        hint: ' Former president of india',
    },
    {
        id: 17,
        question: "National Unity Day is observed to mark the birthday of ___",
        choice: ['Indira Gandhi', 'Lal Bahadur Shastri', 'Rajiv Gandhi', 'Vallabhbhai Patel'],
        answer: 'Vallabhbhai Patel',
        about: "On October 31 (Saturday), the government is all set to observe ' National Unity Day ' to commemorate the 145th birth anniversary of Sardar Vallabhbhai Patel . In 2014, the government declared his birthday anniversary as Rashtriya Ekta Diwas and would flag off the 'Run for Unity' campaign.",
        hint: 'Iron Man of India',
    },
    {
        id: 18,
        question: "Which city is also known as the 'Cultural Capital of India'",
        choice: ['Kolkata', 'Varanasi', 'Allahabad', 'Puri'],
        answer: 'Kolkata',
        about: "Home to prominent intellectuals, Kolkata is regarded as an artistic and cultural capital of India. In northern Kolkata, the oldest part of the city, you'll find the stately mansions of famous Kolkatans such as Nobel Prize-winning poet Rabindranath Tagore.",
        hint: 'The Only City To Have Trams & Tanga',
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
let hint = document.querySelector('#hint');
let hintText = document.querySelector('#hint-text');
let h = JSON.parse(localStorage.getItem(username + "-hint"));
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


hint.addEventListener('click', function () {
    setTimeout(function () {
        hintText.style.visibility = "visible";
        if (h[4] === -1)
            hintText.innerText = "No more hints";
        else
            hintText.innerText = "Only " + h[4] + " hints left out of 5";
        setTimeout(function () {
            if (h[4] === -1)
                hintText.innerText = "No more hints";
            else
                hintText.innerText = "Hint: '" + questions[QUESTION_COUNTER - 1].hint + "'";
            setTimeout(function () {
                hintText.style.visibility = "hidden";
            }, 5000)
        }, 1000);
    }, 10);

    let updateHint;
    if (h[4] > -1) {
        h[4]--;
        localStorage.setItem(username + "-hint", JSON.stringify(h));
    }
});

// --------------------------program execution----------------------

nextButton.addEventListener('click', next); //allows you to skip questions

for (let i = 0; i <= 3; i++)
{
    options[i].addEventListener('click', function (el) {
        let CLICKED = true;
        let ans = el.path[0].innerText;
        let correctAns = questions[QUESTION_COUNTER - 1].answer.toString();
        let max = total(SCORE);

        if (ans === correctAns)
        {
            clickPlay(1);
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
        else
        {
            clickPlay(0);
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

function clickPlay(num) {
    var a1 = document.querySelector("#clk-right");
    var a0 = document.querySelector("#clk-wrong");

    if (num === 0)
        a0.play();
    if (num === 1)
        a1.play();
}