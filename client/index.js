'use strict';

$(document).ready(init);

function init(){
  $('#begin').click(begin);
}

function begin(){
  var amount = $('#amount').val() * 1;
  var ball = Math.floor(Math.random() * amount);
  $('#cups').empty();

  for(var i = 0; i < amount; i++){
    var $cup = $('<div>');
    $cup.addClass('cup');
    $('#cups').append($cup);
  }

  console.log(ball);
}
