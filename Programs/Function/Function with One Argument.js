<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Function with One Argument</title>

	<script type="text/javascript">
		function myFunction(txt)
		{
			alert(txt);
		}
	</script>

</head>
<body>

	<form>
		<input type="button" name="" onclick="myFunction('Good Morning')" value="It's Morning">
		<input type="button" name="" onclick="myFunction('Good Evening')" value="It's Evening">
	</form>
	<p>When you click on one of the buttons, a function will be called. The function will alert the argument that is passed to it.</p>
	
</body>
</html>