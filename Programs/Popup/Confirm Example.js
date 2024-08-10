<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Confirm Example</title>

</head>
<body>

	<p>Click the button to display a confirm box.</p>
	<button onclick="myFunction()">Click Me</button>
	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x;
			var r = confirm("Press a button!");

			if(r == true)
			{
				x = "You pressed OK!";
			}
			else
			{
				x = "You pressed Cancel!";
			}
			document.getElementById("demo").innerHTML = x;
		}
	</script>

</body>
</html>