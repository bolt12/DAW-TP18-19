var Utilizador = require('../../models/utilizador')
var Item = require('../../models/item')

// Lista de utilizadores
module.exports.listarUt = (query) => {
    return Utilizador
        .find(query)
        .exec()
}

// Devolve informação de um utilizador por email
module.exports.consultar = email => {
    return Utilizador
        .findOne({email: email})
        .exec()
}

// Devolve informação de um utilizador por id
module.exports.consultarId = uid => {
  return Utilizador
      .findOne({_id: uid})
      .exec()
}

// Listar publicações de um utilizador
module.exports.listarItems = (uid) => {
    return Item
        .find({id_utilizador: uid})
        .sort({data: -1})
        .exec()
}

// Insere utilizador
module.exports.inserir = utilizador => {
    return Utilizador.create(utilizador)
}

// Atualiza utilizador
module.exports.atualizar = (uid, utilizador) => {
  return Utilizador
      .update({_id: uid},
        {$set:utilizador})
      .exec()
}

// Remove utilizador
module.exports.remover = (uid) => {
    return Utilizador
        .remove({_id: uid})
        .exec()
}
