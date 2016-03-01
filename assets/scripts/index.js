'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example.js');
let access = require('./api-requests/access.js');

let init = function() {
  $('.game-page').hide();
  $('#register').on('submit', access.signUp);
    //function () {
    // let passFail = access.signUp;
    // console.log(passFail);
    // if (passFail) {
    //   // close modal
    //   //congrats on access
    //   console.log("congrats you register sucess full");
    // } else {
    //   // red text says fails : user exists Try again.
    //   console.log("user exists");
    // }
    //});
  $('#logIn').on('submit', access.logIn);
  $('#logOut').on('submit', access.logOut);
  // $('#changePw').on('submit', access.chPass);
};

$(document).ready(init);
