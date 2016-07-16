(function () {

    var qs = new QuestionService();

    var elem = $("#questions");

    function update() {
        qs.getQuestions(function(questions){
            elem.empty()
            for (var id in questions) {
                var currentQuestion = questions[id];
                elem.append(`
                <br>
                <div class="row text-center">
                    <div class="container">
                    <div class="col-lg-6">
                    <div class="card" id="${currentQuestion.id}">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h2>${currentQuestion.author}</h2>
                                <h4>${currentQuestion.email}</h4>
                            </div>
                                <div class="panel-body">


                                
                                <p>${currentQuestion.topic}</p>
                                <p>${currentQuestion.question}</p>
                                <p>${currentQuestion.posted}</p>
                                <p>${currentQuestion.status}</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-success answer-button">Answer</button>
                                    <button type="button" class="btn btn-info resolved-button">Resolve</button>
                                    <button type="button" class="btn btn-danger delete-button">Dismiss</button>
                                </div>



                                </div>
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

}())



