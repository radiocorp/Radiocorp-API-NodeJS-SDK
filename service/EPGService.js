'use strict';


/**
 * Get the current on-air show.
 *
 * returns EpgShow
 **/
exports.epgCurrentShow_get = function() {
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
 * Get the show which aires the next hour.
 *
 * returns EpgShow
 **/
exports.epgNextHour_get = function() {
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
 * Get the next show which is gonna be aired.
 *
 * returns EpgShow
 **/
exports.epgNextShow_get = function() {
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
 * Get the full Program Guide.
 *
 * startdate String Startdate of the EPG, in format (optional)
 * firstfull Boolean Whether or not the first day will return full or start at the current show (only applys when startdate is today) (optional)
 * days Integer The amount of days to return, minimum amount is 1 and maximum amount is 7, defaults to 7 (optional)
 * returns EpgWeekly
 **/
exports.epgWeeklyEpg_get = function(startdate,firstfull,days) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ {
    "date" : "2000-01-23",
    "day_epg" : [ null, null ],
    "day_count" : 6
  }, {
    "date" : "2000-01-23",
    "day_epg" : [ null, null ],
    "day_count" : 6
  } ],
  "error" : "An error message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

