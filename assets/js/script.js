var question = document.getElementById('question');
var ansChoices = Array.from(document.getElementsByClassName('answer-text'));

var questionCounter = 0;
var availQuestions = [];
var currentQuestion = {};

var answering = false;

var questions = [
    {
        question: 'How would you log the length property of the window object?',
        ans1: 'consol.log(window.length)',
        ans2: 'javaScript',
        ans3: 'an array',
        ans4: 'carefully',
        corrAns: 1,
    },
    {
        question: 'getElementbyId() allows you to',
        ans1: 'copy a text',
        ans2: 'change the font type',
        ans3: 'quickly access or return an element',
        ans4: 'find lost treasures',
        corrAns: 3,
    },
    {
        question: 'What is JSON?',
        ans1: 'another name for javaScript',
        ans2: 'a way to style a web page',
        ans3: 'a funciton for correcting bad code',
        ans4: 'a way to store and access data in the browser',
        corrAns: 4,
    },
    {
        question: 'What is Bubbling?',
        ans1: 'refers to events traversing the DOM',
        ans2: 'a screensaver',
        ans3: 'we dont like to talk about it',
        ans4: 'a type of brewing software',
        corrAns: 1,
    },
];

function startQuiz() {
    availQuestions = [ ...questions];
    nextQuestion();

};

function nextQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availQuestions.length);
    currentQuestion = availQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    ansChoices.forEach(function(ans) {
        var number = ans.dataset['number'];
        ans.innerText = currentQuestion['ans' + number];
    });

    availQuestions.splice(questionIndex, 1);
    answering = true;
};

ansChoices.forEach(function(ans) {
    ans.addEventListener('click', function(event) {
        if (!answering) return;
        answering = false;
        
        
        nextQuestion();
    });
});

startQuiz();
