var delimiter = '+';
var shift_sign = 'shift';
var meta_sign = 'super';
var ctrl_sign = 'ctrl';
var alt_sign = 'alt';

var platform = navigator.platform.toLowerCase();
if (platform.indexOf('mac') >= 0){
  delimiter = '';
  shift_sign = '⇧';
  meta_sign = '⌘';
  ctrl_sign = '^';
  alt_sign = '⌥';
}
else if (platform.indexOf('win') >= 0){
  meta_sign = 'win';
}

var pressed = [];
var released = [];

function set_insert(array, value){
  if (array.indexOf(value) == -1){ array.push(value); }
}

function is_ascii(num){
  return (num == 20 || (num > 64 && num < 91) || (num > 96 && num < 123));
}

Array.prototype.matchesSet = function(other){
  for (var i = 0; i < this.length; i++){
    if (other.indexOf(this[i]) == -1){ return false; }
  }
  return true;
};

function eval_key_event(e){
  var event_array;
  if (e.type == 'keydown'){ event_array = pressed; }
  else { event_array = released; }

  if (is_ascii(e.which)){
    set_insert(event_array, String.fromCharCode(e.which).toUpperCase());
  }
  if (e.which == 91){ set_insert(event_array, meta_sign); }
  if (e.ctrlKey){ set_insert(event_array, ctrl_sign); }
  if (e.altKey){ set_insert(event_array, alt_sign); }
  if (e.shiftKey){ set_insert(event_array, shift_sign); }
  // if (e.metaKey){ set_insert(event_array, meta_sign); }
}

$(document).keypress(function(e) {
}).keydown(function(e){
  eval_key_event(e);
}).keyup(function(e){
  eval_key_event(e);

  if (released.length && released.matchesSet(pressed)){
    alert(pressed.join(delimiter));
    pressed = [];
    released = [];
  }
});
