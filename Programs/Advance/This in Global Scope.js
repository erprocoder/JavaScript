var firstName = "Harry",
lastName = "Edison";

function showFullName()
{
	// "this" inside this function will have the value of the window object
	console.log(this.firstName + " " + this.lastName);
}

var person =
{
	firstName : "Mary",
	lastName : "Thomas",

	showFullName : function()
	{
		// "this" on the line below refers to the person object, because
		// the showFullName function will be invoked by person object.

		console.log(this.firstName + " " + this.lastName);
	}
}

showFullName(); // Harry Edison
window.showFullName(); // Harry Edison
person.showFullName(); // Mary Thomas