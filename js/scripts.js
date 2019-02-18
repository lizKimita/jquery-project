$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#fade1").click(function() {
    $("#div1").slideToggle();
  });
  $("#fade2").click(function(){
    $("#div1").slideToggle();
  });
});
