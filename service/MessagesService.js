'use strict';


/**
 * [INTERNAL] Get the conversation based on a message hash
 *
 * hash String The hash where you want the conversation for (optional)
 * page String The page you want to retreive (optional)
 * returns MessagesList
 **/
exports.messagesConversation_get = function(hash,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ {
    "message_empty" : true,
    "message_hash" : "6c2a0df98972881bdaaba5b2636b29ac",
    "attachment" : {
      "thumb_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg/small",
      "full_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg",
      "id" : 57454,
      "type" : "image",
      "hash" : "5e719eb0f090d1603cb856165953a3ce"
    },
    "parent_id" : 465113,
    "contact" : {
      "msisdn_readable" : "06 12345678",
      "name" : "John Doe",
      "id" : 57454,
      "msisdn" : "31612345678",
      "email" : "john@example.com"
    },
    "message_id" : 465114,
    "message_type" : "app",
    "to_visual" : true,
    "received" : {
      "today" : true,
      "received_iso" : "2000-01-23",
      "received_time" : "21:54:37",
      "timestamp" : 1545512077
    },
    "reply_allowed" : true,
    "message" : "This is the message body"
  }, {
    "message_empty" : true,
    "message_hash" : "6c2a0df98972881bdaaba5b2636b29ac",
    "attachment" : {
      "thumb_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg/small",
      "full_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg",
      "id" : 57454,
      "type" : "image",
      "hash" : "5e719eb0f090d1603cb856165953a3ce"
    },
    "parent_id" : 465113,
    "contact" : {
      "msisdn_readable" : "06 12345678",
      "name" : "John Doe",
      "id" : 57454,
      "msisdn" : "31612345678",
      "email" : "john@example.com"
    },
    "message_id" : 465114,
    "message_type" : "app",
    "to_visual" : true,
    "received" : {
      "today" : true,
      "received_iso" : "2000-01-23",
      "received_time" : "21:54:37",
      "timestamp" : 1545512077
    },
    "reply_allowed" : true,
    "message" : "This is the message body"
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
 * [INTERNAL] Get the messages for this station based on filters defined down here.
 *
 * lastUnderscoremsg Integer The id from or up to which message you want to get, if it's a positive integer you will get messages newer than the provided id, if you provide a negative integer you will get messages older than the id (optional)
 * msgs Integer A comma seperated list of message ids you want to receive, in this case, limit will be ommited (optional)
 * limit Integer The maximum of messages to return (optional)
 * sincedate date Return messages since this datetime (optional)
 * todate date Return messages up to this datetime (optional)
 * returns MessagesList
 **/
exports.messagesList_get = function(lastUnderscoremsg,msgs,limit,sincedate,todate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ {
    "message_empty" : true,
    "message_hash" : "6c2a0df98972881bdaaba5b2636b29ac",
    "attachment" : {
      "thumb_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg/small",
      "full_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg",
      "id" : 57454,
      "type" : "image",
      "hash" : "5e719eb0f090d1603cb856165953a3ce"
    },
    "parent_id" : 465113,
    "contact" : {
      "msisdn_readable" : "06 12345678",
      "name" : "John Doe",
      "id" : 57454,
      "msisdn" : "31612345678",
      "email" : "john@example.com"
    },
    "message_id" : 465114,
    "message_type" : "app",
    "to_visual" : true,
    "received" : {
      "today" : true,
      "received_iso" : "2000-01-23",
      "received_time" : "21:54:37",
      "timestamp" : 1545512077
    },
    "reply_allowed" : true,
    "message" : "This is the message body"
  }, {
    "message_empty" : true,
    "message_hash" : "6c2a0df98972881bdaaba5b2636b29ac",
    "attachment" : {
      "thumb_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg/small",
      "full_url" : "https://studio.radiocorp.nl/attachment/1545512077_87be30d2dce230a6f6ac7087452fd26b.jpg",
      "id" : 57454,
      "type" : "image",
      "hash" : "5e719eb0f090d1603cb856165953a3ce"
    },
    "parent_id" : 465113,
    "contact" : {
      "msisdn_readable" : "06 12345678",
      "name" : "John Doe",
      "id" : 57454,
      "msisdn" : "31612345678",
      "email" : "john@example.com"
    },
    "message_id" : 465114,
    "message_type" : "app",
    "to_visual" : true,
    "received" : {
      "today" : true,
      "received_iso" : "2000-01-23",
      "received_time" : "21:54:37",
      "timestamp" : 1545512077
    },
    "reply_allowed" : true,
    "message" : "This is the message body"
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

