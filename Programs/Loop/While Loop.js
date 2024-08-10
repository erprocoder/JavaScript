<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>While Loop</title>

</head>
<body>

	<p id="demo"></p>

	<script type="text/javascript">
		var x = "", i = 0;

		while(i < 5)
		{
			x = x + "number = " + i + "<br>";
			i++;
		}
		document.getElementById('demo').innerHTML = x;
	</script>

</body>
</html>