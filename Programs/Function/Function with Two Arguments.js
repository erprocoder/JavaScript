<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Function with Two Arguments</title>

</head>
<body>

	<p>Click the button to call a function with arguments.</p>
	<button onclick="myFunction('Goku','Saiyan')">Click Me</button>

	<script type="text/javascript">
		function myFunction(name, job)
		{
			alert("Welcome " + name + ", the " + job + "!!")
		}
	</script>
	
</body>
</html>