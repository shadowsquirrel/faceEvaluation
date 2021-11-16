
let slider = {};
let decision = {
    attract:undefined,
    intel:undefined,
    comp:undefined,
    friend:undefined,
    like:undefined
}

slider.activatedList = [0,0,0,0,0];
slider.showButton = function() {

    let sum = slider.activatedList.reduce((a,b) => a + b, 0)

    if(sum === 5) {
        $('.frame-B-0-1').css({'transition':'0.5s',
        'opacity':'1', 'transform':'scale(1)'});
    }

}

slider.bar = function(val, id) {

    var y = val;

    var myTickVal, myTickText, myRange, myTextPos, colorArrays;
    var tickTextColor, paperColor, cIndex, mColor;

    myTickVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    myTickText = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    myRange = [0, 10];
    myTextPos = 'outside';
    axisOn = true;
    paperColor = 'black';
    tickTextColor = 'white';
    // tickTextColor = 'black';
    // mColor = 'rgb(147,74,255)';
    mColor = 'rgb(108 181 0)';



    var data = [{
        x: [val],
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker:{
            color: mColor,
        },
        text: [val],
        textfont: {
            size: '0',
            color:'transparent',
        },
        orientation: 'h',
        // textanchor: 'right',
        textposition: myTextPos,
    }];



    var layout = {
        plot_bgcolor:"black",
        paper_bgcolor: paperColor,
        // paper_bgcolor: 'white',
        barmode: 'group',
        height: 75,
        width: 487.5,
        margin: {"t": 20, "b": 20, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: myRange,
            layer: 'below traces',
            tickfont: {
                size: 15,
                color:tickTextColor,
            },
            tickmode: 'array',
            tickvals: myTickVal,
            ticktext: myTickText,
            tickangle: 0,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            // gridcolor: "rgb(207, 202, 202)",
            gridcolor: "black",
        },
        yaxis: {
            ticks: '',
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
    }

    Plotly.react(id, data, layout, {displayModeBar: false});

};

slider.attract = document.getElementById('attractSlider');
slider.intel = document.getElementById('intelSlider');
slider.comp = document.getElementById('compSlider');
slider.friend = document.getElementById('friendSlider');
slider.like = document.getElementById('likeSlider');

slider.attract.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.attract.value);

    decision.attract = val;

    // update bar plot
    slider.bar(val, 'attractBar');

    // update slider activated switch
    console.log('attract slider is changed');
    slider.activatedList[0] = 1;
    slider.showButton();

}
slider.intel.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.intel.value);

    decision.intel = val;

    // update bar plot
    slider.bar(val, 'intelBar');

    console.log('intel slider is changed');
    slider.activatedList[1] = 1;
    slider.showButton();

}
slider.comp.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.comp.value);

    decision.comp = val;

    // update bar plot
    slider.bar(val, 'compBar');

    console.log('comp slider is changed');
    slider.activatedList[2] = 1;
    slider.showButton();

}
slider.friend.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.friend.value);

    decision.friend = val;

    // update bar plot
    slider.bar(val, 'friendBar');

    console.log('friend slider is changed');
    slider.activatedList[3] = 1;
    slider.showButton();

}
slider.like.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.like.value);

    decision.like = val;

    // update bar plot
    slider.bar(val, 'likeBar');

    console.log('like slider is changed');
    slider.activatedList[4] = 1;
    slider.showButton();

}

slider.bar(0, 'attractBar');
slider.bar(0, 'intelBar');
slider.bar(0, 'compBar');
slider.bar(0, 'friendBar');
slider.bar(0, 'likeBar');
