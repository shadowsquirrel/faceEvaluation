let rotate = {}

rotate.textList = [
    'Attractiveness',
    'Intelligence',
    'Competence',
    'Likeability',
    'Friendlines'
]

rotate.infoTextOn = true;

rotate.traitText = function(textIndex) {

    if(rotate.infoTextOn) {

        $('#rotatingTraits').html(rotate.textList[textIndex]);

        var nextIndex = (textIndex + 1) % (rotate.textList.length - 1)

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
