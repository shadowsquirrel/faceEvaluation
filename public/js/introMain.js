window.onload = function() {

    var node = parent.node;

    $('#okButton-10').click(function() {

        node.emit('HTML-finishIntro');

    })


    var arrow = {}

    arrow.wiggleOnList = [1,1,1,1,1];

    arrow.wiggle3 = function(state) {

        if(arrow.wiggleOnList[3]) {

            if(state === 0) {

                $('.pointer-3').css({'transition':'1s', 'margin-left':'11%'});

                setTimeout(()=>{
                    arrow.wiggle3(1);
                }, 600)

            }

            if(state === 1) {

                $('.pointer-3').css({'transition':'1s', 'margin-left':'8%'});

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

    // ----------------------- //

    var slider = {};

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

    slider.attract.oninput = function() {

        // get the value from the slider
        var val = parseFloat(slider.attract.value);

        arrow.wiggleOnList[3] = false;

        // update bar plot
        slider.bar(val, 'attractBar');

    }


    slider.bar(0, 'attractBar');

    arrow.wiggle3(0);

}
