var database = require("../database/config")

function salvarQuiz(idUsuario, respostas, resultadoQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario, respostas, resultadoQuiz)

    var instrucaoSql = `
    INSERT INTO historicoQuiz (fk_idusuario, personagemFinal) 
        VALUES (${idUsuario}, '${resultadoQuiz}');`
        
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    
    .then(function(){
        let buscarId = `
        SELECT MAX(idhistorico) AS idHistorico
            FROM historicoQuiz
            WHERE fk_idusuario = ${idUsuario};
        `;
    return database.executar(buscarId);

    })

    .then(function(resultado) {

        let idHistorico = resultado[0].idHistorico;

        let promises = [];

        for(let i = 0; i < respostas.length; i++) {

            let sqlResposta = `
                INSERT INTO respostaQuiz (fk_historico, alternativa) VALUES
                (${idHistorico},'${respostas[i]}');
            `;

            promises.push(database.executar(sqlResposta));
        }

        return Promise.all(promises);

    });
    
}

module.exports = {
salvarQuiz
};