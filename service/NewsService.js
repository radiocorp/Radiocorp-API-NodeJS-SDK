'use strict';


/**
 * Get the current NewsReader.
 *
 * returns NewsNewsReader
 **/
exports.newsNewsReader_get = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : {
    "added" : "2000-01-23T04:56:07.000+00:00",
    "reader" : "Robert-Jan Knook",
    "create" : "2000-01-23T04:56:07.000+00:00",
    "source" : "ANP"
  },
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
 * Get the last Wheather.
 *
 * provider String From which provider do you want to load the bulletin, possible values are 'anp' or 'weeronline' (optional)
 * returns NewsWeather
 **/
exports.newsWeather_get = function(provider) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : {
    "added" : "2000-01-23T04:56:07.000+00:00",
    "length" : "12 sec",
    "create" : "2000-01-23T04:56:07.000+00:00",
    "writer" : "Robert-Jan Knook",
    "source" : "ANP",
    "message" : "Het weer.<br /><br />Het is bewolkt met hier en daar motregen. 4 tot 6 graden. Morgen is het droog en behoorlijk fris. 's middags wat zon. De rest van de week meer kans op regen en zachter."
  },
  "error" : "An error message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

