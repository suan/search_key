$(document).ready(function(){
  $('#keyComboBox').makeKeyCombinator({
    onComplete: function(keyComboData){
      localStorage['key_combo'] = JSON.stringify(keyComboData);
    },
    defaultCombos: {
      mac: ['⌃', 'F'],
      win: ['Ctrl', 'Shift', 'F'],
      unix: ['Ctrl', 'Shift', 'F']
    }
  });

  var comboData = localStorage['key_combo'];
  if (!comboData){
    $('#keyComboBox').defaultKeyCombinator();
  }
  else {
    $('#keyComboBox').val(JSON.parse(comboData).comboString);
  }
});
