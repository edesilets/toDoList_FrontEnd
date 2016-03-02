'use strict'
const env = require('../env.js');

// let getItems = function () {
//   $.ajax({
//     url: "http://localhost:3000/items",
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token='+ env.envVars.user.user.token,
//     },
//     dataType: 'json'
//   }).done(function(data) {
//     let template = require('../handlebars/list-item.handlebars');
//     $('.dog').append(template({data}));
//     console.log(data);
//   });
// };

let getLists = function () {
  $.ajax({
    url: "http://localhost:3000/lists",
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + env.envVars.user.user.token,
    },
    dataType: 'json'
  }).done(function(lists) {
    let listsTemplate = require('../handlebars/list-wrapper.handlebars');
    $('.listwrapper').append(listsTemplate({lists}));
    console.log(lists);
  });
};

module.exports = {
  getLists
};
