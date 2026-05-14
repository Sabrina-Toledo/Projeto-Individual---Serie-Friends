var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {
    // Esta instrução busca as respostas associando-as ao peso (ID) do personagem
    var instrucaoSql = `
        SELECT 
            resposta.fk_idpergunta AS questao, 
            alternativa.fk_idpersonagens AS resposta_valor
        FROM resposta
        JOIN alternativa ON resposta.fk_idalternativa = alternativa.idalternativa
        JOIN tentativa ON resposta.fk_idusuario = tentativa.fk_idusuario
        WHERE tentativa.fk_idusuario = ${idUsuario}
        ORDER BY resposta.fk_idpergunta ASC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}