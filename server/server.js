const app = require('./config/express.js');
const { connectionDataBase } = require("./config/bdConnection.js")
const execute = require('./src/controllers/controllerQuerys');



(async () => {
  await connectionDataBase.sync()


  connectionDataBase.authenticate().then(() => {
    console.log("Conexão bem scedida")
  }).catch(erroConn => {
    console.error("Incapaz de fazer conexão", erroConn)
  })

// Mostra oq vc quer se vc tirar de comentario

// const a = await execute.findEmailCliente({ params: { cd_emailUsuario: 'joaosilva@email.com' }})
// console.log(a)

// const b = await execute.selectCategorias()
//  console.log(b) ,          

// const c = await execute.selectAllUsuarios()
// console.log(c)

// const d = await execute.selectAllestabelecimento()
// console.log(d)

// const e = await execute.selectestabelecimentoeinfo()
// console.log(e)

// const f = await execute.selectPostInfo()
// console.log(f)

// const g = await execute.selectInfoEstabelecimento()
// console.log(g)


  app.listen(5000, () => {
  });
})();
