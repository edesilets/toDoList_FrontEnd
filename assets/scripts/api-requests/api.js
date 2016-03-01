'use strict'

let getItems = function () {
  $.ajax({
    url: "http://localhost:3000/items",
    method: 'GET',
    headers: {
      Authorization: 'Token token=7afe163c52a8ad3381dae7008f56fb6f',
    },
    dataType: 'json'
  }).done(function(data) {
    let template = require('../handlebars/list-item.handlebars');
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
    let listsTemplate = require('../handlebars/list-wrapper.handlebars');
    $('.listwrapper').append(listsTemplate({data}));
    console.log(data);
  });
};



module.exports = {

};
