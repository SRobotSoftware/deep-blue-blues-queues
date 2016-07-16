(function () {

    var qs = new QuestionService();

    var elem = $("#questions");

    function update() {
        qs.getQuestions(function(questions){
            elem.empty()
            for (var id in questions) {
                var currentQuestion = questions[id];
                elem.append(`
                <div class="card" id="${currentQuestion.id}">
                    <p>${currentQuestion.author}</p>
                    <p>${currentQuestion.email}</p>
                    <p>${currentQuestion.topic}</p>
                    <p>${currentQuestion.question}</p>
                    <p>${currentQuestion.posted}</p>
                    <p>${currentQuestion.status}</p>
                    <div class="btn-group">
                        <button type="button" class="btn btn-success answer-button">Answer</button>
                        <button type="button" class="btn btn-info resolved-button">Resolve</button>
                        <button type="button" class="btn btn-danger delete-button">Dismiss</button>
                    </div>
                </div>`)
            }
        });

    }

    $('#questions').on('click', '.delete-button', function (event) {
        var id = $(this).closest('.card').attr('id');
        qs.removeQuestionById(id);
        update()
    })

update()

}())



