'use strict';
// Require js files below
const env = require('../env.js');

const successMessage = function (data) {
  console.log(data);
}
const failMessage = function (data) {
  console.error(data);
};

let signUp = function(event) {
  let signup = null;
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
    signup = true;
  })
  .fail(function (data) {
    failMessage(data);
    signup = false;
  });
  return signup;
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
  let item = new FormData(event.target);    // object containing the FormData
  console.log(item);
  $.ajax({
    url: env.envVars.url + 'sign-out/' + env.envVars.user.user.id,
    type: 'DELETE',
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
  // chPass,
};
