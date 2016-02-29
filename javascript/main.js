$(document).ready(function(){

  'use strict';
  var $message = $('#message');

  $message.on('mouseleave', function() {

    setTimeout(function() {
      $message.find('.outside').html('Enter');
    }, 250);
  });

$message.on('click', function() {
     window.location.href = "..portfolio/index2.html";
});
  });
