'use strict';

var utils = require('../utils/writer.js');
var Replay = require('../service/ReplayService');

module.exports.replayDaily_get = function replayDaily_get (req, res, next) {
  var date = req.swagger.params['date'].value;
  Replay.replayDaily_get(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replayProgramm_get = function replayProgramm_get (req, res, next) {
  var programmUnderscoreid = req.swagger.params['programm_id'].value;
  Replay.replayProgramm_get(programmUnderscoreid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
