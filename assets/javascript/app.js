//Questions/Answers

var trivia = [
    {
        question: "This voice actor not only voiced Doug Funnie and Roger Klotz on &quot;Doug&quot;, but Ren & Stimpy as well.",
        choices:  ["Dan Castellaneta", "Billy West", "John DiMaggio", "Michael Bell"],
        answer: "Billy West"
    },

    {
        question:  "On season 4, episode 9 of &quot;Are You Afraid of the Dark?&quot;, a young artist named Ethan who dreams of being a comic book artist has to stop an evil jester from turning everyone into uncontrollable, drooling, laughing idiots. What is the title of this episode?",
        choices:  ["The Tale of the Captured Souls", "The Tale of Laughing in the Dark", "The Tale of The Crimson Clown", "The Tale of the Ghastly Grinner"],
        answer:  "The Tale of the Ghastly Grinner"
    },

    {
        question:  "On the show &quot;CatDog&quot;, the voice actor who played Dog also went and voiced this popular undersea character.",
        choices:  ["Spongebob Squarepants", "Patrick Star", "Squidward", "Mr. Krabbs"],
        answer: "Spongebob Squarepants"
    },

    {
        question: "The show &quot;The Adventures of Pete & Pete&quot;, featured the strongest man in the world.  What was his name?",
        choices: ["Stewart", "Artie", "Wayne", "Teddy"],
        answer: "Artie"
    },

    {

        question: "What was the favored drink that Norbert and Daggit enjoyed on the show &quot;Angry Beavers&quot;?",
        choices: ["YooHoo", "Yahoo", "Kool-Aid", "Hi-C"],
        answer: "Yahoo"

    },

    {

        question: "On season 1 episode 2 of Salute Your Shorts, the character Bobby tells the story about a ghostly dream-invading custodian named Zeke the Plumber.  What body part is Zeke missing?",
        choices: ["Right eye", "Left Arm", "Right Leg", "Nose"],
        answer: "Nose"

    },    

    {
        question: "What was the name of the comic book store that Rocko worked at on &quot;Rocko&apos;s Modern Life&quot;?",
        choices: ["Kind of a lot O Comics", "Sort of a lot O Comics", "Conglom-O", "Definitely a lot O Comics"],
        answer:  "Kind of a lot O Comics"
    },

    {
        question: "Devo frontman Mark Mothersbaugh wrote the theme for the &quot;Rugrats&quot; and was also the primary inspiration behind the design of what character?",
        choices: ["Tommy Pickles", "Chuckie Finster", "Stu Pickles", "Chas Finster"],
        answer: "Chuckie Finster"
    },

    {
        question: "SNICK was a two hour programming block that aired on Saturday nights.  What was the original line-up of shows?",
        choices: ["Clarissa Explains It All; Roundhouse; The Ren & Stimpy Show; Are You Afraid Of The Dark?", "All That; Roundhouse; The Ren & Stimpy Show; Are You Afraid Of The Dark?", "Kenan & Kel; All That; The Mystery Files of Shelby Woo; KaBlam!", "Doug; Rugrats; Rocko’s Modern Life; The Ren & Stimpy Show"],
        answer: "Clarissa Explains It All; Roundhouse; The Ren & Stimpy Show; Are You Afraid Of The Dark?"
    },

    {
        question: "On what show was the titular character involved in an accident where they were drenched in a top-secret chemical called GC-161 that ends up granting special abilities such as telekinesis, shooting electricity from their fingers, as well as the ability to dissolve into a mobile puddle of water.",
        choices: ["Clarissa Explains It All", "The Mysterious Files of Shelby Woo", "The Journey of Allen Strange", "The Secret World of Alex Mack"],
        answer: "The Secret World of Alex Mack"
    }
]

//Variables

var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var misses = 0;
var timer;

//Next Question

function nextQuestion() {

    var quizOver = (trivia.length - 1) === currentQuestion;
    if (quizOver) {
        gameEnd();
        clearInterval(timer)
    } else {
    currentQuestion++;
    loadQuestion();
    }
}


//Timer

function timeUp() {
    clearInterval(timer);
    misses++
    nextQuestion();
}

function countDown() {
    counter--;

    $("#timer").html('Time Remaining: ' + counter)

    if (counter === 0) {
        timeUp();
    }
}

//Display choices and questions

function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    var question = trivia[currentQuestion].question; // 
    var choices = trivia[currentQuestion].choices; // 

    $('#timer').html('Time Remaining: ' + counter);
    $('#game').html(`
        <h3>${question}</h3>
        ${loadChoices(choices)}
    `);
}

function loadChoices(choices) {
    $("#timer").show();
    var result = '';

    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }

    return result;
}

//Correct or Wrong
$(document).on("click", ".choice", function() {
    clearInterval(timer)
    var userChoice = $(this).attr("data-answer");
    var correctAnswer = trivia[currentQuestion].answer;
    if (correctAnswer === userChoice) {
        score++;
        nextQuestion();
    } else {
        lost++;
        nextQuestion();
    }
})

// End Screen

function gameEnd() {
    var result =`
        <p>Questions right: ${score}</p>
        <p>Questions wrong: ${lost}</p>
        <p>Questions missed: ${misses}</p>
        <button id="reset">Try Again</button>
    `;
    clearInterval(timer)
    $("#timer").hide();
    $("#game").html(result);
        
}

$(document).on("click", "#reset", function() {
    counter = 30;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    misses = 0;
    timer = null;

    loadQuestion();
    
})


$("#startgame").click(function() {
    $("#startgame").remove();
    $("#timer").html(counter);
    loadQuestion();
})
