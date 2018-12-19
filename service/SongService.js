'use strict';


/**
 * Get the current song on-air.
 *
 * station String Select a other station than the main station, it is selectet bij the short station name! (optional)
 * returns SongCurrent
 **/
exports.songCurrentSong_get = function(station) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ {
    "station" : {
      "name" : "100% Feest",
      "short_name" : "100p_feest"
    },
    "items" : [ {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    }, {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    } ]
  }, {
    "station" : {
      "name" : "100% Feest",
      "short_name" : "100p_feest"
    },
    "items" : [ {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    }, {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    } ]
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
 * [INTERNAL] Save the current song to the API.
 *
 * no response value expected for this operation
 **/
exports.songCurrentSong_put = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the playlist of a station.
 *
 * station String Select a other station than the main station, it is selectet bij the short station name! (optional)
 * date String Date of the playlist if date not set is the current date. (optional)
 * hour String The hour you want to pick up, the first hour is 00 and the last 23 leaves this value empty if you want to pick up all day. (optional)
 * returns SongPlaylist
 **/
exports.songPlaylist_get = function(station,date,hour) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "data" : [ {
    "station" : {
      "name" : "100% Feest",
      "short_name" : "100p_feest"
    },
    "items" : [ {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    }, {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    } ],
    "playlistinfo" : {
      "date" : "2000-01-23",
      "tracks_played" : 15,
      "hour" : "11",
      "start" : "2000-01-23T04:56:07.000+00:00",
      "end" : "2000-01-23T04:56:07.000+00:00"
    }
  }, {
    "station" : {
      "name" : "100% Feest",
      "short_name" : "100p_feest"
    },
    "items" : [ {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    }, {
      "metadata" : {
        "duration_sec" : 185
      },
      "artist" : "André Hazes Jr.",
      "starttime" : "2000-01-23T04:56:07.000+00:00",
      "title" : "Wie Kan Mij Vertellen"
    } ],
    "playlistinfo" : {
      "date" : "2000-01-23",
      "tracks_played" : 15,
      "hour" : "11",
      "start" : "2000-01-23T04:56:07.000+00:00",
      "end" : "2000-01-23T04:56:07.000+00:00"
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
 * [INTERNAL] Save the station to the API.
 *
 * no response value expected for this operation
 **/
exports.songStations_put = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

