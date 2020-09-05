const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  //===== ROTA DE LISTAGEM TODAS AS ONGS =====//
  async index(req,res){
    const ongs = await connection('ongs').select('*');
  
    return res.json(ongs);
  },

  //=====ROTA DE CADASTRO DE UMA NOVA ONG =====//
  async create(req, res){
    const { name, email, city,whatsapp,uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      city,
      whatsapp,
      uf
    });

  return res.json({id});

  }
};