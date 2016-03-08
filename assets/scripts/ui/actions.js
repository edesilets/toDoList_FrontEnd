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

let bindDelete = function () {
  let singleElement = $(this).find('button.btn-warning')[0];
  $(singleElement).on('click', function () {
    let taskId = this.dataset.taskId;
    //console.log($(this).data());    // The jquery Way
    console.log(taskId);              // The DOM Way
    api.deleteItem(taskId, function () {
      let listId = $('#sel-list').val();
      refreshItems(listId);
    });
  });
};

let refreshItems = function () {
  let listId = $('#sel-list').val();
  api.getItems(listId, function (items) {
    let itemsTemplate = require('../handlebars/items.handlebars');
    $('.items').empty().append(itemsTemplate({items}));
    $('.items .list-group-item').each(bindDelete);
  });
};

let createListItem = function () {
  $('#item > button').on( "click", function() {
    let listId = $('#sel-list').val();
    let log = function (d) {
      console.log(d);
    };
    api.addItemToList(listId, refreshItems);
  });
};


module.exports = {
  grabListId: grabListId,
  createListItem
};
