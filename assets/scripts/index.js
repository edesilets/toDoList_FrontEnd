'use strict';

require('./example.js');
let access = require('./api-requests/access.js');
let test = require('./ui/actions.js');

// handlebars template require below
let navbarTemplate = require('./handlebars/navbar.handlebars');

let init = function() {
  // Main Functionaliy
  $('.navbar').append(navbarTemplate());
  $('#register').on('submit', access.signUp);
  $('#logIn').on('submit', access.signIn);
  $('#logOut').on('submit', access.signOut);
  $('#changePw').on('submit', access.chPass);
  // Other functions below
  test.grabListId();
};

$(document).ready(init);
