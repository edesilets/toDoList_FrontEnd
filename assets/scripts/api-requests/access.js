'use strict';
// Require js files below
const env = require('../env.js');
let uiSign = require('../ui/sign.js');

const successMessage = function (data) {
  console.log(data);
}
const failMessage = function (data) {
  console.error(data);
};

let signUp = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: env.envVars.url + 'sign-up', //"http://httpbin.org/post",
    type: 'POST',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    successMessage(data);
    env.envVars.user = data;
  })
  .fail(function (data) {
    failMessage(data);
  });
};

let logIn = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: env.envVars.url + 'sign-in',
    type: 'POST',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    successMessage(data);
    env.envVars.user = data;
    console.log(env.envVars);
  })
  .fail(function (data) {
    failMessage(data);
  });
};

let logOut = function(event) {
  event.preventDefault();                // Stops page Reload
  $.ajax({
    url: env.envVars.url + 'sign-out/' + env.envVars.user.user.id,
    type: 'DELETE',
    headers: {
        Authorization: 'Token token=' + env.envVars.user.user.token,
      }
  })
  .done(function (data) {
    successMessage(data);
  })
  .fail(function (data) {
    failMessage(data);
  });
};

let chPass = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: env.envVars.url + 'change-password/' + env.envVars.user.user.id,
    type: 'PATCH',
    headers: {
        Authorization: 'Token token=' + env.envVars.user.user.token,
      },
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    successMessage(data);
  })
  .fail(function (data) {
    failMessage(data);
  });
};

module.exports = {
  signUp,
  logIn,
  logOut,
  chPass,
};
