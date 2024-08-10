<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>For-In Loop / Enhanced For Loop</title>

</head>
<body>

	<p id="demo"></p>

	<script type="text/javascript">
		var txt = "";
		var person =
		{
			fname : "John",
			lname : "Doe",
			age : 20
		};
		for(var x in person)
		{
			txt = txt + " " + person[x];
		}
		document.getElementById('demo').innerHTML = txt;
	</script>
	
</body>
</html>