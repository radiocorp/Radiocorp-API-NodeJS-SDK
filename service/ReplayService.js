'use strict';


/**
 * Get Replay shows and their replay items for a specific day, we deliver replay for only the last 7 days.
 *
 * date String Date to get replay for (optional)
 * returns ReplayDaily
 **/
exports.replayDaily_get = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "error" : "An error message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all replay items for a programm.
 *
 * programmUnderscoreid Integer Programm ID of the show (optional)
 * returns ReplayProgramm
 **/
exports.replayProgramm_get = function(programmUnderscoreid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ null, null ],
  "error" : "An error message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

