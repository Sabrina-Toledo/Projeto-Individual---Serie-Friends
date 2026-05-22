var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `
    SELECT 
    respostaQuiz.alternativa AS resposta
    FROM respostaQuiz 
    JOIN historicoQuiz ON respostaQuiz.fk_historico = historicoQuiz.idhistorico
    WHERE historicoQuiz.fk_idusuario = ${idUsuario} AND historicoQuiz.idhistorico = (
              SELECT MAX(idhistorico) 
              FROM historicoQuiz 
              WHERE fk_idusuario = ${idUsuario}
          );
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}