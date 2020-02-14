var swap = 0;
var ele, unedited, currentChar, colorcode;
var edited = "";


callOptions();

function callOptions (){
	chrome.storage.local.get("color", function(result) {
		console.log('Value currently is ' + result.color);
		colorcode = result.color;
		DetectBox();
		addColor();
	});

}
		
function DetectBox(){
	ele = document.getElementsByClassName('redactor-editor');
	unedited = ele[0].innerHTML;
}

function addColor(){
	for(var i = 0; i <= unedited.length -1; i++) {
		currentChar = unedited.charAt(i);
		if((currentChar == '"' || currentChar == '»') && swap == 0) {
			swap = 1;
			edited = edited + "[color=#000000]" + currentChar;
		} else if((currentChar == '"' || currentChar == '«') && swap == 1){
			swap = 0;
			edited = edited + currentChar + "[/color]" ;
		} else{
			edited = edited + currentChar;
		}
	}
	ele[0].innerHTML = "[align=justify]" + edited + "[/align]" + colorcode;
}


