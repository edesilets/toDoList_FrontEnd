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
  let taskId = this.dataset.taskId;// The DOM Way
  //console.log($(this).data());    // The jquery Way
  let deleteButton = $(this).find('button.btn-warning')[0];
  $(deleteButton).on('click', function () {
    api.deleteItem(taskId, function () {
      let listId = $('#sel-list').val();
      refreshItems(listId);
    });
  });

  let editButton = $(this).find('button.btn-info')[0];
  $(editButton).on('click', function () {
    //console.log($(this).data());     // The jquery Way
    console.log('edit Bind', taskId);  // The DOM Way
    console.log($(this));

    let listItem = $(this).parent('.pull-right');  //.parent('.list-group-item');
    let inputField = $('<input name="item[todo]" type="text" placeholder="Press Enter To Submit" class="remove-field">');
    $(listItem).append(inputField);
    inputField.keypress(function (e) {
      // this.value// $(this).val()
      if (e.which == 13) {
        this.remove('input.remove-field');
        let data = $(this).val();
        api.updateListItem(taskId, data, function () {
          api.updateListItem(taskId, data, function () {
            let listId = $('#sel-list').val();
            refreshItems(listId);
          });
        }, function (d) {
          console.log(d);
        });
        return false;    //<---- Add this line
      }
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
  $('#item > button').on( 'click', function() {
    let listId = $('#sel-list').val();
    api.addItemToList(listId, function () {
      refreshItems();
      $('#item > .form-group > input').val('');
    });
  });
};

module.exports = {
  grabListId: grabListId,
  createListItem
};
