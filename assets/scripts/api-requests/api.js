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

let addItemToList = function (id, onSuccess, onFailure) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(document.querySelector('#item'));    // object containing the FormData
  console.log(item);
  $.ajax({
    url: env.envVars.url + 'lists/' + id + '/items',
    // url: 'http://httpbin.org/post',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + env.envVars.user.user.token,
    },
    dataType: 'json',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(onSuccess)
  .fail(onFailure);
};

let updateListItem = function (id, dataIn, onSuccess, onFailure) {
  $.ajax({
    url: env.envVars.url + 'items/' + id,
    type: 'PATCH',
    headers: {
      Authorization: 'Token token=' + env.envVars.user.user.token,
      contentType: "application/json"
    },
    data: {
          item:  {
            todo: dataIn
            }
        }
  })
  .done(onSuccess)
  .fail(onFailure);
};

module.exports = {
  getLists,
  getItems,
  deleteItem,
  addItemToList,
  updateListItem
};
