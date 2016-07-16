(function () {

    function QuestionService() {

function saveQuestion(question) {
    localStorage.setItem('question', JSON.stringify(question))
}

function getQuestions() {
    return JSON.parse(localStorage.getItem('questions'))
}

    };
})()