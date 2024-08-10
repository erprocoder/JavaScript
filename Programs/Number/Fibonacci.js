<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Fibonacci</title>

</head>
<body>

	<script type="text/javascript">
		var a = 0, b = 1, c = 0;
		document.write("Fibonacci Series <br>");

		while(b <= 20)
		{
			document.write(c);
			document.write("<br>");
			c = a + b;
			a = b;
			b = c;
		}
	</script>

</body>
</html>