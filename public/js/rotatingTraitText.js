let rotate = {}

rotate.textList = [
    'Attractiveness',
    'Intelligence',
    'Competence',
    'Friendliness'
]

rotate.infoTextOn = true;

rotate.traitText = function(textIndex) {

    if(rotate.infoTextOn) {

        // console.log('text index: ' + textIndex);

        $('#rotatingTraits').html(rotate.textList[textIndex]);

        var nextIndex = (textIndex + 1) % (rotate.textList.length)

        setTimeout(()=>{
            $('#rotatingTraits').css({'transition':'0.5s', 'opacity':'1'});
        }, 100)
        setTimeout(()=>{
            $('#rotatingTraits').css({'transition':'0.5s', 'opacity':'0'});
        }, 2000);
        setTimeout(()=>{
            rotate.traitText(nextIndex);
        }, 2600)

    }

}
