// Make it so that button disappears and question and answer choices appear
$('#start').on('click', function() {
    $('#start').remove();
    trivia.loadingQuestion();
});

// Tell you if answer right or wrong
$(document).on('click', '.answerButton', function(e){
    trivia.clicked(e);
});

// Button to activate reset method 
$(document).on('click', '#reset', function(){
    trivia.reset();
});

// Array of objects for the questions, choices, answers, and associated image 
var questions = [

    {question: "What color is Howl's jacket when Sophie first meets him?",
    answerChoices: ['Pink and Purple',
    'Blue and Pink',
    'Yellow and Blue',
    "He doesn't have a jacket"],
    answer: 'Blue and Pink',
    img: 'assets/images/howl.gif'
    },

    {question: "The Witch of the Waste arrives at the hat shop and insults Sophie. What does she call her?",
    answerChoices: ['The tackiest thing here',
    'The plainest thing here',
    'The ugliest thing here',
    'The most boring thing here'],
    answer: 'The tackiest thing here',
    img: 'assets/images/witch.gif'
    },

    {question: "What spell did the Witch of the Waste cast on Sophie?",
    answerChoices: ['To make her unable to speak',
    "To make her be forced to do all of the Witch's bidding",
    'To make her into an old woman',
    'To make her hated by everyone else'],
    answer: 'To make her into an old woman',
    img: 'assets/images/old.gif'
    },

    {question: "What does Sophie call the scarecrow?",
    answerChoices: ['Turnip-head',
    'Pumpkin-head',
    'Carrot-head',
    'Potato-head'],
    answer: 'Turnip-head',
    img: 'assets/images/turnipRain.gif'
    },

    {question: "In 'Howl's Moving Castle', who or what is Markl?",
    answerChoices: ["He is Howl's brother",
    "It is a curse",
    "It is Howl's castle",
    "He is Howl's assistant"],
    answer: "He is Howl's assistant",
    img: 'assets/images/assistant.gif'
    },

    {question: "What was the name of Howl's fire demon?",
    answerChoices: ['Pyro',
    'Calcifer',
    "He didn't have a name",
    'Billy'],
    answer: 'Calcifer',
    img: 'assets/images/blueFire.gif'
    },

    {question: "What is Howl's natural hair colour?",
    answerChoices: ['Blonde',
    'Brown',
    'Red',
    'Black'],
    answer: "Black",
    img: 'assets/images/goop.gif'
    },

    {question: "What colour did Howl's hair turn after Sophie messed up his magic potions in the bathroom?",
    answerChoices: ['Green',
    'Orange',
    'Purple',
    'Pink'],
    answer: 'Orange',
    img: 'assets/images/orange.gif'
    },

    {question: "Complete this quotation: 'I see no point in _____ if I can't be _____.'",
    answerChoices: ['going, whole',
    'trying, blonde',
    'living, beautiful',
    'loving, perfect'],
    answer: 'living, beautiful',
    img: 'assets/images/hissyfit.gif'
    },

    {question: "In 'Howl's Moving Castle', Howl has a missing organ. What is it?",
    answerChoices: ["Howl's future",
    "Howl's childhood",
    'Her own future',
    "Calcifer's childhood"],
    answer: "Howl's childhood",
    img: 'assets/images/heart.gif'
    },

    {question: "After Sophie throws water on Calcifer and the castle splits apart, she goes through a doorway that leads where?",
    answerChoices: ['His heart',
    'One of his lungs',
    'His brain',
    'His stomach'],
    answer: 'His heart',
    img: 'assets/images/chest.gif'
    },

    {question: "What happens if Calcifer dies?",
    answerChoices: ["He reincarnates as a human being",
    'The war ends',
    'Howl dies',
    'Sophie turns back into a young girl'],
    answer: 'Howl dies',
    img: 'assets/images/falling.gif'
    },

    {question: "Why did Sophie's kiss break the spell on Turnip Head (the prince)?",
    answerChoices: ['She was his true love',
    'She used magic',
    'There was nothing special about it, he just had to be kissed',
    'What kiss?'],
    answer: 'She was his true love',
    img: 'assets/images/turnip.gif'
    },

    {question: "Fill in the missing words in the following quote: 'Sophie! Your hair is _____ like ______.'",
    answerChoices: ['auburn, firelight',
    'grey, ashes',
    'red, ketchup',
    'silver, starlight'],
    answer: 'silver, starlight',
    img: 'assets/images/hug.gif'
    },

    {question: "At the end of the film, who does Madam Suliman call a 'traitor'?",
    answerChoices: ['The Witch of the Waste',
    'Heen the dog',
    'Turnip Head the scarecrow',
    'Calcifer'],
    answer: 'Heen the dog',
    img: 'assets/images/heen.gif'
    },

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
        $('.wrapper').html("<h2> Time Remaining: <span id='counter'>10</span> seconds</h2>")
        $('.wrapper').append('<h2>' + questions[trivia.currentQuestion].question + '</h2>');

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
// Leaves Q unanswered b/c time ran out -> shows you A
    timesUp: function (){
        clearInterval(timer);
        trivia.leftUnanswered++;
        $('.wrapper').html('<h2>Time is up amateur!</h2>');
        $('.wrapper').append('<h3>The right answer was: ' + questions[trivia.currentQuestion].answer + '</h3>');
// Create a new img tag, attributing img src, appending to wrapper 
        var timeoutImage = $('<img>')
        timeoutImage.attr("src", "/assets/images/time.gif")
        $('.wrapper').append(timeoutImage); 

// If last Q -> results screen, if not -> next Q  

        if (trivia.currentQuestion === questions.length - 1) {
            setTimeout(trivia.results, 3*1000);
        } else {
            setTimeout(trivia.nextQuestion, 3*1000);
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
        $('.wrapper').append(`<img src='${questions[trivia.currentQuestion].img}'>`); 

        if (trivia.currentQuestion === questions.length - 1) {
            setTimeout(trivia.results, 3*1000);
        } else {
            setTimeout(trivia.nextQuestion, 3*1000);
        }
    },
    wrongAnswer: function(){
        console.log('Wrooooong!')
        clearInterval(timer);
        trivia.wrong++;
        $('.wrapper').html('<h3>Seriously...?</h3>');
// Tell you what the right answer was 
        $('.wrapper').append('<h3>The right answer was: ' + questions[trivia.currentQuestion].answer + '</h3>');
// Create a new img tag, attributing img src, appending to wrapper 
        var wrongImage = $('<img>')
        wrongImage.attr("src", "/assets/images/thumbsDown.gif")
        $('.wrapper').append(wrongImage); 


        if (trivia.currentQuestion === questions.length - 1) {
            setTimeout(trivia.results, 3*1000);
        } else {
            setTimeout(trivia.nextQuestion, 3*1000);
        }
    },
// When last Q is clicked, show results
    results: function(){
        clearInterval(timer);
        $('.wrapper').html('<h2>No More!</h2>');
        $('.wrapper').append('<h3>Right: ' + trivia.right + '</h3>');
        $('.wrapper').append('<h3>Wrong: ' + trivia.wrong + '</h3>');
        $('.wrapper').append('<h3>Left Unanswered: ' + trivia.leftUnanswered + '</h3>');
        $('.wrapper').append("<button id='reset'>Reset</button>");
    },
// Resetting 
    reset: function(){
        trivia.currentQuestion = 0;
// Needed to set it to the original countdown time, NOT 0 
        trivia.counter = 10; 
        trivia.right = 0;
        trivia. wrong = 0;
        trivia.leftUnanswered = 0;
        trivia.loadingQuestion();
    }
}