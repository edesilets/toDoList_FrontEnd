'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example.js');
let access = require('./api-requests/access.js');

let init = function() {
  //$('.listwrapper').hide();
  $('#register').on('submit', access.signUp);
  $('#logIn').on('submit', access.logIn);
  $('#logOut').on('submit', access.logOut);
  $('#changePw').on('submit', access.chPass);
};

$(document).ready(init);
