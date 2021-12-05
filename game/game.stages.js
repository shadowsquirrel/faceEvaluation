/**
 * # Game stages definition file
 * Copyright(c) 2021 Can Celebi <cnelebi@gmail.com>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    stager
       .next('instructions')
       .repeat('evaluation', settings.ROUNDS)
       .next('survey')
       .next('end')
       .gameover();

   // Modify the stager to skip one stage.
   // stager.skip('instructions');
   // stager.skip('evaluation');
   // stager.skip('survey');
   // stager.skip('end');


    // Notice: here all stages but 'game' have
    // one step named after the stage.

    // Skip one stage.
    // stager.skip('instructions');

    // Skip multiple stages:
    // stager.skip([ 'instructions', 'quiz' ])

    // Skip a step within a stage:
    // stager.skip('game', 'results');
};
