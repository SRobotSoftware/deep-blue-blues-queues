function QuestionService() {

    var config = {
        apiKey: "AIzaSyDQ10PgboMJGNpxOpbqWZalulU1qAzfikg",
        authDomain: "blues-queues.firebaseapp.com",
        databaseURL: "https://blues-queues.firebaseio.com",
        storageBucket: "blues-queues.appspot.com",
    };
    var myFirebase = firebase.initializeApp(config);
    var db = myFirebase.database();
    var qlistRef = db.ref('/qlist');
    var qlist;

    this.saveQuestion = function (question) {
        var qRef = qlistRef.push();
        question.id = qRef.key;
        qRef.set(question);
    }

    function getQuestions(cb) {
        qlistRef.on('value', function (snapshot) {
            cb(snapshot.val());
        })
    }

    this.getQuestions = getQuestions;

    this.removeQuestionById = function(id){
        db.ref(`/qlist/${id}`).remove();
    }

};
