(function(){

var qs = new QuestionService();
    var questions = [];
    var formElem = $('#question-form');

    formElem.on('submit', function (e) {
        e.preventDefault();
        var form = this;

        var question = {
            author: form.author.value,
            email: form.email.value,
            question: form.question.value,
            posted: Date.now(),
            status: 'open'
        }

        questions.push(question);
        qs.saveQuestion(question);
        console.log(questions);
        form.reset();

    })

    


})()