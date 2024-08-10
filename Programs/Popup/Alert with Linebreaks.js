<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Alert with Linebreaks</title>

</head>
<body>

	<p>Click the button to demonstrate line-breaks in a popup box.</p>
	<button onclick="myFunction()">Click Me</button>
	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			alert("Hello\nHow are you?");
		}
	</script>

</body>
</html>