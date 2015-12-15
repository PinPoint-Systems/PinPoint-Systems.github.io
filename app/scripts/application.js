'use strict';
$(function(){
  $('.signup').on('click', function(e){
    $('.signup-modal').toggleClass('closed');
    e.preventDefault();
  });
  $('.signup-modal').on('click', function(){
    $('.signup-modal').addClass('closed');
  });
  $('.signup-modal .modal-inner').on('click', function(e){
    e.stopPropagation();
  });
});