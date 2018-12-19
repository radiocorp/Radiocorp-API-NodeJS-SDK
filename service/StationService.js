'use strict';


/**
 * Get a specific presenter by its unique id.
 *
 * presenterUnderscoreid Integer Only retrieve a specific presenter (optional)
 * returns StationPresenterById
 **/
exports.stationPresenterById_get = function(presenterUnderscoreid) {
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
 * Get a list of all active presenters of the station.
 *
 * returns StationPresenterList
 **/
exports.stationPresenterList_get = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ {
    "presenter_id" : 1,
    "header" : {
      "image_default" : "http://www.slam.nl/uploads/2017/11/mixmarathon-header.jpg",
      "image_mobile" : "http://www.slam.nl/uploads/2017/11/mixmarathon-mobiel.jpg"
    },
    "fullname" : "John Doe",
    "info" : {
      "photo" : "http://www.slam.nl/uploads/2017/11/mixmarathon-mobiel.jpg",
      "biography" : "HTML Formatted content"
    }
  }, {
    "presenter_id" : 1,
    "header" : {
      "image_default" : "http://www.slam.nl/uploads/2017/11/mixmarathon-header.jpg",
      "image_mobile" : "http://www.slam.nl/uploads/2017/11/mixmarathon-mobiel.jpg"
    },
    "fullname" : "John Doe",
    "info" : {
      "photo" : "http://www.slam.nl/uploads/2017/11/mixmarathon-mobiel.jpg",
      "biography" : "HTML Formatted content"
    }
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


/**
 * Get a specific program, and all the available information for that program
 *
 * programUnderscoreid Integer Only retrieve a specific program (optional)
 * returns StationProgramById
 **/
exports.stationProgramById_get = function(programUnderscoreid) {
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
 * Get a list of all programs which are available for publishing.
 *
 * returns StationProgramList
 **/
exports.stationProgramlist_get = function() {
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

