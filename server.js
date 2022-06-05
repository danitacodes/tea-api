const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

let tea = {
    'oolong': {
        'origin': 'Somewhere',
        'waterTemp': 200,
        'type': 'black',
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha': {
        'origin': 'Somewhere',
        'waterTemp': 200,
        'type': 'green',
        'steepTimeSeconds': 180,
        'caffinated': false,
        'flavor': 'delicious'
    },
    'unknown': {
        'origin': 'unknown',
        'waterTemp': 200,
        'type': 'unknown',
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    let teaName = req.params.name.toLowerCase()
    if(tea[teaName]){
        res.json(tea[teaName])
    } else {
        res.json(tea['unknown'])
    }
    
})

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
})