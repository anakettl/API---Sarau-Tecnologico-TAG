const koa = require('koa')
const app = new koa()

const {listarGratuitos} = require('./listar_eventos')


app.use(async (ctx)=>{
	ctx.body = await listarGratuitos()
})

app.listen(3000)