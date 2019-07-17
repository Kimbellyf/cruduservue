'use strict';

const ValidationContract = require('../validators/receivedguihandling');
const User = require("../models/User");
//const db = require("../database/database.js");
const Op = require("sequelize").Op;
const authService = require('../services/auth-service');

//ajeitar todos os metodos aq embaixo na vdd

class userController {
    createUser(req, res) {
        const { nome, admin, telefone, email, senha} = req.body;
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.senha, 6 , 'A senha deve conter no mínimo 6 caracteres');
        contract.hasMinLen(req.body.nome, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.isEmail(req.body.email, 'E-mail inválido');
        
        //se os dados forem insuficientes/sem estar no padrão desejável
        if (!contract.isValid()){
            res.status(400).send(contract.errors()).end();
        }
        try {
            User.create({ nome, admin, telefone, email, senha
                //senha: md5(req.body.senha + global.SALT_KEY),
                //roles: ["user"]
            });
    
            res.status(201).send(user => res.json(user));
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição de cadastro de usuário'
            });
        }
    }
    getUsers(req, res) {
        User.findAll()
            .then(users => res.json(users))
            .catch(err => {
                console.log("Error in query (getUsers): " + err);
                res.sendStatus(500);
            });
    }
    getUserById(req,res){
        const { user_id } = req.query;
        User.findOne({ where: { user_id } })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (getUserById): " + err);
                res.sendStatus(500);
            });
    }

    getUser(req, res) {
        const { email } = req.query;
        User.findOne({ where: { email } })
            .then(user => res.json(user))
            .catch(err => {
                console.log("Error in query (getUser): " + err);
                res.sendStatus(500);
            });
    }

    updateUser(req, res) {
        const { user_id, nome, admin, telefone, email, senha } = req.body;
        User.update({ nome, admin, telefone, email, senha }, { where: { user_id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateUser): " + err);
                res.sendStatus(500);
            });
    }
    deleteUser(req,res){
        const { user_id } = req.query;
        User.destroy( { where: { user_id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteUser): " + err);
                res.sendStatus(500);
            });
    }

    // o campo login recebe o email ou username do usuario e faz a busca nos dois campos
    signIn(req, res) {
        let { email, senha } = req.body;
        signin = email ? email : "";
        senha = senha ? senha : "";
        User.findOne({ where: { [Op.or]: [{email: login, senha}] } })
            .then(user => {
                if (user){
                    user.senha = "";
                    res.json(user);
                } else {
                    res.json({user: null, message: "Login ou senha incorreto"});
                }
            })
            .catch(err => {
                console.log("Error in query (signIn): " + err);
                res.sendStatus(500);
            });
    }
    authenticate = async(req, res, next) => {
        try {
            const user = await repository.authenticate({
                email: req.body.email,
                senha: md5(req.body.senha + global.SALT_KEY)
            });
    
            if (!user) {
                res.status(404).send({
                    message: 'Usuário ou senha inválidos'
                });
                return;
            }
    
            const token = await authService.generateToken({
                user_id: user.user_id,
                nome : user.nome,
                telefone : user.telefone,
                email: user.email,
                //roles: user.roles
            });
    
            res.status(201).send({
                token: token,
                data: {
                    user_id: user.user_id,
                    nome : user.nome,
                    telefone : user.telefone,
                    email: user.email,
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição - autentificação falhou'
            });
        }
    };
    
    refreshToken = async(req, res, next) => {
        try {
            const token = req.body.token || req.query.token || req.headers['x-access-token'];
            const data = await authService.decodeToken(token);
    
            const customer = await repository.getById(data.id);
    
            if (!customer) {
                res.status(404).send({
                    message: 'Cliente não encontrado'
                });
                return;
            }
    
            const tokenData = await authService.generateToken({
                user_id: user.user_id,
                nome : user.nome,
                telefone : user.telefone,
                email: user.email,
                //roles: user.roles
            });
    
            res.status(201).send({
                token: token,
                data: {
                    user_id: user.user_id,
                    nome : user.nome,
                    telefone : user.telefone,
                    email: user.email,
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição - token n foi regerado'
            });
        }
    };
}

module.exports = new userController();



//200 - 201- create        400 - erro,bad request  401 - n autenticado 403 - acesso negado 500 - erro na aplicacao
//ver 201 , 208



