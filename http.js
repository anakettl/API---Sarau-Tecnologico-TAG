//const axios = require('axios')

const localidade = process.argv.slice(2)[0]
console.log(localidade)

//const [localidade, uf] = process

const url = 'https://www.eventbriteapi.com/v3/events/search/?location.address=porto+alegre&location.within=5km&token=I6KD6XKCCQRDBM7NZL33';

// axios.get(url)
// 	.then(response => {
// 		response.data.events.forEach(e =>{
// 			console.log(e.name.text)
// 		})
// 	})

const https = require('https')

const req  = https.request(
	url, 
//segundo parametro da funcao é arrow function
	res => {
		console.log(res.statusCode)
		var json = ''
		res.on('data', 
			dados=>{
				json += dados
			})
		res.on('end', ()=>{
			var response = JSON.parse(json)
			response.events.forEach(e=>{
				console.log(e.name.text)
			})
		})

	}
)

req.end()