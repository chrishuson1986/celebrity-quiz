$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var music = $("#music").val();
    var color = $("#color").val();

    if ((music==="Rock") && (color==="red")) {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
      $("#form-quiz").hide();
    }
    else if ((music==="Pop") && (color==="green")) {
      $("#result2").show();
      $("#result1").hide();
      $("#result3").hide();
      $("#result4").hide();
      $("#form-quiz").hide();
    }

    else if ((music==="Rock") && (color==="green")) {
      $("#result3").show();
      $("#result2").hide();
      $("#result1").hide();
      $("#result4").hide();
      $("#form-quiz").hide();
    }

    else if ((music==="Pop") && (color==="red")) {
      $("#result4").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result1").hide();
      $("#form-quiz").hide();
    }
    event.preventDefault();
  });
});
