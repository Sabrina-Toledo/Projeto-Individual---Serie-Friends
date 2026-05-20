var database = require("../database/config")

function salvarQuiz(idUsuario, resultadoQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, resultadoQuiz)

    var instrucaoSql = `
INSERT INTO historico_quiz (fk_idusuario, personagem_ganhador, dataHora) 
        VALUES (${idUsuario}, '${resultadoQuiz}', NOW());`
        
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
salvarQuiz
};