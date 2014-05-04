//= include countdown.js
var count=15;

$(document).on("ready", function() {
  if ($("#video").length > 0) {
    $("#video")[0].play();
  }

  $("#video").on("ended", function() {
    $("#question input[type=text]").focus();
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
      // $("#timer").show().text(count);
      count=count-1;
      
      if (count <= 0) {
         clearInterval(counter);
         $("#personal").show();
         $("#question").hide();
         return;
      }

    }
    $("#video").hide();
    $("#question").show();
  });

  $("#end_timer").on("click", function() {
    count = 0;
    $("#personal").show();
    $("#question").hide();
  });
});
