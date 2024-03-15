const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql',
    port: 3307
})

const app = express();

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

app.post('add-')

