<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Prompt Example</title>

</head>
<body>

	<p>Click the button to demonstrate the prompt box.</p>
	<button onclick="myFunction()">Click Me</button>
	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x;
			var person = prompt("Please enter your name", "BatMan");

			if(person != null)
			{
				x = "Hello " + person + "! How are you today?";
				document.getElementById("demo").innerHTML = x;
			}
		}
	</script>

</body>
</html>