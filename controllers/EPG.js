'use strict';

var utils = require('../utils/writer.js');
var EPG = require('../service/EPGService');

module.exports.epgCurrentShow_get = function epgCurrentShow_get (req, res, next) {
  EPG.epgCurrentShow_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epgNextHour_get = function epgNextHour_get (req, res, next) {
  EPG.epgNextHour_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epgNextShow_get = function epgNextShow_get (req, res, next) {
  EPG.epgNextShow_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.epgWeeklyEpg_get = function epgWeeklyEpg_get (req, res, next) {
  var startdate = req.swagger.params['startdate'].value;
  var firstfull = req.swagger.params['firstfull'].value;
  var days = req.swagger.params['days'].value;
  EPG.epgWeeklyEpg_get(startdate,firstfull,days)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
