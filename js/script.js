$(document).ready(function() {

  $("button#functionDef").click(function(){
    $("h2.func").append("<ul>definition for function</ul>")
  });
  $("button#functionMethod").click(function(){
    $("h2.meth").append("<ul>definition for method</ul>")
  });
  $("button#functionString").click(function(){
    $("h2.string").append("<ul>definition for string</ul>")
  });
  $("button#functionEsc").click(function(){
    $("h2.escape").append("<ul>definition for escape</ul>")
  });


});
