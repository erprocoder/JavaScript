<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Singleline Comments</title>

</head>
<body>

	<h1 id="myHeader"></h1>
	<p id="myPara"></p>

	<script type="text/javascript">
		// Write to a heading.
		document.getElementById('myHeader').innerHTML = "Welcome to JavaScript";
		
		// Write to a paragraph.
		document.getElementById('myPara').innerHTML = "This is a paragraph";
	
	</script>

	<p><strong>Note:</strong> The comments are not executed.</p>
	
</body>
</html>