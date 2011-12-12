var key_combo;
if (localStorage['key_combo'] == undefined){ key_combo = 'ctrl+shift+f'; }
else{ localStorage['key_combo']; }

jwerty.key(key_combo, function(){
  var $search_box;
  var $search_inputs = $('input[type="search"]:visible');

  if ($search_inputs.length) { $search_box = $search_inputs.first(); }
  else { $search_box = $(':text:visible').first(); }

  $search_box.focus().select();

});
