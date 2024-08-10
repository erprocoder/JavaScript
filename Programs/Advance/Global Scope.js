// A global variable has global scope means all scripts and functions an a web page can access it.

var Name = "Michael";

getName();

// Here, getName using 'Name' varibale is declared in global scope.

function getName()
{
	console.log("My name is " + Name);
}