'use strict';
const env = require('../env.js');

let getItems = function (id, onSuccess, onFailure) {
  $.ajax({
    url: env.envVars.url + "lists/" + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token='+ env.envVars.user.user.token,
    },
    dataType: 'json'
  })
  .done(onSuccess)
  .fail(onFailure);
};

let deleteItem = function (id, onSuccess, onFailure) {
  $.ajax({
    url: env.envVars.url + "items/" + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token='+ env.envVars.user.user.token,
    },
    dataType: 'json'
  })
  .done(onSuccess)
  .fail(onFailure);
  console.log('delete items AJAX just got hit.');
  console.log('delete item id of', id);
};

let getLists = function () {
  $.ajax({
    url: env.envVars.url + 'lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + env.envVars.user.user.token,
    },
    dataType: 'json'
  }).done(function(lists) {
    let listsTemplate = require('../handlebars/lists.handlebars');
    $('#sel-list').append(listsTemplate({lists}));
    console.log('get the list', lists);
  });
};

module.exports = {
  getLists,
  getItems,
  deleteItem
};
