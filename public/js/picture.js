let picture = {};

picture.set = function(index) {

    var myString = 'images/';

    var source = myString + index + '.jpg';

    $('#fP').attr('src', source);

}


let show = {};

show.picture = function() {

    $('.frame-picture').css({'transition':'1s', 'opacity':'1'});

}

show.sliders = function() {

    $('.frame-B, .frame-progressBar, .frame-sliders').css({'transition':'1s', 'opacity':'1'});

}
