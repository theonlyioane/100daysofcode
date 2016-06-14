// creates a va message, which holds a string
var msg = 'This is the JS message';
//we Create a function to be called
function updatedMessage() {
	//create a new variable that's tied to the id "message"
	var el = document.getElementById('message');
	//the id "message" should populate the var msg
	el.textContent = msg;
}
//this calls the function. Without it the content above would be storeduntil called for.
updatedMessage ();