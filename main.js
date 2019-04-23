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
        randomColor = 'green';
        break;
        case 2: 
        randomColor = 'pink';
        break;
        case 3: 
        randomColor = 'yellow';
        break;
        case 4: 
        randomColor = 'orange';
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

/* example
array = ["green","yellow","pink"];
*/
function pressPlay(){


    for(var i=0;i<array.length; i++){
        var color = array[i];
        //setTimeout(function(){
            switch(color){
                case 'green': 
                    $('.green.box').css('background-color','blue');
                    setTimeout(function(){
                        $('.green.box').css('background-color','chartreuse');
                    },1000*(i+1));
                break;
                case 'pink': 
                    $('.pink.box').css('background-color','blue');
                    setTimeout(function(){
                        $('.pink.box').css('background-color','pink');
                    },1000*(i+1));
                case 'yellow': 
                    randomColor = 'yellow';
                break;
                case 'orange': 
                    randomColor = 'orange';
                break;
                default:
                console.log('something broke');
            } // end of switch
        //},1000*(i+1));
    } //end of for loop
    

} // end of pressPlay function

function changeColor(){

}

function checkArrays(){
    for(var i=0; i<array.length; i++){
        if(array[i] === playerArray[i]){
            console.log('CORRECT!')
        } else {
            console.log('SORRY, GAME OVER!');
            return;
        }
    }
    console.log('next round!');
    addRandomColor();
    playerArray = [];
}