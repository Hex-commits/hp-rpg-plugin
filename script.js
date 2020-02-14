window.addEventListener('load', function load(event) {
    chrome.storage.local.get("color", function(result) {
        if (result != undefined && result.color != undefined) {
            document.getElementById('colorc').value = result.color;
        }
    });
    document.getElementById('save').onclick = function() {
         chrome.storage.local.set({"color": document.getElementById('colorc').value}, function() {
          console.log('Value is set to ' + document.getElementById('colorc').value);
        });
		alert('Boop');
    };
});