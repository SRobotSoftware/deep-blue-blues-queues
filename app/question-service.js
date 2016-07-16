function QuestionService() {

    var qlist = getQuestions() || [];

    this.saveQuestion = function(question) {
        qlist.push(question);
        localStorage.setItem('qlist', JSON.stringify(qlist))
    }

    function getQuestions() {
        return JSON.parse(localStorage.getItem('qlist'))
    }
    
    this.getQuestions = getQuestions;
};
