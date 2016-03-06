'use strict';
////////////////////////////////////////////////////////////////////
// functionaliy to only be called inside of
// done defer of signUp, logIn, logOut, chPass.
////////////////////////////////////////////////////////////////////

let grabListId = function () {
  $( ".listwrapper" ).on( "change", "select", function() {
    return $(this).val();
  });

};

module.exports = {
  grabListId: grabListId
};
