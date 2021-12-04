
// gender buttons
let genderDecisionList = ['female', 'male', 'diverse'];

genderDecisionList.forEach(i => {

    var string = '#' + i;

    $(string).click(function() {

        var index = genderDecisionList.indexOf(i);

        // console.log('gender index: ' + index);

        decision.gender = index;

        // console.log('gender decision: ' + decision.gender);

        question.next();

    });

});


// age buttons
let ageDecisionList = [
    '18-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75plus'
];

ageDecisionList.forEach(i => {

    var string = '#' + i;

    $(string).click(function() {

        var index = ageDecisionList.indexOf(i);

        // console.log('age index: ' + index);

        decision.age = index;

        // console.log('age decision: ' + decision.age);

        question.next();

    });

});



// race buttons
let raceDecisionList = [
    'alaska', 'asian', 'hispanic', 'black', 'pacific', 'white', 'other'
];

raceDecisionList.forEach(i => {

    var string = '#' + i;

    $(string).click(function() {

        var index = raceDecisionList.indexOf(i);

        console.log('race index: ' + index);

        decision.race = index;

        console.log('race decision: ' + decision.race);

        console.log(string);


        if(string === '#other') {
            question.otherActive = true;
            console.log('other button clicked');
            console.log(question.otherActive);
        }

        question.next();


    });

});

$('#otherRaceInputButton').click(function() {

    if($('#otherRace').val() != '') {


        decision.otherRace = $('#otherRace').val();
        console.log(decision.otherRace);

        console.log('end survey');

        decision.save();

    } else {

        $('.formWarningText').css({'opacity':'1'});

    }

})
