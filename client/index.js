'use strict';

$(document).ready(init);

function init(){
  $('#begin').click(begin);
  $('#cups').on('click', '.cup', clickCup);
}

var ball;

function clickCup(){
  var guess = $(this).index();

  if(guess === ball){
    $(this).addClass('right');
  }else{
    begin();
  }
}

function begin(){
  var amount = $('#amount').val() * 1;
  ball = Math.floor(Math.random() * amount);
  $('#cups').empty();

  for(var i = 0; i < amount; i++){
    var $cup = $('<div>');
    $cup.addClass('cup');
    $('#cups').append($cup);
  }
}
