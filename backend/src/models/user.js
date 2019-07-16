const Sequelize = require("sequelize");
const db = require("../database/database");

const User = db.define(
    "user",
    {
        nome: {
            type: Sequelize.STRING(60)
        },
        admin: {
            type: Sequelize.BOOLEAN
        },
        email: {
            type: Sequelize.STRING(60)
        },
        senha: {
            type: Sequelize.STRING(20)
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "user"
    }
);
User.associate = function(models) {
    User.belongsTo(models.UserTelefone, {
      foreignKey : 'id',
      targetKey: 'user_id'
    });
  };

module.exports = User;
