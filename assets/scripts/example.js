'use strict';
// Require js files below
const api = require('./api-requests/api.js');
const access = require('./api-requests/access.js');

// Require handlebars files below
let navbarTemplate = require('./handlebars/navbar.handlebars');

$( document ).ready(function() {
  $('.listname').text('List Name!');
  $('.listbox').text('listbox');
  $('.item').text('listsbox');
  $('.navbar').append(navbarTemplate());
});

module.exports = true;
