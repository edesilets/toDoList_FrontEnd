'use strict';
////////////////////////////////////////////////////////////////////
// functionaliy to only be called inside of
// done defer of signUp, logIn, logOut, chPass.
////////////////////////////////////////////////////////////////////
const env = require('../env.js');
const todo = require('../api-requests/api.js');

let errorMessage = function (error) {
  console.log(error);
};

let logInSuccessful = function (data) {
  env.envVars.user = data;

  let renderLists = function(lists) {
    let listsTemplate = require('../handlebars/lists.handlebars');
    $('#sel-list').append(listsTemplate({lists}));
  };

  todo.getLists(renderLists, errorMessage);
};

module.exports = {
  inSuccessful: logInSuccessful
};
