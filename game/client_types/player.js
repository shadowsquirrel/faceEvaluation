/**
 * # Player type implementation of the game stages
 * Copyright(c) 2021 Can Celebi <cnelebi@gmail.com>
 * MIT Licensed
 *
 * Each client type must extend / implement the stages defined in `game.stages`.
 * Upon connection each client is assigned a client type and it is automatically
 * setup with it.
 *
 * http://www.nodegame.org
 * ---
 */

"use strict";

const ngc = require('nodegame-client');

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    // Make the player step through the steps without waiting for other players.
    stager.setDefaultStepRule(ngc.stepRules.SOLO);

    stager.setOnInit(function() {

        // Initialize the client.

        var header;

        // Setup page: header + frame.
        // header = W.generateHeader(); // -> not generating the header
        W.generateFrame();

        // No need to show the wait for other players screen in single-player
        // games.
        W.init({ waitScreen: false });

        // for debug
        this.talk = function(msg){
            node.say('debug', 'SERVER', msg);
        };



        // ------------------------------------------------------------------ //
        // -   - -   - -   - -   - -   - -   - -   - -   - -   - -   - -   -  //
        // ------------------------------------------------------------------ //
        // -   - -   - -   - -   - -   - -   - -   - -   - -   - -   - -   -  //
        // --------------------------  HIGHWAY  ----------------------------- //
        // -   - -   - -   - -   - -   - -   - -   - -   - -   - -   - -   -  //
        // ------------------------------------------------------------------ //
        // -   - -   - -   - -   - -   - -   - -   - -   - -   - -   - -   -  //
        // ------------------------------------------------------------------ //

        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //
        // -------------------                          --------------------- //
        // -------------------     CLIENT --> LOGIC     --------------------- //
        // -------------------                          --------------------- //
        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //

        node.say('initPlayer', 'SERVER')

        // ------------------------------------------------------------------- //
        // ------------------------------------------------------------------ //
        // -------------------                          --------------------- //
        // -------------------      HTML --> CLIENT     --------------------- //
        // -------------------                          --------------------- //
        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //

        // At the beginning of every round this is triggered by html
        // to acquire the facial picture to evaluate
        // response from LOGIC is received at the below LOGIC-nextPicture listener
        node.on('HTML-requestCurrentPicture', function() {

            // this.talk('CLIENT: HTML REQUESTING PLAYER DATA');

            // -------------------------------------------- //
            // -----------  CLIENT --> LOGIC  ------------- //
            // -------------------------------------------- //
            node.say('LOGIC-requestCurrentPicture', 'SERVER');

        })

        // node.done the evaluation of the current picture
        node.on('HTML-reportEvaluation', function(msg) {

            // node.game.talk('CLIENT SIDE: DECISION DATA IS RECEIVED FROM HTML')
            // node.game.talk(msg)

            node.done({
                index: msg.pIndex,
                attractiveness: msg.attract,
                intelligence: msg.intel,
                competence: msg.comp,
                friendliness: msg.friend,
                likeability: msg.like
            })

        })


        node.on('HTML-reportSurveyResults', function(msg) {

            this.talk('CLIENT: SURVEY RESULTS RECEIVED')
            this.talk(msg.age);
            this.talk(msg.gender);
            this.talk(msg.race);
            this.talk(msg.otherRaces)
            this.talk('----------------')

            // -------------------------------------------- //
            // -----------  CLIENT --> LOGIC  ------------- //
            // -------------------------------------------- //
            node.done({
                age:msg.age,
                gender:msg.gender,
                race:msg.race,
                otherRace:msg.otherRace,
            })

        })


        node.on('HTML-finishIntro', function() {

            // this.talk('DONE WITH TUTORIAL');

            node.done();

        })
        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //
        // -------------------                          --------------------- //
        // -------------------      LOGIC --> HTML      --------------------- //
        // -------------------                          --------------------- //
        // ------------------------------------------------------------------ //
        // ------------------------------------------------------------------ //

        // logic sends the facial image index to here which is passed to html
        node.on.data('LOGIC-nextPicture', function(msg) {

            // node.game.talk('inside LOGIC-nextPicture');
            // node.game.talk('INDEX RECEIVED: ');
            // node.game.talk(msg.data);

            node.emit('HTML-receiveCurrentPicture', msg.data);

        })




    });

    stager.extendStep('instructions', {
        frame: 'intro.htm',
        cb: function() {

        }
    });

    stager.extendStep('evaluation', {
        frame: 'faceEval.htm',
        cb: function() {

        }
    });

    stager.extendStep('survey', {
        frame: 'survey.htm',
        cb: function() {

        }
    });

    stager.extendStep('end', {
        frame: 'finalScreen.htm',
        cb: function() {
            setTimeout(()=>{
                // this.talk('END THE EXPERIMENT')
                node.done();
            }, 30000)
        }
    });

};
