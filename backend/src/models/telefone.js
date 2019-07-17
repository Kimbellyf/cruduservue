const Sequelize = require("sequelize");
const db = require("../database/database");

const Telefone = db.define(
    "telefone",
    {
        telefone_id: {
            type: Sequelize.STRING(60),
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: Sequelize.STRING(60)
        },
        ddd: {
            type: Sequelize.STRING(2)
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "telefone"
    }
);
Telefone.associate = function(models) {
    Task.belongsTo(models.UserTelefone, {
      foreignKey : 'id',
      targetKey: 'telefone_id'
    });
  };

module.exports = Telefone;
