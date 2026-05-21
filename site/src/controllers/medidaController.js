var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var idUsuario = req.params.idGrafico;

    medidaModel.buscarUltimasMedidas(idUsuario)
    .then(function (resultado) {
            res.status(200).json(resultado);

    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas
}