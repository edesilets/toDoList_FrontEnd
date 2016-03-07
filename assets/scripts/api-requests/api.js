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
};

let getLists = function (onSuccess, onFailure) {
  $.ajax({
    url: env.envVars.url + 'lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + env.envVars.user.user.token,
    },
    dataType: 'json'
  })
  .done(onSuccess)
  .fail(onFailure);
};

module.exports = {
  getLists,
  getItems,
  deleteItem
};
