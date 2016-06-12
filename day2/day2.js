//
//Changes the demo tag content based on the function that is called
//
function content1 () {//I've set my function as content 1
	//I want the function to find the id="demo" tag in the html
	//and place the following string in that tag
	document.getElementById("demo").innerHTML = "Content 1 is visible.";
}
function content2 () {
	document.getElementById("demo").innerHTML = "Content 2 is visible."
}
function content3 () {
	document.getElementById("demo").innerHTML = "Content 3 is visible."
}


//
//Creates a greeting based on the users current time
//
var today = new Date (); // Create a new date object
var hourNow = today.getHours (); // Finds the current hour
var greeting;
// Displays the appropriate greeting based on the current time
if (hourNow > 18) {
	greeting = 'Good evening!';
}	else if (hourNow > 12) {
	greeting = 'good afternoon!'
}	else if (hourNow > 0) {
	greeting ='Good Morning!'
}	else {
	greeting ='Welcome!'
}
document.write ('<h3>' + greeting +'</h3>');

//
//Adding multiple variables together
//
var price; //declared the var price
var quantity; //declared the variable quantity
var price; //declared the varaible price

price=5; //assigns the value of 5 to the variable price
quantity=14; //assigns the value of 15 to the variable of quantity
total= price * quantity; //assigns the value of the variables total and price multiplied together

var el = document.getElementById('cost'); //ties the function to the id 'cost' in the html file
el.textContent = '$' + total; //adds a '$' sysmbol to the front of the total value