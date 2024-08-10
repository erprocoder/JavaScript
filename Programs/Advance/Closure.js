// A closure is an inner function that has access to the outer (enclosing) function's variable--scope chain.

// The closure has three scope chains (its own scope, outer function's variables, global variables).

function showName(firstName, lastName)
{
	var nameIntro = "Your name is: ";

	// this inner function has access to the outer function's variable's, including the parameter.

	function makeFullName()
	{
		return nameIntro + firstName + " " + lastName;
	}
	return makeFullName();
}

showName("michael", "action");