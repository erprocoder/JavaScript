<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Try Catch with Confirm Box</title>

	<script type="text/javascript">
		var txt = "";

		function message()
		{
			try
			{
				addalert("Welcome guest!");
			}
			catch(err)
			{
				txt = "There was an error on this page. \n\n";
				txt += "Error description: " + err.message + "\n\n";
				txt += "Click OK to continue. \n\n";
				
				if(!confirm(txt))
				{
					// action on confirm
				}
			}
		}
	</script>

</head>
<body>

	<input type="button" value="View message" onclick="message()">
	
</body>
</html>