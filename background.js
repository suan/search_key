// alert('hola!!');
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
   sendResponse(JSON.parse(localStorage.key_combo));
});
