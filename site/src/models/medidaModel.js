var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = `
SELECT 
    respostaQuiz.alternativa AS resposta
FROM historicoQuiz
JOIN respostaQuiz ON respostaQuiz.fk_historico = historicoQuiz.idhistorico
LEFT JOIN historicoQuiz as historicoMaisRecente
ON historicoMaisRecente.fk_idusuario = historicoQuiz.fk_idusuario
AND historicoMaisRecente.idhistorico > historicoQuiz.idhistorico
WHERE historicoQuiz.fk_idusuario = ${idUsuario}
AND historicoMaisRecente.idhistorico IS NULL;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}