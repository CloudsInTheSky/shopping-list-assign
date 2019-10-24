


$('form#js-shopping-list-form').on('submit', function(event) {
  event.preventDefault();
  var toAdd = $(this).find('input[name=shopping-list-entry]').val();
  $('.shopping-list').append(`<li>
  <span class="shopping-item">${toAdd}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

});

/*$(document).ready(function() {
  $('button'[type="submit"]').click(function() {
    var toAdd = $('#shopping-list-entry').val();
    $('.shopping-list').append("<li>" + toAdd + "</li>");
  });
});*/

/*$(document).ready(function(){
    $('button'[type="submit"]').on('click', e => {
       $('#shopping-list').append('li.shopping-item shopping-item__checked),
        });
    });*/


/*$('button:submit').onClick = function(){
 let addIn = $('#shopping-list-entry').value;
 let li = <li> + addIn + </li>;
  $('ul:.shooping-list').append(li);
}*/


/*$('button:#shopping-list-entry').click(function () {
    preventDefault();
    let $('.shopping-item') = $('.shopping-item').val();
    $('.shopping-item').append("<li>
    <span class="shopping-item"></span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>")
});*/
    
 /*   = 
    $('label').html(('label:shopping-list-entry').val());
});*/

/*
function addItem(){
    $('input:text').val(" ");
}*/

/*$(function() {
    $('label').submit( e => {
  e.preventDefault();
    })
})*/