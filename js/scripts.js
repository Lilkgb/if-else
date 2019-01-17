$(document).ready(function() {
  $("#enterHeight").submit(function(event) {
    var height = parseInt($("#yourHeight").val());
    if(height >= 48) {
      $('#tall').show();
      $(".extremeRides").show();
      $('#short').hide();
      $(".smallRides").hide();
    } else {
      $('#short').show();
      $(".smallRides").show();
      $('#tall').hide();
      $(".extremeRides").hide();
    }

    event.preventDefault();

  });

  $("#allRides").click(function() {
    $(".extremeRides").slideDown();
    $(".smallRides").slideDown();
    $("#short").hide();
    $("#tall").hide();

  });
});
