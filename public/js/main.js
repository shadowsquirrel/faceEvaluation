
// debug data
// debug data
// let currentPicture = undefined;


window.onload = function() {

    myFrame.test();
    myFrame.test();
    myFrame.getHeight();
    myFrame.test();
    myFrame.test();

    var node = parent.node;

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

        let currentPicture = msg.currentFaceIndex;
        let currentRound = msg.currentRound;

        decision.pIndex = currentPicture;

        updateProgressBar(currentRound);

        picture.set(currentPicture);

        setTimeout(()=>{
            show.picture();
        }, 500)

        setTimeout(()=>{
            show.sliders();
        }, 1500)

    })

    node.emit('HTML-requestCurrentPicture');


    // picture.set(currentPicture);

    setTimeout(()=>{
        show.picture();
    }, 500)

    setTimeout(()=>{
        show.sliders();
    }, 1500)


    $('#submitButton').click(function() {

        console.log(decision);

        node.emit('HTML-reportEvaluation', decision);

    })


}
