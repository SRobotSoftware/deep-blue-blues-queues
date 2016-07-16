(function () {

    var qs = new QuestionService();

    var elem = $("#questions");
    var qCount = $("#count");

    function update() {
        qs.getQuestions(function (questions) {
            elem.empty()
            qCount.text(Object.keys(questions).length)
            for (var id in questions) {
                var currentQuestion = questions[id];
                elem.prepend(`
                <div class="text-center">
                    <div class="col-lg-offset-3 col-lg-6">
                        <div class="card" id="${currentQuestion.id}">
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    <h2>${currentQuestion.author}</h2>
                                    <h4>${currentQuestion.email}</h4>
                                </div>
                                <div class="panel-body">
                                    <p class="capital">${currentQuestion.topic}</p>
                                    <p>${currentQuestion.question}</p>
                                    <p class="date">${moment(currentQuestion.posted)}</p>
                                    <p class="capital">${currentQuestion.status}</p>
                                    <div class="col-lg-4 col-lg-offset-4">
                                    <button type="button" class="btn btn-danger delete-button btn-block">Dismiss</button>
                                </div>
                            </div>
                        </div>
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

} ())



