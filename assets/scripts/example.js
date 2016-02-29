'use strict';

const api = require('./api-requests/api.js');

$( document ).ready(function() {
  $('.listname').text('List Name!');
  $('.listbox').text('listbox');
  $('.item').text('listsbox');
  getAll();

  // user require with a reference to bundle the file and use it in this file
  // let example = require('./example');
});

let getAll = function () {
  $.ajax({
    url: "http://localhost:3000/items",
    method: 'GET',
    headers: {
      Authorization: 'Token token=951473cfb9adf638cb12eb994c2679e3',
    },
    dataType: 'json'
  }).done(function(data) {
    let template = require('./handlebars/list-item.handlebars');
    $('.dog').append(template({data}));
    console.log(data);
  });
};

module.exports = true;
