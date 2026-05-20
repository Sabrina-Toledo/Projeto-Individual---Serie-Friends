var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {
    // Esta instrução busca as respostas associando-as ao peso (ID) do personagem
    var instrucaoSql = `

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
}