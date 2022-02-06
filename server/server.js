// its all the things that make it so I dont loose my mind completely.. thanks randomly organized characters for having meaning
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

let calcs = [];


app.get('/calcs', function(req, res){
    console.log('request @ /qoutes was made', req.body);
    res.send(calcs);
})

app.post('/calcs', function(req, res){
    console.log(req.body.daNums);
    
    let nums = req.body.daNums;

    calcs.push(evaluate(nums));

    res.sendStatus(201);
});

function evaluate(array) {
    console.log(array);
    
    let x = Number(array.numberX);
    let y = Number(array.numberY);
  
    switch (array.math) {
        case "+":
            array.sum = x + y;
            return array;
        case "-":
            array.sum = x - y;
            return array;
        case "*":
            array.sum = x * y;
            return array;
        case "/":
            array.sum = x / y;
            return array;
    
        default:
            alert('operator not selected')
            break;
    }
}

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});