// ------------------------- //
// ------ WIGGLE ARROW ----- //
// ------------------------- //

var arrow = {}

arrow.wiggleOnList = [1,1,1,1]

arrow.wiggle0 = function(state) {

    if(arrow.wiggleOnList[0]) {

        if(state === 0) {

            $('.pointer-0').css({'transition':'1s', 'margin-left':'-8%'});

            setTimeout(()=>{
                arrow.wiggle0(1);
            }, 600)

        }

        if(state === 1) {

            $('.pointer-0').css({'transition':'1s', 'margin-left':'-4%'});

            setTimeout(()=>{
                arrow.wiggle0(0);
            }, 600)

        }

    } else {

        $('.pointer-0').css({'transition':'0.3s', 'opacity':'0', 'transform':'scale(0)'});
        setTimeout(()=>{
            $('.pointer-0').css({'display':'none'});
        }, 300)

    }

}

arrow.wiggle1 = function(state) {

    if(arrow.wiggleOnList[1]) {

        if(state === 0) {

            $('.pointer-1').css({'transition':'1s', 'margin-left':'-8%'});

            setTimeout(()=>{
                arrow.wiggle1(1);
            }, 600)

        }

        if(state === 1) {

            $('.pointer-1').css({'transition':'1s', 'margin-left':'-4%'});

            setTimeout(()=>{
                arrow.wiggle1(0);
            }, 600)

        }

    } else {

        $('.pointer-1').css({'transition':'0.3s', 'opacity':'0', 'transform':'scale(0)'});
        setTimeout(()=>{
            $('.pointer-1').css({'display':'none'});
        }, 300)

    }

}

arrow.wiggle2 = function(state) {

    if(arrow.wiggleOnList[2]) {

        if(state === 0) {

            $('.pointer-2').css({'transition':'1s', 'margin-left':'-8%'});

            setTimeout(()=>{
                arrow.wiggle2(1);
            }, 600)

        }

        if(state === 1) {

            $('.pointer-2').css({'transition':'1s', 'margin-left':'-4%'});

            setTimeout(()=>{
                arrow.wiggle2(0);
            }, 600)

        }

    } else {

        $('.pointer-2').css({'transition':'0.3s', 'opacity':'0', 'transform':'scale(0)'});
        setTimeout(()=>{
            $('.pointer-2').css({'display':'none'});
        }, 300)

    }

}

arrow.wiggle3 = function(state) {

    if(arrow.wiggleOnList[3]) {

        if(state === 0) {

            $('.pointer-3').css({'transition':'1s', 'margin-left':'-8%'});

            setTimeout(()=>{
                arrow.wiggle3(1);
            }, 600)

        }

        if(state === 1) {

            $('.pointer-3').css({'transition':'1s', 'margin-left':'-4%'});

            setTimeout(()=>{
                arrow.wiggle3(0);
            }, 600)

        }

    } else {

        $('.pointer-3').css({'transition':'0.3s', 'opacity':'0', 'transform':'scale(0)'});
        setTimeout(()=>{
            $('.pointer-3').css({'display':'none'});
        }, 300)

    }

}


arrow.destroyAll = function() {

    $('.pointer-0').css({'display':'none'});
    $('.pointer-1').css({'display':'none'});
    $('.pointer-2').css({'display':'none'});
    $('.pointer-3').css({'display':'none'});

}


// ------------------------- //
// -------- SLIDERS -------- //
// ------------------------- //

let slider = {};
let decision = {
    attract:undefined,
    intel:undefined,
    comp:undefined,
    friend:undefined,
}

slider.activatedList = [0,0,0,0];
slider.showButton = function() {

    let sum = slider.activatedList.reduce((a,b) => a + b, 0)

    if(sum === 4) {

        setTimeout(()=>{

            $('.frame-button').css({'transition':'0.15s',
            'opacity':'1', 'transform':'scale(1)'});

        }, 250)

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
    mColor = '#346f82';



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
            size: '30',
            color:'white',
        },
        orientation: 'h',
        insidetextanchor: 'middle',
        textposition: 'inside',
    }];



    var layout = {
        plot_bgcolor:'white',
        paper_bgcolor: 'white',
        // paper_bgcolor: 'white',
        barmode: 'group',
        height: 60,
        width: 350,
        margin: {"t": 0, "b": 0, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: myRange,
            layer: 'below traces',
            tickfont: {
                size: 0,
                color:'transparent',
            },
            // tickmode: 'array',
            // tickvals: myTickVal,
            // ticktext: myTickText,
            // tickangle: 0,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            // gridcolor: "rgb(207, 202, 202)",
            gridcolor: "white",
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

slider.attract.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.attract.value);

    decision.attract = val;

    arrow.wiggleOnList[0] = false;

    // update bar plot
    slider.bar(val, 'attractBar');

    // update slider activated switch
    // console.log('attract slider is changed');
    slider.activatedList[0] = 1;
    slider.showButton();

}
slider.intel.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.intel.value);

    decision.intel = val;

    arrow.wiggleOnList[1] = false;

    // update bar plot
    slider.bar(val, 'intelBar');

    // console.log('intel slider is changed');
    slider.activatedList[1] = 1;
    slider.showButton();

}
slider.comp.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.comp.value);

    decision.comp = val;

    arrow.wiggleOnList[2] = false;

    // update bar plot
    slider.bar(val, 'compBar');

    // console.log('comp slider is changed');
    slider.activatedList[2] = 1;
    slider.showButton();

}
slider.friend.oninput = function() {

    // get the value from the slider
    var val = parseFloat(slider.friend.value);

    decision.friend = val;

    arrow.wiggleOnList[3] = false;

    // update bar plot
    slider.bar(val, 'friendBar');

    // console.log('friend slider is changed');
    slider.activatedList[3] = 1;
    slider.showButton();

}

slider.bar(0, 'attractBar');
slider.bar(0, 'intelBar');
slider.bar(0, 'compBar');
slider.bar(0, 'friendBar');
