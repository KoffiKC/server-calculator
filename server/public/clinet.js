console.log('haaai');

$(readyNow);

function readyNow() {
    console.log('doooooode');
    $('#eval-button').on('click', sendValues)
}

function appendNums(response) {
        
}

function showNumbers() {
    // $('ul').append('<li>yes</li>');
    $.ajax({
        method: 'GET',
        url: '/numbers'
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
        url: '/numbers',
        data:{
            daNums: {
                numberX: $('#number-one').val(),
                numberY: $('#number-two').val()
            }
        }
    }).then(function(response){
        console.log('we did something');
        showNumbers()
    }).catch(function(response){
        console.log('welp...');
    })
}