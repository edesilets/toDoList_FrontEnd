'use strict';
////////////////////////////////////////////////////////////////////
// functionaliy to only be called inside of
// done defer of signUp, logIn, logOut, chPass.
////////////////////////////////////////////////////////////////////
const env = require('../env.js');
const todo = require('../api-requests/api.js');


let logInSuccessful = function (data) {
  env.envVars.user = data;
  console.log(data);
  todo.getLists();
}

module.exports = {
  inSuccessful: logInSuccessful
};
