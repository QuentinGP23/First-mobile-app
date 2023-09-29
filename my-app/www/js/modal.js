document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

const addItem = function(){
  var todoItem = $("#todo-item").val();
  var itemTemplate =
  '<li class="collection-item">' +
  '<div>' + todoItem +
  '<a class="secondary-content">' +
  '<label>' +
  '<input type="checkbox" class="filled-in" onclick="moveItemDone(this);" />' +
  '<span></span>' +
  '</label>' +
  '</a>' +
  '</div>' +
  '</li>';
  $("#my-todo-list").append(itemTemplate);
  $("#todo-item").val('');
  }