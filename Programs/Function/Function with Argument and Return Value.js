<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Funtion with Argument and Return Value</title>

</head>
<body>

	<p>This example calls a function which performs a calculation, and returns the result:</p>
	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction(a, b)
		{
			return a * b;
		}
		document.getElementById('demo').innerHTML = myFunction(4, 5);
	</script>
	
</body>
</html>