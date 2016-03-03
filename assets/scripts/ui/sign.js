'use strict';
////////////////////////////////////////////////////////////////////
// functionaliy to only be called inside of
// done defer of signUp, logIn, logOut, chPass.
////////////////////////////////////////////////////////////////////


////----------LOG IN----------////
let clearLoginFields = function () {
  $('#inputPassword').val('');
  $('#inputEmail').val('');
  $('.log-text').text('');
};

let logInSuccessful = function () {
  $('#myModal').modal('toggle');
  clearLoginFields();
};

let logInFail = function () {
  $('.log-text').text('Please try again or Register.');
  clearLoginFields();
};

module.exports = {
  inSuccessful: logInSuccessful,
  inFail: logInFail
};
