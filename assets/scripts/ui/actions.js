'use strict';
////////////////////////////////////////////////////////////////////
// functionaliy to only be called inside of
// done defer of signUp, logIn, logOut, chPass.
////////////////////////////////////////////////////////////////////
const api = require('../api-requests/api.js');

let grabListId = function () {
  $( ".listwrapper" ).on( "change", "select", function() {
    let listId = $(this).val();
    refreshItems(listId);
  });
};

let refreshItems = function (listId) {
  api.getItems(listId, function (items) {
    let itemsTemplate = require('../handlebars/items.handlebars');
    $('.items').empty().append(itemsTemplate({items}));
    $('.items .list-group-item').each(function () {
      let singleElement = $(this).find('button.btn-warning')[0];
      $(singleElement).on('click', function () {
        let taskId = this.dataset.taskId;
        //console.log($(this).data());    // The jquery Way
        console.log(taskId);              // The DOM Way
        api.deleteItem(taskId, function () {
          refreshItems(listId);
        });
      });
    });
  });
};


module.exports = {
  grabListId: grabListId
};
