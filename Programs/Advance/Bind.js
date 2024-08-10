// If we assign a method that uses “this” to a variable, then “this” will have value of the global data array, and not the data array of the user object.
// solution is bind() method.
// Example showing binding some parameters

var sum=function(a, b)
{
	return a + b;
};

var add5=sum.bind(null, 5);
console.log(add5(10));