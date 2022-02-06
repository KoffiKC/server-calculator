console.log('haaai');

let operand = '';

$(readyNow);

function readyNow() {
    console.log('duuuuuuude');
    $('#eval-button').on('click', sendValues);
    $('.math-button').on('click', updateOperand);
    $('#clear-button').on('click', function(){
        $('#number-one').val("");
        $('#number-two').val("");
    });
    showNumbers();
}

function appendNums(response) {
        for( let res of response){
            $('ul').append(`<li>${res.numberX} ${res.math} ${res.numberY}</li>`);
        }

        $('h3').empty();
        $('h3').append(response[response.length-1].sum)
}

function showNumbers() {
    // $('ul').append('<li>yes</li>');
    $('ul').empty()
    $.ajax({
        method: 'GET',
        url: '/calcs'
    }).then(function(response){
        console.log(response);
        appendNums(response)
    }).catch(function(response){
        $('ul').append('<li>nope :/</li>');
    })
}

function sendValues() {
    console.log('button cluck uwu');
    $.ajax({
        method: 'POST',
        url: '/calcs',
        data:{
            daNums: {
                numberX: $('#number-one').val(),
                numberY: $('#number-two').val(),
                math: operand,
                sum: null,
            }
        }
    }).then(function(response){
        console.log('we did something');
        showNumbers()
    }).catch(function(response){
        console.log('welp...');
    })
}

function updateOperand() {
    operand = $(this).val();
    console.log(operand);
}