(function () {


    var questions = [{
        id: 0,
        author: 'Jake Overall',
        email: 'j@j.com',
        question: 'How many many feet you see',
        topic: 'Dr Seuss',
        posted: Date.now(),
        status: 'helping'
    }, {
            id: 1,
            author: 'Jake Overall',
            email: 'j@j.com',
            question: 'How many many feet you see',
            topic: 'Dr Seuss',
            posted: Date.now(),
            status: 'urgent'
        }, {
            id: 2,
            author: 'Jake Overall',
            email: 'j@j.com',
            question: 'How many many feet you see',
            topic: 'Dr Seuss',
            posted: Date.now(),
            status: 'open'
        }, {
            id: 3,
            author: 'Jake Overall',
            email: 'j@j.com',
            question: 'How many many feet you see',
            topic: 'Dr Seuss',
            posted: Date.now(),
            status: 'open'
        }]

    var elem = $("#questions");

    function update() {
        elem.empty()
        for (var i = 0; i < questions.length; i++) {
            var currentQuestion = questions[i];
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

    }

    $('#questions').on('click', '.delete-button', function (event) {
        var id = $(this).closest('.card').attr('id');
        removeQuestionById(id);
        update()
    })

    function removeQuestionById(id){
        for (var i =0; i<questions.length; i++){
            var currentItem = questions[i]
            if (id == currentItem.id){
              return questions.splice(i,1)
            }
        }
    }



update()

}())



