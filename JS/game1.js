let questions = [
    {
        id: 1,
        question: "A ‘capital’ is a city where a region's government is located.This is where government buildings are and where government leaders work.At the county level, capitals are usually called ‘county seats’. Which city among the following is the capital of India?",
        choice: ['Mumbai', 'Delhi', 'Bengaluru', 'Kolkata'],
        answer: 'Delhi',
        about: "Delhi was founded by Mughal Emperor Shah Jahan in the year 1649 and named it Shahjahanabad. Weather of Delhi is very unique because in summer it will become too hot, during winter it will be too cold and during monsoon it has amazing rainfall. As it used to be the Mughal’s empire, you can see its fluence on Delhi’s Cuisine as well. In fact Mughlai cuisine originated from Delhi itself.",
    },
    {
        id: 2,
        question: "In Hindu mythology and the Vedic era, this animal was a symbol of power. It was often depicted as the animal-vehicle of the various forms of Goddess Durga. India is home to 80 percent of this animal in the world. Name the national animal of India?",
        choice: ['The Tiger', 'The Giraffe', 'The Elephant', 'The Lion'],
        answer: 'The Tiger',
        about: "Tigers are biggest cats in the world. The can live up to 25 years!!",
    },
    {
        id: 3,
        question: "Currency is a medium of exchange for goods and services. In short, it is the money in the form of paper or coins, usually issued by a government and generally accepted at its face value as a method of payment. This is the national currency of India?",
        choice: ['Yen', 'Dollar', 'Pound', 'Rupee'],
        answer: 'Rupee',
        about: "The Indian rupee is the official currency of the Republic of India. The first rupee in India was introduced by Sher Shah Suri and the Bank of Hindustan issued the first paper note. The Reserve Bank of India issues and regulates the currency related provisions.",
    },
    {
        id: 4,
        question: "I am a symbol of grace, joy, beauty and love. I am a large, majestic, colorful, swan-sized bird with a fan-shaped crest of feathers on its head, a white patch under the eye and a long-slender neck. My significance is attached to cultures of India, Far East, Ancient Persia, Greek and Christian. In Hinduism, I am the image of the god of thunder, rains and war.",
        choice: ['The sparrow', 'The peacock', 'The pigeon', 'The bulbul'],
        answer: 'The peacock',
        about: "As omnivorous birds, peacocks fed on various edible items regardless of being a plant or animal source.Light striking from different angles makes a peacock’s feather change colors.",
    },
    {
        id: 5,
        question: "Gitanjali, written by Rabindranath Tagore is a collection of ",
        choice: ['101 poems', '120 poems', '157 poems', '184 poems'],
        answer: '157 poems',
        about: "Medieval Indian lyrics of devotion provided Tagore’s model for the poems of Gītāñjali. He also composed music for these lyrics. Love is the principal subject, although some poems detail the internal conflict between spiritual longings and earthly desires.",
    },
    {
        id: 6,
        question: "The Indian National Flag is a tri-colored flag with an Ashok Chakra in the centre. You will find these three colours in the flag if you start from the top to the bottom:",
        choice: ['white yellow green', 'white green saffron', 'saffron white green', 'green white saffron'],
        answer: 'saffron white green',
        about: "The Indian National Flag was adopted in its present form on July 22, 1947, during the meeting of the Constituent Assembly. By then, the design and colors of the national flag were changed five times.",
    },
    {
        id: 7,
        question: "I am native to India and thus truly Indian. Since time immemorial, I have been cultivated in India. In ancient times as well, the deliciousness of this fruit has been defined by many renowned poets. I am the national fruit of India:",
        choice: ['apple', 'guava', 'mango', 'orange'],
        answer: 'mango',
        about: "Mango is designated as king of fruits because it is reigning the hearts of people since long through its various attributes including heat beater, remedial measures, taste, ingredient to various other yummy recipes like the pickle, mango salsa, mango desserts, mango cupcakes and much more.",
    },
    {
        id: 8,
        question: "I represent eternal life, because of my ever-expanding branches. The country’s unity is symbolised by my huge structure and deep roots. I have immense medicinal properties and is associated with longevity. I give shelter to many different kinds of animals and birds, which represent India and its people from different races, religions and castes. I am the national tree of India:",
        choice: ['banyan', 'peepal', 'neem', 'tulsi'],
	    answer: 'banyan',
        about: "Interesting facts about the Banyan tree The banyan tree is a good source of oxygen. There are more than 750 species of fig trees and Banyan tree is one of them. It was adopted as the national tree of India in 1950",
},
    {
        id: 9,
        question: "This flower holds a very significant position in Indian mythology. It is the flower of goddess Laxmi and symbolises wealth, prosperity, and fertility. It remains untouched from impurity and symbolises purity, achievement, long life and good fate. This is the national flower of India: ",
        choice: ['lotus', 'sunflower', 'rose', 'jasmine'],
        answer: 'lotus',
        about: "Lotus can reach only 125 cm (50 inches) in height but it spreads 3 meters (10 feet) horizontally (width). Lotus flowers are found in white, pink, red, blue, purpule and yellow colors and they grow in shallow and murky waters. According to a traditional story, the more muddy and opaque the water, the more beautiful the Lotus flower when it emerges.",
    },
    {
        id: 10,
        question: "The Indian Standard Time(IST) refers to the local time of which city: ",
        choice: ['Banaras', 'Delhi', 'Allahabad', 'Kolkata'],
        answer: 'Allahabad',
        about: "Indian Standard Time - IST is Five and a Half hours ahead of UTC / GMT. India has no Daylight Saving Time (DST) although the country spans more than 2000 Km East to West. Some of the North eastern states have a different 'Tea Garden Time' to save Daylight.",
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

            for (let m = 0; m <= 3; m++){
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

            for (let n = 0; n <= 3; n++) {
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

function popupFun(k) {
    popup.style.display = "flex";
    txtContent.innerText = questions[k].about;
    imgContent.setAttribute("src", `./images_game1/${k + 1}.png`)

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
function total(arr)
{
    let t = 0;
    for (let j = 0; j < arr.length; j++)
    {
        t += arr[j];
    }
    return t;
}