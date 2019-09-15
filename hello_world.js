const ingredientes = process.argv.slice(2)

console.log(process.env.debug)

if(process.env.debug==='true'){
	console.log('estamos em modo dev')
}


for (var ingrediente of ingredientes) {
	console.log(ingrediente.toUpperCase())
}

ingredientes.forEach(i => {
	console.log(i.toUpperCase())
})

for (var i = 0 ; i < ingredientes.lenght;i++) {
	
}

console.log(ingredientes)
//console.log('Hello World')


//Esses blocos de codigo são equivalentes

const {
	DEBUG
	USUARIO
} = process.env.DEBUG

const DEBUG = process.env.DEBUG
const USUARIO = process.env.USUARIO
