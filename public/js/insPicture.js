let picture = {};

picture.set = function(index) {

    var myString = 'images/';

    var source = myString + index + '.jpg';

    $('#fP').attr('src', source);

}


let show = {};

show.picture = function() {

    $('.frame-A').css({'transition':'1s', 'opacity':'1'});

}

show.sliders = function() {

    $('.frame-B, .container, .frame-X').css({'transition':'1s', 'opacity':'1'});

}
