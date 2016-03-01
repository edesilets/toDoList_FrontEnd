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

module.exports = {
  signUp,
  // logIn,
  // logOut,
  // chPass,
};
