var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `
    SELECT 
    CONCAT('Pergunta ', respostaQuiz.idresposta) AS pergunta,
    respostaQuiz.alternativa AS resposta

    FROM respostaQuiz JOIN historicoQuiz
    ON respostaQuiz.fk_historico = historicoQuiz.idhistorico

    WHERE historicoQuiz.fk_idusuario = ${idUsuario}
    ORDER BY respostaQuiz.idresposta;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}