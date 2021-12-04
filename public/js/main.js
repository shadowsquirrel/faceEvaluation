
// debug data
// debug data
// let currentPicture = undefined;


window.onload = function() {

    var node = parent.node;

    // ---------------------- //
    // ------- PICTURE ------ //
    // ---------------------- //

    var picture = {};

    picture.set = function(index) {

        var myString = 'faceImages/';

        var source = myString + index + '.jpg';

        $('#fP').attr('src', source);

    }


    var show = {};

    show.picture = function() {

        $('.frame-picture').css({'transition':'1s', 'opacity':'1'});

    }

    show.sliders = function() {

        $('.frame-B, .frame-progressBar, .frame-sliders').css({'transition':'1s', 'opacity':'1'});

    }

    // ---------------------- //
    // ---- PROGRESS BAR ---- //
    // ---------------------- //

    updateProgressBar = function(index) {

        var pp = ( index / 20 ) * 100;

        pp = pp + '%';

        $('.progress-bar').css({'width':pp});

        $('#questionIndex').html(index);

    }

    // ----------------- //
    // ----------------- //
    // ----------------- //


    node.on('HTML-receiveCurrentPicture', function(msg) {

        console.log('');
        console.log('CURREN PICTURE INDEX RECEIVED FROM CLIENT');
        console.log(msg);
        console.log('');

        var currentPicture = msg.currentFaceIndex;
        var currentRound = msg.currentRound;

        decision.pIndex = currentPicture;

        updateProgressBar(currentRound);

        picture.set(currentPicture);

        setTimeout(()=>{
            show.picture();
        }, 500)

        setTimeout(()=>{
            show.sliders();
        }, 1500)


        if(currentRound < 2) {

            // ---- WIGGLE ACTION ---- //

            arrow.wiggle0(0);
            arrow.wiggle1(0);
            arrow.wiggle2(0);
            arrow.wiggle3(0);
            arrow.wiggle4(0);

        } else {

            arrow.destroyAll();

        }

    })

    node.emit('HTML-requestCurrentPicture');


    setTimeout(()=>{
        show.picture();
    }, 500)

    setTimeout(()=>{
        show.sliders();
    }, 1500)


    $('#submitButton, #submitButton-mobile').click(function() {

        node.emit('HTML-reportEvaluation', decision);

    })







}
