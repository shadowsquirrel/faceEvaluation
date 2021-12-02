window.onload = function() {

    var node = parent.node;

    $('#okButton-7').click(function() {

        node.emit('HTML-finishIntro');

    })


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

        // update bar plot
        slider.bar(val, 'attractBar');

    }


    slider.bar(0, 'attractBar');

}
