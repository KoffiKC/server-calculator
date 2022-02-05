// its all the things that make it so I dont loose my mind completely.. thanks randomly organized characters for having meaning
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

let calcs = [];
let numbers = [];

// app.get('/numbers', function(req, res){
//     console.log('request @ /qoutes was made', req.body);
//     res.send(???);
// })

app.post('/numbers', function(req, res){
    console.log('look Ma, no path!');
    
    console.log(req.body.daNums);
    
    // making the info from the request body grabbablw
    let nums = req.body.daNums;

    numbers.push(nums);

    res.sendStatus(201);
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});