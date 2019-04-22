$(document).ready(function(){
        console.log('hello');
        var color = $('.box')
        $(color).click(function(){
            var value = $(this).text();
            console.log(value);
        })
    }
);