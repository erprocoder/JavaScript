<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Oneerror Event Example</title>

	<script type="text/javascript">
		onerror = handleErr;
		var txt = "";

		function handleErr(msg, url, l)
		{
			txt = "There was an error on this page.\n\n";
			txt += "Error: " + msg + "\n";
			txt += "URL: " + url + "\n";
			txt += "Line: " + l + "\n\n";
			txt += "Click OK to continue.\n\n";
			alert(txt);

			return true;
		}
		function message()
		{
			alertMe("Welcome guest!");
		}
	</script>

</head>
<body>

	<input type="button" value="View message" onclick="message()">

</body>
</html>