'use strict';

let access = require('./api-requests/access.js');
let uiAction = require('./ui/actions.js');

// handlebars template require below
let navbarTemplate = require('./handlebars/navbar.handlebars');

let init = function() {
  // Main Functionaliy
  $('.listwrapper').hide();
  $('.navbar').append(navbarTemplate());
  $('#register').on('submit', access.signUp);
  $('#logIn').on('submit', access.signIn);
  $('#logOut').on('submit', access.signOut);
  $('#changePw').on('submit', access.chPass);
  // Other functions below
  uiAction.grabListId();
  uiAction.createListItem();
};

$(document).ready(init);
