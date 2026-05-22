var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var idUsuario = req.params.idUsuario;

    medidaModel.buscarUltimasMedidas(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                // Se o banco achar dados, devolve status 200
                res.status(200).json(resultado);
            } else {
                // Se não achar nada responde 204 (No Content)
                res.status(204).send("Nenhum resultado encontrado para este usuário!");
            }
        })
        .catch(function (erro) {
            console.log("\nHouve um erro ao buscar as últimas medidas:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarUltimasMedidas
}