const {MongoClient} = require('mongodb')
const axios = require('axios')

const connectionString = 'mongodb+srv://sarau-usr:PastelVegano2019@sarau-tecnologico-tmp-y1mnh.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(connectionString)

const [localidade] = process.argv.slice(2)
const eventosCollection = 'ana-clara-eventos'

// client.connect(()=>{
// 	const db = client.db('sarau')

//pegar dados da api
const url = 'https://www.eventbriteapi.com/v3/events/search/?location.address=porto+alegre&location.within=5km&token=I6KD6XKCCQRDBM7NZL33';

axios.get(url).then(response => {
	client.connect(()=>{
	const db = client.db('sarau')
		response.data.events.forEach(e =>{
			db.collection(eventosCollection).insertOne({
				nome: e.name.text,
				resumo:e.summary,
				gratuito: e.is_free,
				horarioInicio:e.start.local,
				horarioFim:e.end.local
			})
			//console.log(e.name.text)
		});
	})
})


// db.collection('ana-clara-eventos').insertOne({
// 	name: 'Sarau Tecnológico TAG #02',
// 	subject: 'Node.js'
// 	// tags:[
// 	// 'desenvolvimento', 'node', 'web'
// 	// ]
// 	})
// 	db.collection('ana-clara-eventos').find({
// 		name: 'Sarau Tecnológico TAG #01'
// 	}).toArray((err, dados))=>{
// 		console.log(dados)
// 	}
// })

//client.close()

