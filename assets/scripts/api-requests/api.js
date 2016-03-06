'use strict';
const env = require('../env.js');

let getItems = function (id) {
  $.ajax({
    url: env.envVars.url + "lists/" + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token='+ env.envVars.user.user.token,
    },
    dataType: 'json'
  }).done(function(items) {
    let itemsTemplate = require('../handlebars/items.handlebars');
    $('.items').append(itemsTemplate({items}));
    console.log('get the list', items);
  });
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
  getItems
};
