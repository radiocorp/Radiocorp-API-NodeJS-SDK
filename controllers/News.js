'use strict';

var utils = require('../utils/writer.js');
var News = require('../service/NewsService');

module.exports.newsNewsReader_get = function newsNewsReader_get (req, res, next) {
  News.newsNewsReader_get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newsWeather_get = function newsWeather_get (req, res, next) {
  var provider = req.swagger.params['provider'].value;
  News.newsWeather_get(provider)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
