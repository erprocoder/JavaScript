<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Simple For Loop</title>

</head>
<body>

	<p id="demo"></p>

	<script type="text/javascript">
		var x = "";

		for(var i = 0; i < 5; i++)
		{
			x = x + "number = " + i + "<br>";
		}
		document.getElementById('demo').innerHTML = x;
	</script>

</body>
</html>