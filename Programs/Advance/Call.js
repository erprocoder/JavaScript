// Calls (executes) a function and sets its this to the provided value, arguments can be passed as they are.

var firstName =
{
	name : "Thomas",
	sayHello : function(name)
	{
		console.log(name + " " + this.name);
	}
}

var lastName =
{
	name : "Edison"
}

firstName.sayHello.call(lastName,"Thomas");

// call (thisObj, [arg1[, arg2[, [, argN]]]])

// thisObj [Optional] : The object to be used as the currenyt object.

// arg1, arg2, argN : Optional, A list of arguments to be passed to the method.