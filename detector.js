$(document).bind('keyup', 'ctrl+shift+f', function(){
  var $search_box;
  var $search_inputs = $('input[type="search"]:visible');

  if ($search_inputs.length) { $search_box = $search_inputs.first(); }
  else { $search_box = $(':text:visible').first(); }

  $search_box.focus();
});
