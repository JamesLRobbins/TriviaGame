$( document ).ready(function() {
    question1();
});

    //Variables
var correct = 0;
var incorrect = 0;
var misses = 0;
var correctAns;
var incorrectAns;
var count = 30;
var countdown = setInterval(function() {
    count--;
    document.getElementById("timer").textContent = count
    if(count <= 0) {
        clearInterval(countdown)
    }

}, 1000)
var questions = ["This voice actor not only voiced Doug Funnie and Roger Klotz on &quot;Doug&quot;, but Ren & Stimpy as well.", "On season 4, episode 9 of &quot;Are you afraid of the dark?&quot;, a young artist named Ethan who dreams of being a comic book artist has to stop an evil jester from turning everyone into uncontrollable, drooling, laughing idiots. What is the title of this episode?", "On the show CatDog, the voice actor who played Dog also went and voiced this popular undersea character.", "The show “The Adventures of Pete & Pete”, featured the strongest man in the world.  What was his name?", "What was the favored drink that Norbert and Daggit enjoyed on the show “Angry Beavers”?", "On season 1 episode 2 of Salute Your Shorts, the character Bobby tells the story about a ghostly dream-invading custodian named Zeke the Plumber.  What body part is Zeke missing?", "What was the name of the comic book store that Rocko worked at on Rocko’s Modern Life?", "Devo frontman Mark Mothersbaugh wrote the theme for the “Rugrats” and was also the primary inspiration behind the design of what character?", " SNICK was a two hour programming block that aired on Saturday nights.  What was the original line-up of shows?", "On what show was the titular character involved in an accident where they were drenched in a top-secret chemical called GC-161 that ends up granted special abilities such as telekinesis, shooting electricity from their fingers, as well as the ability to dissolve into a mobile puddle of water."]
var answers = [["Dan Castellaneta", "Billy West", "John DiMaggio", "Michael Bell"], ["The Tale of the Captured Souls", "The tale of Laughing in the Dark", "The Tale of The Crimson Clown", "The Tale of the Ghastly Grinner"], ["Spongebob Squarepants", "Patrick Star", "Squidward", "Mr. Krabbs"], ["Artie", "Stewart", "Wayne", "Teddy"], ["YooHoo", "Yahoo", "Kool-Aid", "Hi-C"], ["Right eye", "Left Arm", "RIght Leg", "Nose"], ["Kind of a lot O’ Comics", "Sort of a lot O’ Comics", "Conglom-O", "Definitely a lot O’ Comics"], ["Tommy Pickles", "Chuckie Finster", "Stu Pickles", "Chas Finster"], ["Clarissa Explains it all; Roundhouse; The Ren & Stimpy Show; Are you afraid of the dark?", "All That; Roundhouse; The Ren & Stimpy Show; Are you afraid of the dark?", "Kenan & Kel; All That; The Mystery Files of Shelby Woo; KaBlam!", "Doug; Rugrats; Rocko’s Modern Life; The Ren & Stimpy Show"], ["Clarissa Explains it all", "The Mysterious Files of Shelby Woo", "The Journey of Allen Strange", "The Secret World of Alex Mack "]]
var correctAnswers = [1, 3, 0, 0, 1, 3, 0, 1, 0, 3];

function question1(){
$("span").html(count);
$(".question").html(questions[0])
$("#answer1").html("A. " + answers[0][0]);
$("#answer2").html("B. " + answers[0][1])
$("#answer3").html("C. " + answers[0][2])
$("#answer4").html("D. " + answers[0][3])


setTimeout(function(){ 
    misses++
    $(".question").html("Times Up!")
    $("#answer1").html("");
    $("#answer2").html("");
    $("#answer3").html("");
    $("#answer4").html("");
    setInterval(function() {
        question2();
    }, 3000)
    }, 30000);
    


$("#answer1", "#answer2", "#answer3", "#answer4").on("click", function() {
    if (answers[0][1] === correctAnswers[0]) {
        correct++;
        alert("Correct!")
    }
    clearInterval(countdown)
    setInterval(function() {
        nextQuestion();
    }, 3000)

}) 


}



function question2() {
    var count = 30;
    var countdown = setInterval(function() {
    count--;
    document.getElementById("timer").textContent = count
    if(count <= 0) {
        clearInterval(countdown)
    }

}, 1000)
$("span").html(count);
$(".question").html(questions[1])
$("#answer1").html("A. The Tale of the Captured Souls")
$("#answer2").html("B. The Tale of Laughing in the Dark")
$("#answer3").html("C. The Tale of The Crimson Clown")
$("#answer4").html("D. The Tale of the Ghastly Grinner")



}


//End Screen
function gameEnd(){
$(".question").html("Done!  Let's see how you did!");
$("#answer1").html("Correct: " + correct);
$("#answer2").html("Incorrect: " + incorrect);
$("#answer3").html("Misses");
$("#answer4").html("Start Over?");

$("#answer4").on("click", function() {
    question1();
})

}

//Timer Function
function countdown() {
    var count = 30;
    var countdown = setInterval(function() {
    count--;
    document.getElementById("timer").textContent = count
    if(count <= 0) {
        clearInterval(countdown)
    }

}, 1000)

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
}
}

//Check answer
function checkAnswer() {
    for(var i = 0; i < answers.length; i++)
    for (var j = 0; j < correctAnswers.length; j++)
       if(answers.length === correctAnswers.length) {
           alert("Correct!")
       }

    }