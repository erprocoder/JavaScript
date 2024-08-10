<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>If Else - Example</title>

</head>
<body>

	<p>If time is less than 16 it will show "Have a nice day".<br> else it will show "Good Night".</p>
	<button onclick="myFunction()">Click Me</button>

	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x = "";
			var time = new Date().getHours();

			if(time < 16)
			{
				x = "Have a nice day";
			}
			else
			{
				x = "Good Night"
			}
		document.getElementById('demo').innerHTML = x;
	}
	</script>
	
</body>
</html>