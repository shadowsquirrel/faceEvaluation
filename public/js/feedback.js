window.onload = function() {

    var node = parent.node;

    var feedbackButton = $('#feedbackButton');

    feedbackButton.click(function() {

        console.log('feedback button clicked');

        $('.endMessage').css({'transition':'0.25s', 'opacity':'0'});
        setTimeout(()=>{
            $('.endMessage').css({'display':'none'});
            $('.endMessage-2').css({'display':'flex'});
            setTimeout(()=>{
                $('.endMessage-2').css({'transition':'0.25s', 'opacity':'1'});
            }, 100)
        }, 300)


        var myFeedback = $('#feedback').val();

        console.log(myFeedback);

        node.emit('HTML-feedback', myFeedback);


    })


}
