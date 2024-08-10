<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Do While Loop</title>

</head>
<body>

	<p>Click the button to loop through a black of as long as <em>i</em> is less than 5.</p>
	<button onclick="myFunction()">Click Me</button>
	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x = "", i = 0;

			do
			{
				x = x + "number = " + i + "<br>";
				i++;
			}
			while(i < 5)
			document.getElementById('demo').innerHTML = x;
		}
	</script>
	
</body>
</html>