'use strict';
////////////////////////////////////////////////////////////////////
// functionaliy to only be called inside of
// done defer of signUp, logIn, logOut, chPass.
////////////////////////////////////////////////////////////////////
const api = require('../api-requests/api.js');

let grabListId = function () {
  $( ".listwrapper" ).on( "change", "select", function() {
    let listValue = $(this).val();
    api.getItems(listValue);
  });
};

module.exports = {
  grabListId: grabListId
};
