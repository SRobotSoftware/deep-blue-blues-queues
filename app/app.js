(function(){

var qs = new QuestionService();
    var questions = [];
    var formElem = $('#question-form');

    formElem.on('submit', function (e) {
        e.preventDefault();
        var form = this;
debugger
        var question = {
    // thanks to Scarlett from VYNYL!!
            topic: form.questionType.value,
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