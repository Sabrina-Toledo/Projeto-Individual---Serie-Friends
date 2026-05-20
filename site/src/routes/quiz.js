var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/quiz/salvar", function (req, res) {
    quizController.salvarQuiz(req, res);
});


module.exports = router;