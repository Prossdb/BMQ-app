const express = require('express')
const app = express()
const PORT = 8080 || process.env.PORT;
const cors = require('cors')


app.use(cors())
// const { response } = require('express');



const bmq = {
    'prosper dube': {
        'age': 39,
        'nickName': 'Pro',
        'birthdate': '22 January 1983', 
        'birthLocation': 'Byo, Zim',
        'origin': 'Lower, gwelo',
        'genre': 'hip hop, gospel, deep-house, Amapiano',
        'occupation': 'metallurgist, software-engineer',
        'dependants': '4',
        'children': 2
    },
    
    'thando dube': {
        'age': 39,
        'nickName': 'Rza',
        'birthdate': '3 May 1983', 
        'birthLocation': 'Byo, Zim',
        'origin': 'Draipaart',
        'genre': 'mbanqanga, gospel, deep-house, Amapiano',
        'occupation': 'economist',
        'dependants': '4',
        'children': 3
    },
    'unknown': {
        'name': null,
        'age': null
    }
}

app.get('/', (request, response)=>{
 response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name', (request, response)=>{
    const bmqName = request.params.name.toLowerCase()
    if(bmq[bmqName]){
    response.json(bmq[bmqName])
    } else{
    response.json(bmq['unknown'])
}
})

app.listen(PORT, () => {
console.log(`Its alive on localhost ${PORT}`)
})

