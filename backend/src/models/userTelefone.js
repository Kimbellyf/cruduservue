'use strict';
const Sequelize = require("sequelize");
const db = require("../database/database");

const UserTelefone = db.define(
    'UserTelefone', 
    {
        user_id: {
            type: Sequelize.INTEGER
        },
        telefone_id: {
            type: Sequelize.INTEGER
        } 
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "user"
    }
);
UserTelefone.associate = function(models) {
    UserTelefone.hasMany(models.Telefone, {
        foreignKey : 'id',
        sourceKey: 'telefone_id'
    });
    UserTelefone.hasMany(models.User, {
        foreignKey : 'id',
        sourceKey: 'user_id'
    })
};
module.exports = UserTelefone;
