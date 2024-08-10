<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>If Example</title>

</head>
<body>

	<p>Click the button to get a "Have a nice day" greeting if the time is less than 21:00.<br> If the time is greater than 21:00 the greeting will not be displayed.</p>
	<button onclick="myFunction()">Click Me</button>

	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x = "";
			var time = new Date().getHours();

			if(time < 21)
			{
				x = "Have a nice day";
			}
			document.getElementById('demo').innerHTML = x;
		}
	</script>
	
</body>
</html>