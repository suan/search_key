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

$(document).keypress(function(e) {
}).keydown(function(e){
  if (is_ascii(e.which)){
    set_insert(pressed, String.fromCharCode(e.which).toLowerCase());
  }
  if (e.which == 91){ set_insert(pressed, 'meta'); }
  if (e.ctrlKey){ set_insert(pressed, 'ctrl'); }
  if (e.altKey){ set_insert(pressed, 'alt'); }
  if (e.shiftKey){ set_insert(pressed, 'shift'); }
  // if (e.metaKey){ set_insert(pressed, 'meta'); }
}).keyup(function(e) {
  if (is_ascii(e.which)){
    set_insert(released, String.fromCharCode(e.which).toLowerCase());
  }
  if (e.which == 91){ set_insert(released, 'meta'); }
  if (e.ctrlKey){ set_insert(released, 'ctrl'); }
  if (e.altKey){ set_insert(released, 'alt'); }
  if (e.shiftKey){ set_insert(released, 'shift'); }
  // if (e.metaKey){ set_insert(released, 'meta'); }

  if (released.length && released.matchesSet(pressed)){
    alert(pressed.join('+'));
    pressed = [];
    released = [];
  }
});
