
// debug data
// debug data
let currentPicture = undefined;


window.onload = function() {

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

    // --------------------------------------- //
    // ---------------- debug ---------------- //
    // --------------------------------------- //

    let currentPicture = 1;
    let currentRound = 1;

    decision.pIndex = currentPicture;

    updateProgressBar(currentRound);

    picture.set(currentPicture);

    setTimeout(()=>{
        show.picture();
    }, 500)

    setTimeout(()=>{
        show.sliders();
    }, 1500)


    // --------------------- //
    // --- submit button --- //
    // --------------------- //

    $('#submitButton').click(function() {

        console.log(decision);

    })


}
