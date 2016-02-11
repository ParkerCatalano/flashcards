$(function() {
  $(".clickable").click(function() {
    $(".initially-showing").fadeToggle();
    $(".initially-hidden").fadeToggle();
  });

  $("button#functionDef").click(function() {
    $("li").append("A JavaScript is a block of code designed to perform a particular task. A JavaScript function is executed when something invokes it calls it.");
  });
    $("button#functionDef").children("li").first().click(function() {
      $(this).remove();
  });
});
