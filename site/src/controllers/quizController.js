var quizModel = require("../models/quizModel");

function salvarQuiz(req, res) {
    var idUsuario = req.body.idUsuario;
    var respostas = req.body.respostas;
    var resultadoQuiz = req.body.resultadoQuiz;

    console.log('entrou salvarQuiz' + req.body)
    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (resultadoQuiz == undefined) {
        res.status(400).send("O resultado do quiz está undefined!");
    } else {
        quizModel.salvarQuiz(idUsuario, resultadoQuiz)
            .then(
                function (resultado) {
                    res.status(200).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("\nHouve um erro ao salvar o quiz! Erro: ", erro.sqlMessage)
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    salvarQuiz
}