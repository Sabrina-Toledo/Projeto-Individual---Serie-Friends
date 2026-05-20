var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var idGrafico = req.params.idGrafico;

    medidaModel.buscarUltimasMedidas(idGrafico)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas
}