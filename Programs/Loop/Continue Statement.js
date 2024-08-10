<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Continue Statement</title>

</head>
<body>

	<p>Click the button to do a loop which will skip the step where i = 3.</p>
	<button onclick="myFunction()">Click Me</button>
	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x = "", i = 0;

			for(i = 0; i < 10; i++)
			{
				if(i == 3)
				{
					continue;
				}
				x = x + "number = " + i + "<br>";
			}
			document.getElementById('demo').innerHTML = x;
		}
	</script>
	
</body>
</html>