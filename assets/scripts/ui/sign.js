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

////----------SIGN UP----------////
let clearSignUpFields = function () {
  $('#reginputEmail').val('');
  $('#reginputPassword').val('');
  $('#regconinputPassword').val('');
};

let signUpSuccessful = function () {
  $('#myModalRegister').modal('toggle');
  clearSignUpFields();
};

let signUpFail = function () {
  $('.reg-text').text('Sorry User is all ready taken.');
  clearSignUpFields();
};

module.exports = {
  inSuccessful: logInSuccessful,
  inFail: logInFail,
  upSuccessful: signUpSuccessful,
  upFail: signUpfail
};
