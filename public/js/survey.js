window.onload = function() {

    var node = parent.node;

    node.emit('HTML-startSecretSurveyTimer');

    setTimeout(()=>{
        $('.frame-C').css({'opacity':'1'});
    }, 1000)
    setTimeout(()=>{
        $('.frame-C').css({'opacity':'0'});
        setTimeout(()=>{
            $('.frame-A, .frame-B').css({'display':'flex'});
            setTimeout(()=>{
                $('.frame-A, .frame-B').css({'opacity':'1'});
                setTimeout(()=>{
                    $('.frame-C').css({'display':'none'});
                }, 300)
            }, 50)
        }, 1250)
    }, 2500)

    experiment.generate();

    // ----------------------- //
    // ---- SAVE DECISION ---- //
    // ----------------------- //

    decision.save = function() {

        node.emit('HTML-recordSecretSurveyTimer');

        // console.log('decision of the player');
        // console.log(decision);

        $('.all').css({'transition':'0.5s', 'opacity':'0'});

        // send the decision to client to save
        node.emit('HTML-reportSurveyResults', decision);

    }


}
