'use strict';
//requerer database
//requerer models user
const ValidationContract = require('../validators/receivedguihandling');

//ajeitar todos os metodos aq embaixo na vdd

exports.post = (req,res,next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.senha, 6 , 'A senha deve conter no mínimo 6 caracteres');
    
    //se os dados forem insuficientes/sem estar no padrão desejável
    if (!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        //retornar aq uma função
        return;
    }
    
    res.status(201).send(req.body);
};

//ajeitar esse get daq debaixo viu
exports.get = (req,res,next) =>{
    res.status(201).send(req.body);
};

//ajeitar esse get daq debaixo viu
exports.getById = (req,res,next) =>{
    res.status(201).send(req.body);
};

exports.put = (req,res,next) =>{
    const id = req.params.id;
    res.status(201).send({
        id:id,
        item: req.body,
    });
};

exports.delete = (req,res,next)=>{
    res.status(208).send(req.body);
};