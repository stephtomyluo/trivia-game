// Make it so that button disappears 
$('#start').on('click', function() {
    $('#start').remove();
});

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

var trivia = {
    questions: questions,
    currentQuestion: 0,
    counter: 10,
    right: 0,
    wrong: 0,

    loadingQuestion: function(){
        timer = setInterval(trivia.countdown, 1000);
        $('')
    },
    countdown: function(){
        trivia.counter--;
        $('#counter').html(trivia.counter);
        if (trivia.counter <=  0){
            console.log('Out of Time!');
            trivia.timesUp();
        }
    },
    timesUp: function (){

    },
    nextQuestion: function(){

    },
    clicked: function(){

    },
    rightAnswer: function(){

    },
    wrongAnswer: function(){

    },
    results: function(){

    },
    reset: function(){

    }
}