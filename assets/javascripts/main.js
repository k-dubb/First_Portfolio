$(document).ready(function() {

  $('#venueRater').click(function(){
    $('#modalVenue').modal('show');
  });
  $('#slackOverflow').click(function(){
    $('#modalSlack').modal('show');
  });
  $('#tictac').click(function(){
    $('#modalTicTac').modal('show');
  });
  $('.deny.button').click(function(){
    $('.ui.modal').modal('hide');
  });
  
  // Menu bar
  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

  $('.radial-menu').on('mousedown touchstart', function() {

    if (!active1) $(this).find('.menu-item1').css({
      'background-color': '#26547C',
      'transform':
      'translate(0px,125px)'
    });
    else $(this).find('.menu-item1').css({
      'background-color': '#EF476F',
      'transform': 'none'
    });
    if (!active2) $(this).find('.menu-item2').css({
      'background-color': '#26547C',
      'transform': 'translate(60px,105px)'
    });
    else $(this).find('.menu-item2').css({
      'background-color': '#EF476F',
      'transform': 'none'
    });
    if (!active3) $(this).find('.menu-item3').css({
      'background-color': '#26547C',
      'transform': 'translate(105px,60px)'
    });
    else $(this).find('.menu-item3').css({
      'background-color': '#EF476F',
      'transform': 'none'
    });
    if (!active4) $(this).find('.menu-item4').css({
      'background-color': '#26547C',
      'transform': 'translate(125px,0px)'
    });
    else $(this).find('.menu-item4').css({
      'background-color': '#EF476F',
      'transform': 'none'
    });

    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
  });

  // Radial menu sections
  $("#toTop").click(function (){
        $('html, body').animate({
            scrollTop: $("#theTop").offset().top
        }, 1000);
  });
  $(".menu-item1").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
  });
  $(".menu-item2").click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
  });
  $(".menu-item3").click(function (){
        $('html, body').animate({
            scrollTop: $("#about2").offset().top
        }, 1000);
  });
  $(".menu-item4").click(function (){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
  });

  // Responsive menu sections
  $("#item1").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
  });
  $("#item2").click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
  });
  $("#item3").click(function (){
        $('html, body').animate({
            scrollTop: $("#about2").offset().top
        }, 1000);
  });
  $("#item4").click(function (){
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 1000);
  });

});
