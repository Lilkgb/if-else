$(document).ready(function() {
  $("#enterHeight").submit(function(event) {
    var height = parseInt($("#yourHeight").val());
    if(height >= 48) {
      $('.tall').show();
    } else {
      $('.short').show()
    }
    
    event.preventDefault();
  });
});
