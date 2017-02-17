$(document).ready(function() {
  
  // Imagination!
  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    dataType: "json"
  }).done(function(responseData){
    console.log(responseData);
    var candidates = responseData.candidates;
    for (var i = 0; i < candidates.length; i++) {
      var li = $('<li>');
      li.html(candidates[i].name + " has " + candidates[i].votes + " votes.");
      li.appendTo('#list');
    }
  });
});
