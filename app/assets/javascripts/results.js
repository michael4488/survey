var count=15;

$(document).on("ready", function() {
  $("#video")[0].play();
  $("#video").on("ended", function() {
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
      $("#timer").text(count - 1);
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
    $("#timer").show().text(count);
  });

  $("#end_timer").on("click", function() {
    count = 0;
    $("#personal").show();
    $("#question").hide();
  });
});
