var key_combo;
chrome.extension.sendRequest({}, function(comboData){ 

  console.log('comboData', comboData);

  if (comboData == undefined){
    key_combo = 'ctrl+F';
  }
  else{
    key_combo = $.map(comboData.comboParts, function(comboPart, i){
                  return comboPart.keyChar;
                }).join('+');
    console.log('key_combo', key_combo);
  }

  jwerty.key(key_combo, function(){
    var $search_box;
    var $search_inputs = $('input[type="search"]:visible');

    if ($search_inputs.length) { $search_box = $search_inputs.first(); }
    else { $search_box = $(':text:visible').first(); }

    $search_box.focus().select();
  });

});
