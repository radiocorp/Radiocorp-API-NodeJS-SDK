'use strict';

var utils = require('../utils/writer.js');
var Song = require('../service/SongService');

module.exports.songCurrentSong_get = function songCurrentSong_get (req, res, next) {
  var station = req.swagger.params['station'].value;
  Song.songCurrentSong_get(station)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songCurrentSong_put = function songCurrentSong_put (req, res, next) {
  Song.songCurrentSong_put()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songPlaylist_get = function songPlaylist_get (req, res, next) {
  var station = req.swagger.params['station'].value;
  var date = req.swagger.params['date'].value;
  var hour = req.swagger.params['hour'].value;
  Song.songPlaylist_get(station,date,hour)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songStations_put = function songStations_put (req, res, next) {
  Song.songStations_put()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
