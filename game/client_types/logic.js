/**
 * # Logic type implementation of the game stages
 * Copyright(c) 2021 Can Celebi <cnelebi@gmail.com>
 * MIT Licensed
 *
 * http://www.nodegame.org
 * ---
 */

"use strict";

const ngc = require('nodegame-client');
const J = ngc.JSUS;

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    let node = gameRoom.node;
    let channel = gameRoom.channel;
    let memory = node.game.memory;

    // Make the logic independent from players position in the game.
    stager.setDefaultStepRule(ngc.stepRules.SOLO);

    stager.setOnInit(function() {

        //-------- BASIC DEBUG METHOD --------//

        // Identifies the player in the console
        node.game.showPlayer = function(player) {
            // console.log();
            // console.log('Player ' + player.count);
        };

        // Enables logging to console from player.js
        node.on.data('debug', function(msg) {
            let player = node.game.pl.get(msg.from);
            node.game.showPlayer(player);
            // console.log(msg.data);
        });

        // --------------------------------- //

        node.game.pictureIndex = [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
        ]

        // debug
        // node.game.pictureIndex = [
        //     1,2
        // ]

        node.game.initPlayer = function(player) {

            if(!player.initiated) {

                player.pictureIndexOrder = J.shuffle(node.game.pictureIndex);

                player.evalRound = 0;

                // console.log('PLAYER ' + player.id +
                // 'IS INITIATED!');
                // console.log(player.pictureIndexOrder);

                player.initiated = true;


            } else {

                console.log('Player is ALREADY initiated !!!');

            }

        }

        node.on.data('initPlayer', function(msg) {

            // console.log('LOGIC: PLAYER INITIATION REQUESTED');

            let player = node.game.pl.get(msg.from);

            node.game.initPlayer(player);

        })

        node.on.data('LOGIC-requestCurrentPicture', function(msg) {

            let player = node.game.pl.get(msg.from);

            let pIndex = player.evalRound;

            player.evalRound++;

            let currentFaceIndex = player.pictureIndexOrder[pIndex];

            let data = {
                currentFaceIndex: player.pictureIndexOrder[pIndex],
                currentRound: player.evalRound
            }

            console.log(data);

            node.say('LOGIC-nextPicture', player.id, data);

        })


        memory.view('attractiveness').save('evaluation.csv', {

            header: [
                'player',
                'index',
                'attractiveness',
                'intelligence',
                'competence',
                'friendliness',
            ],

            keepUpdated: true

        })

        // saving subject survey data
        memory.view('age').save('survey.csv', {

            header: [
                'player',
                'gender',
                'age',
                'race',
                'otherRace'
            ],

            keepUpdated: true

        })


        memory.view('feedback').save('feedback.csv', {

            header: [
                'player',
                'feedback'
            ],

            keepUpdated: true

        })


        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
        // ++++++++++++                                         ++++++++++++ //
        // +++++++++           DISCONNECTION LISTENER              +++++++++ //
        // ++++++                                                     ++++++ //

        node.game.disconnected = {};

        node.game.disconnected.oguzAtay = function(player) {

            console.log();
            console.log();
            console.log(' --- Player ' + player.id + ' is disconnected ---');
            console.log(' --- Disconnected player\'s count is ' + player.count + ' ---');
            console.log();
            console.log(' --- Disconnected player\'s info in logic data base ---');
            console.log(' -- picture index order -- ');
            console.log(player.pictureIndexOrder);
            console.log(' -- is initiated-- ');
            console.log(player.initiated);
            console.log(' -- evaluation round -- ');
            console.log(player.evalRound);
            console.log('-- reseting players eval round --');
            player.evalRound--;
            if(player.evalRound === -1) {
                player.evalRound = 0;
            }
            console.log(' -- RESETED evaluation round -- ');
            console.log(player.evalRound);
            console.log();
            console.log();

        }

        node.on.pdisconnect(function(player) {

            node.game.disconnected.oguzAtay(player);

        })

        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
        // ++++++++++++                                         ++++++++++++ //
        // +++++++++         REINTRODUCING THE DISCONNECTED        +++++++++ //
        // ++++++


        // node.game.disconnected.reIntroduce = function(player) {
        //
        //     console.log();
        //     console.log();
        //     console.log(' --- Player ' + player.id + ' is reconnected ---');
        //     console.log(' --- Reconnected player\'s count is ' + player.count + ' ---');
        //     console.log();
        //     console.log(' --- Reconnected player\'s info in logic data base ---');
        //     console.log(' -- picture index order -- ');
        //     console.log(player.pictureIndexOrder);
        //     console.log(' -- is initiated-- ');
        //     console.log(player.initiated);
        //     console.log(' -- evaluation round -- ');
        //     console.log(player.evalRound);
        //     console.log();
        //     console.log();
        //
        //     // disconnected before evaluating the previous round
        //     // so we go back to the previous round
        //     player.evalRound--;
        //
        //     let pIndex = player.evalRound - 1;
        //
        //     let currentFaceIndex = player.pictureIndexOrder[pIndex];
        //
        //     let data = {
        //         currentFaceIndex: player.pictureIndexOrder[pIndex],
        //         currentRound: player.evalRound
        //     }
        //
        //     console.log(' -- data to be sent to the reconnected player');
        //     console.log(data);
        //
        //     node.say('LOGIC-nextPicture', player.id, data);
        //
        // }



    });

    stager.extendStep('evaluation', {

        reconnect: function(player, reconOpts) {

            // console.log();
            // console.log();
            // console.log('--------- INSIDE RECONNECT OPT -----------');
            // console.log();
            // console.log();

            // node.game.disconnected.reIntroduce(player);

        },

        init: function() {

            // console.log(' ---- EVALUATION STAGE ----- ');

        },

        cb: function() {

        }

    });

    stager.setOnGameOver(function() {
        // Something to do.
    });
};
