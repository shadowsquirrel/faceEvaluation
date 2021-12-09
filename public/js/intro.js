let box = {};

box.show = function(index, bDelay) {

    let buttonDelay = bDelay === undefined ? 2500 : bDelay;

    let myBox = '.infoBox-' + index;
    let myButton = '.okButton-' + index;

    $(myBox).css({'display':'flex'});

    // show bo`x
    setTimeout(()=>{
        $(myBox).css({'transition':'1s', 'opacity':'1'});
    }, 100)

    // show button
    setTimeout(()=>{
        $(myButton).css({'transition':'0s', 'transform':'scale(1)'});
    }, buttonDelay)
    setTimeout(()=>{
        $(myButton).css({'transition':'0.25s', 'opacity':'1'});
    }, buttonDelay)


}

box.hide = function(index) {

    let myBox = '.infoBox-' + index;

    $(myBox).css({'transition':'0.5s', 'opacity':'0'});
    setTimeout(()=>{
        $(myBox).css({'display':'none'});
    }, 550)

}

box.transition = function(indexA, indexB, delay) {

    if(indexB != undefined) {

        box.hide(indexA);

        setTimeout(()=>{
            box.show(indexB, delay);
        }, 750)

    } else {

        box.hide(indexA);

    }

}


box.show(1);


$('#okButton-1').click(function() {

    box.transition(1,2, 3000);

})

$('#okButton-2').click(function() {

    box.transition(2,3, 7500);

})

$('#okButton-3').click(function() {

    box.transition(3,4, 9000);

    rotate.infoTextOn = true;
    rotate.traitText(0);

})

$('#okButton-4').click(function() {

    rotate.infoTextOn = false;

    box.transition(4,5);

})

$('#okButton-5').click(function() {

    box.transition(5,6);

})

$('#okButton-6').click(function() {

    box.transition(6,7);

})

$('#okButton-7').click(function() {

    box.transition(7,8);

})


$('#okButton-8').click(function() {

    box.transition(8,9);

})

$('#okButton-9').click(function() {

    box.transition(9,10);

})


$('#redoButton-10').click(function() {

    box.transition(10,2);

})
