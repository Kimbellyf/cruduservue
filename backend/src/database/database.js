const Sequelize = require("sequelize");
//const fs = require("fs");

//const dbConfig = JSON.parse(fs.readFileSync(__dirname + "/settings.json", "utf-8"));

//o certo seria no config e env
/*const dbConfig = {
        database: {
            type: Sequelize.STRING(60)
        },
        user: {
            
        },
        senha :{
           
        }
}

const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.senha, { */
const db = new Sequelize(database, [username=null], [password=null], {
    host: "localhost",
    dialect: "mysql",
    //port : 
});
//db é a conexao
db = connection.authenticate()
    .then(function(){
    console.log('Conexão com o MySQL foi estabelecida com sucesso');
    })
    .catch(function (err) {
    console.log('Não foi possível se conectar com o banco de dados MySql');
    })
    .done();

module.exports = db;
