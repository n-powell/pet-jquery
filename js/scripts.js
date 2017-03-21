$(document).ready(function(){

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-b");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-b");
  });
});
