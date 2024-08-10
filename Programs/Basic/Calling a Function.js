<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Calling a Function</title>

</head>
<body>

	<h1>Calling a Function</h1>

	<p id="myPar">I am a paragraph</p>
	<div id="myDiv">I am a div.</div>

	<p>
		<button type="button" onclick="myFunction()">Change</button>
	</p>

	<script type="text/javascript">
		function myFunction()
		{
			document.getElementById('myPar').innerHTML = "Hello";
			document.getElementById('myDiv').innerHTML = "How are you?";
		}
	</script>

	<p>When you click on "change", the two elements will change.</p>

</body>
</html>