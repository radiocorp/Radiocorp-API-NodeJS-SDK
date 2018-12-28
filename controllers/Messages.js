'use strict';

var utils = require('../utils/writer.js');
var Messages = require('../service/MessagesService');

module.exports.messagesConversation_get = function messagesConversation_get (req, res, next) {
  var hash = req.swagger.params['hash'].value;
  var page = req.swagger.params['page'].value;
  Messages.messagesConversation_get(hash,page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesList_get = function messagesList_get (req, res, next) {
  var lastUnderscoremsg = req.swagger.params['last_msg'].value;
  var msgs = req.swagger.params['msgs'].value;
  var limit = req.swagger.params['limit'].value;
  var sincedate = req.swagger.params['sincedate'].value;
  var todate = req.swagger.params['todate'].value;
  Messages.messagesList_get(lastUnderscoremsg,msgs,limit,sincedate,todate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
