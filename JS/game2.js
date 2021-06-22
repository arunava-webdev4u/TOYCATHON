let questions = [
    {
        id: 1,
        question: "He discovered the sea route to India during the year 1497 – 1499. On 20th May, 1498, two years after he set his sail from Lisbon, Portugal, he arrived on the Western sea coast of India at Kozhikode (Calicut), Kerala. This was the first time when a European had arrived in India via the sea. Hence, he is credited with the discovery of the sea route to India. Sailing down the western coast of Africa and rounding the Cape of Good Hope, his expedition had numerous halts in Africa before reaching the trading post of Calicut. Who is he?",
        choice: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Marco Polo'],
        answer: 'Vasco da Gama',
        about: "Vasco da Gama was a Portuguese explorer and the first European to reach India by sea. ",
    },
    {
        id: 2,
        question: "On 13 May 1998, two additional fission devices were detonated, and the Indian government led by Prime Minister Atal Bihari Vajpayee shortly convened a press conference to declare India as a full-fledged nuclear state. What was the codename of the first nuclear tests conducted by India on 18 May 1974, in Pokhran, Rajasthan ?",
        choice: ['Operation Vijay', 'Operation Shakti', 'Smiling Buddha', 'Operation Ashwamedh'],
        answer: 'Smiling Buddha',
        about: "Operation Smiling Buddha was the assigned code name of India's first successful nuclear bomb test on 18 May 1974.",
    },
    {
        id: 3,
        question: "India is the most successful team in Field Hockey at the Olympics, with 11 medals in total, including 8 gold medals. The golden era of Indian hockey ended with a gold medal at the 1980 Moscow Olympics. India won its first Olympic hockey gold in?",
        choice: ['1930', '1928', '1932', '1927'],
        answer: '1928',
        about: "India competed at the 1928 Summer Olympics in Amsterdam, Netherlands. The men's field hockey team won the gold medal.",
    },
    {
        id: 4,
        question: "In today’s time, when success is measured by how much you excel in a particular field, it becomes important for students to choose the right university; as it can help them in exploring their interest as well as grab opportunities, right from their college days. Name the first University established in India ",
        choice: ['University of Calcutta', 'Delhi University', 'Madras University', 'Banaras Hindu University'],
        answer: 'University of Calcutta',
        about: "The University of Calcutta (informally known as Calcutta University or abbreviated as CU) is a collegiate public state research university located in Kolkata, West Bengal, India. It was established on 24 January 1857 and is the first multidisciplinary and Western-style institution in Asia. ",
    },
    {
        id: 5,
        question: "The first India national elections under the Constitution held in the year?",
        choice: ['1948', '1950', '1952', '1955'],
        answer: '1952',
        about: "General elections were held in India between 25 October 1951 and 21 February 1952. They were the first elections to the Lok Sabha after independence in August 1947.",
    },
    {
        id: 6,
        question: "One of the oldest Indo-European languages for which substantial documentation exists, Sanskrit is the primary sacred language of Hinduism, and has been used as a philosophical language in the religions of Hinduism, Buddhism, and Jainism. Sanskrit is the official language of which state among the following?",
        choice: ['Bihar', 'Uttar Pradesh', 'Uttarakhand', 'Madhya Pradesh'],
        answer: 'Uttarakhand',
        about: "Under Article 345 of the Constitution, the Uttarakhand Legislative Assembly has passed the proposal to make Hindi the official language and Sanskrit the second official language of Uttarakhand state.",
    },
    {
        id: 7,
        question: "India became a member of the United Nations in which year?",
        choice: ['1944', '1945', '1947', '1952'],
        answer: '1945',
        about: "On June 26, 1945, India was among 50 countries to sign the UN charter.",
    },
    {
        id: 8,
        question: "An immense mausoleum of white marble, built in Agra between 1631 and 1648, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. It is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. The Taj Mahal was built by which Mughal emperor?",
        choice: ['Shah Jahan', 'Akbar', 'Babur', 'Jahangir'],
        answer: 'Shah Jahan',
        about: "Often described as one of the wonders of the world, the stunning 17th Century white marble Taj Mahal was built by Mughal emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal",
    },
    {
        id: 9,
        question: "It was launched on April 19, 1975, from Kapustin Yar, a Russian rocket launch and development site using a Kosmos-3M launch vehicle. It was built by the Indian Space Research Organisation (ISRO).  India made history when it launched its first artificial satellite, thus making her entry into the world of satellite technology. Which is India's first artificial satellite?",
        choice: ['INSAT', 'Aryabhata', 'Bhaskara', 'Rohini'],
        answer: 'Aryabhata',
        about: "The Aryabhata spacecraft, named after the famous Indian astronomer, was India's first satellite; it was completely designed and fabricated in India and launched by a Soviet Kosmos-3M rocket from Kapustin Yar on April 19, 1975.",
    },
    {
        id: 10,
        question: "The symbol π (pronounced paɪ in English) is the 16th letter of the Greek alphabet and is used in mathematics to stand for a real number of special significance. The value of 'pi' was first calculated by the Indian mathematician ",
        choice: ['Varahamihira', 'Aryabhata', 'Panini', 'Budhayana'],
        answer: 'Budhayana',
        about: "The value of “pi” was first calculated by the Indian Mathematician Budhayana, and he explained the concept of what is known as the Pythagorean Theorem. He discovered this in the 6th century, long before the European mathematicians.",
    },
    {
        id: 11,
        question: "Who is the first Indian woman to climb Mt. Everest?",
        choice: ['Premlata Agarwal', 'Arunima Sinha', 'Bachendri Pal', 'Krishna Patil'],
        answer: 'Bachendri Pal',
        about: "Bachendri Pal, (born May 24, 1954, Nakuri, India), Indian mountaineer who in 1984 became the first Indian woman to reach the summit of Mount Everest. Pal was born into a rural working-class family in what is now Uttarakhand and was one of seven children.",
    },
    {
        id: 12,
        question: "The Reserve Bank of India (RBI) is the central bank of India whose primary function is to manage and govern the financial system of the country. The central bank regulates the issue and supply of the Indian rupee. It also looks after the central government’s money. In which year the Reserve Bank of India was nationalised?",
        choice: ['1947', '1948', '1949', '1952'],
        answer: '1949',
        about: "The Reserve Bank of India was nationalised with effect from 1st January, 1949 on the basis of the Reserve Bank of India (Transfer to Public Ownership) Act, 1948.",
    },
    {
        id: 13,
        question: "Her new name was Teresa. In India she received a second call from God: to help the poor while living among them. She founded a new sisterhood, Missionaries of Charity. Mother Teresa and her helpers built homes for orphans, nursing homes for lepers and hospices for the terminally ill in Calcutta. Mother Teresa received Nobel Peace Prize in the year",
        choice: ['1979', '1980', '1982', '1985'],
        answer: '1979',
        about: "The Norwegian Nobel Committee has awarded the Nobel Peace Prize for 1979 to Mother Teresa.",
    },
    {
        id: 14,
        question: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule and in turn inspired movements for civil rights and freedom across the world. Who was the first to address Mahatma Gandhi as the 'Father of Nation'",
        choice: ['Subhas Chandra Bose', 'Rabindra Nath Tagore', 'B G Tilak', 'JL Nehru'],
        answer: 'Subhas Chandra Bose',
        about: "S.C Bose in 1944 in a radio address from Singapore addressed Gandhiji as Father of the Nation.",
    },
    {
        id: 15,
        question: "Who is known as the Napoleon of India?",
        choice: ['Samudragupta', 'Chandragupta I', 'Ramagupta', 'Vikramaditya'],
        answer: 'Samudragupta',
        about: "Samudragupta (335-375 AD) of the Gupta dynasty is known as the Napoleon of India. Historian A V Smith called him so because of his great military conquests known from the 'Prayag Prashasti' written by his courtier and poet Harisena, who also describes him as the hero of a hundred battles.",
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
    imgContent.setAttribute("src", `./images_game2/${k + 1}.png`)

    let close = document.querySelector("#close");
    close.addEventListener("click", function () {
        popup.style.display = "none";
        return;
    });
}

function lateCall()
{
    j = QUESTION_COUNTER-1
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