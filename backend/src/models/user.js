const Sequelize = require("sequelize");
const db = require("../database/database");

const User = db.define(
    "user",
    {
        nome: {
            type: Sequelize.STRING(60)
        },
        email: {
            type: Sequelize.STRING(60)
        },
        senha: {
            type: Sequelize.STRING(20)
        },
        telefone: {
            type: Sequelize.STRING(20)
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "user"
    }
);

module.exports = User;
