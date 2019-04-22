$(document).ready(function(){
        var color = $('.box')
        $(color).click(function(){
            var value = $(this).text().trim();
            addColorToArray(value);
        })
    }
);

var array = [];
var playerArray = [];

function addRandomColor(){
    var randomColor = Math.floor(Math.random() * 4)+1;

    switch(randomColor){
        case 1: 
        randomColor = 'green box';
        break;
        case 2: 
        randomColor = 'pink box';
        break;
        case 3: 
        randomColor = 'yellow box';
        break;
        case 4: 
        randomColor = 'orange box';
        break;
        default:
        console.log('something broke');
    }
    array.push(randomColor);
}

// adds a color to the player array
function addColorToArray(colorValue){
    playerArray.push(colorValue);
}

function pressPlay(){
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

function checkArrays(){
    for(var i=0; i<array.length; i++){
        if(array[i] === playerArray[i]){
            console.log('CORRECT!')
        } else {
            console.log('sorry, you wrong');
            return;
        }
        console.log('next round!');
    }
    addRandomColor();
    playerArray = [];
}