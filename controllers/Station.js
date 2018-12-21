'use strict';

var utils = require('../utils/writer.js');
var Station = require('../service/StationService');

module.exports.stationBroadcastById_get = function stationBroadcastById_get (req, res, next) {
  var broadcastUnderscoreid = req.swagger.params['broadcast_id'].value;
  Station.stationBroadcastById_get(broadcastUnderscoreid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stationPresenterById_get = function stationPresenterById_get (req, res, next) {
  var presenterUnderscoreid = req.swagger.params['presenter_id'].value;
  Station.stationPresenterById_get(presenterUnderscoreid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stationPresenterList_get = function stationPresenterList_get (req, res, next) {
  Station.stationPresenterList_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stationProgramById_get = function stationProgramById_get (req, res, next) {
  var programUnderscoreid = req.swagger.params['program_id'].value;
  Station.stationProgramById_get(programUnderscoreid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stationProgramlist_get = function stationProgramlist_get (req, res, next) {
  Station.stationProgramlist_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
