'use strict';

var utils = require('../utils/writer.js');
var RadioManager = require('../service/RadioManagerService');

module.exports.radiomanagerPush_post = function radiomanagerPush_post (req, res, next) {
  RadioManager.radiomanagerPush_post()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
