// Make it so that button disappears and question and answer choices appear
$('#start').on('click', function() {
    $('#start').remove();
    trivia.loadingQuestion();
});

// Tell you if answer right or wrong
$(document).on('click', '.answerButton', function(e){
    trivia.clicked(e);
});

// Array of objects for the questions, choices, answers, and associated image 
var questions = [
    {question: "What is the name of Hayao Miyazaki's studio?",
    answerChoices: ['Giblet', 
    'Ghibli', 
    'HM Studio', 
    'Miyazaki Studio'],
    answer: 'Ghibli',
    img: 'assets/images/studio-ghibli.jpg'
    },

    {question: "At the end of 'Spirited Away' who do we find out Haku really is?",
    answerChoices: ['The Kohaku river spirit',
    'The Hime fire spirit', 
    'The Janta water spirit', 
    'The Hoshi love spirit'],
    answer: 'The Kohaku river spirit',
    img: 'assets/images/kohaku.gif'
    },

    {question: "In the English version of 'Howl's Moving Castle', who does Calcifer's voice over?",
    answerChoices: ['Christian Bale', 
    'Billy Crystal', 
    'Crispin Freeman', 
    'Mark Silverman'],
    answer: 'Billy Crystal',
    img: 'assets/images/calcifer.gif'
    },

    {question: "In 'Howl's Moving Castle', who or what is Markl?",
    answerChoices: ["He is Howl's brother.",
    "It is a curse.",
    "It is Howl's castle.",
    "He is Howl's assistant."],
    answer: "He is Howl's assistant",
    img: 'assets/images/markl.gif'
    },

    {question: 'Which movie is about a five year old boy and his princess goldfish?',
    answerChoices: ['Princess Mononoke',
    'Ponyo on the Cliff',
    'Lupin III: Castle of Cagliostro',
    'Future Boy Conan'],
    answer: 'Ponyo on the Cliff',
    img: 'assets/images/ponyo.gif'
    },

    {question: 'I am a Princess of Humans who was raised by a God of the Forest. Who am I?',
    answerChoices: ['Chihiro',
    'Sheeta',
    'Sen',
    'Mononoke'],
    answer: 'Mononoke',
    img: 'assets/images/mononoke.gif'
    },

    {question: 'This is the story of a young witch learning magic in the big city. Which movie is this?',
    answerChoices: ['Nausicaä and the Valley of the Wind',
    "Kiki's Delivery Service",
    'The Cat Returns',
    'My Neighbor Totoro'],
    answer: "Kiki's Delivery Service",
    img: 'assets/images/kiki.gif'
    },

    {question: "In the movie 'Spirited Away', Chihiro befriends which combination of characters?",
    answerChoices: ['Yubaba, No Face, Boh',
    'No Face, Aogaeru, Zeniba',
    'Aogaeru, Kamajii, Lin',
    'No Face, Haku, Boh'],
    answer: 'No Face, Haku, Boh',
    img: 'assets/images/3.gif'
    },

    {question: "In 'Howl's Moving Castle', Howl has a missing organ. What is it?",
    answerChoices: ['His heart',
    'One of his lungs',
    'His brain',
    'His stomach'],
    answer: 'His heart',
    img: 'assets/images/heart.gif'
    }
//  Add more questions, might make into howl's moving castle 
];

// Game object and methods 
var trivia = {
    questions: questions,
    currentQuestion: 0, 
    counter: 10,
    right: 0,
    wrong: 0,
    leftUnanswered: 0,

// Every 1 second, decr the timer & post Q and A choices to page
    loadingQuestion: function(){
        timer = setInterval(trivia.countdown, 1000);
        $('.wrapper').html('<h2>' + questions[trivia.currentQuestion].question + '</h2>');

        for (var i = 0; i < questions[trivia.currentQuestion].answerChoices.length; i++) {
            $('.wrapper').append('<button class="answerButton" id="button-' + i + '"  data-name="' + questions[trivia.currentQuestion].answerChoices[i] +'">' + questions[trivia.currentQuestion].answerChoices[i] + '</button>');
        }

    },
// Change the timer, tracking when/if time runs out
    countdown: function(){
        trivia.counter--;
        $('#counter').html(trivia.counter);
        if (trivia.counter <=  0){
            console.log('Out of Time!');
            trivia.timesUp();
        }
    },
    timesUp: function (){
        clearInterval(timer);
        trivia.leftUnanswered++;
        $('.wrapper').html('<h2>Time is up amateur!</h2>');
        $('.wrapper').append('<h3>The right answer was: ' + questions[trivia.currentQuestion].answer + '</h3>');

// If last Q -> results screen, if not -> next Q  

        if (trivia.currentQuestion === questions.length - 1) {
            setTimeout(trivia.results, 2*1000);
        } else {
            setTimeout(trivia.nextQuestion, 2*1000);
        }
    },
// Reset counter for following question, move on to next Q (notified right or wrong)
    nextQuestion: function(){
        trivia.counter = 10;
        $('#counter').html(trivia.counter);
        trivia.currentQuestion++;
        trivia.loadingQuestion();
    },
// Stop timer & run right or wrong answer method 
    clicked: function(e){
        clearInterval(timer);
        if ($(e.target).data('name') === questions[trivia.currentQuestion].answer) {
        trivia.rightAnswer();
        } else {
        trivia.wrongAnswer();
        }
    },
// Add points if right, & say way to go -> take to next Q or results, if last Q
    rightAnswer: function(){
        console.log('Go you!');
        clearInterval(timer);
        trivia.right++;
        $('.wrapper').html('<h3>Way to go!</h3>');

        if (trivia.currentQuestion === questions.length - 1) {
            setTimeout(trivia.results, 2*1000);
        } else {
            setTimeout(trivia.nextQuestion, 2*1000);
        }
    },
    wrongAnswer: function(){
        console.log('Wrooooong!')
        clearInterval(timer);
        trivia.wrong++;
        $('.wrapper').html('<h3>Seriously...?</h3>');
// Tell you what the right answer was 
        $('.wrapper').append('<h3>The right answer was: ' + questions[trivia.currentQuestion].answer + '</h3>');


        if (trivia.currentQuestion === questions.length - 1) {
            setTimeout(trivia.results, 2*1000);
        } else {
            setTimeout(trivia.nextQuestion, 2*1000);
        }
    },
// When last Q is clicked 
    results: function(){
        clearInterval(timer);
        $('.wrapper').html('<h2>No More!</h2>');
        $('.wrapper').append('<h3>Right: ' + trivia.right + '</h3>');
        $('.wrapper').append('<h3>Wrong: ' + trivia.wrong + '</h3>');
        $('.wrapper').append('<h3>Left Unanswered: ' + trivia.leftUnanswered + '</h3>');
    },
    reset: function(){

    }
}