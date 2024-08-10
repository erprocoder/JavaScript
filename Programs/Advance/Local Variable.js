// Variables declared within a JavaScript function, become LOCAL to the function.

// In following example, 'Name' is a LOCAL variable.

function writeName()
{
	var Name = "Michael";
	console.log("I am " + Name);
}

writeName();