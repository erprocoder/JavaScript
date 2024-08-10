// this keyword gets the value of the object that invokes the function where this is used.

var person =
{
	firstName : "Harry",
	lastName : "Edison",
	fullName.function()
	{
		console.log(this.firstName + " " + this.lastName);
		console.log(person.firstName + " " + person.lastName);
	}
}

person.fullName();