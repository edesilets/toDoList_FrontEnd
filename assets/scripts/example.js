'use strict';
// Require js files below
const api = require('./api-requests/api.js');

// Require handlebars files below

$( document ).ready(function() {
  $('.listname').text('List Name!');
  $('.listbox').text('listbox');
  $('.item').text('listsbox');
  //getItems();
  getLists();

  // user require with a reference to bundle the file and use it in this file
  // let example = require('./example');
});

let getItems = function () {
  $.ajax({
    url: "http://localhost:3000/items",
    method: 'GET',
    headers: {
      Authorization: 'Token token=7afe163c52a8ad3381dae7008f56fb6f',
    },
    dataType: 'json'
  }).done(function(data) {
    let template = require('./handlebars/list-item.handlebars');
    $('.dog').append(template({data}));
    console.log(data);
  });
};

let getLists = function () {
  $.ajax({
    url: "http://localhost:3000/lists",
    method: 'GET',
    headers: {
      Authorization: 'Token token=7afe163c52a8ad3381dae7008f56fb6f',
    },
    dataType: 'json'
  }).done(function(data) {
    let listsTemplate = require('./handlebars/list-wrapper.handlebars');
    $('.listwrapper').append(listsTemplate({data}));
    console.log(data);
  });
};

module.exports = true;
