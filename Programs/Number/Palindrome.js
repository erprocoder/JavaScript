<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Palindrome</title>

</head>
<body>

	<script type="text/javascript">
		function Palindrome()
		{
			var revStr = "";
			var str = document.getElementById('str').value;
			var i = str.lenght;

			for(var j = i; j >= 0; j--)
			{
				revStr = revStr + str.charAt(j);
			}
			if(str == "")
			{
				alert("Please Enter a number or some text.");
			}
			else if(str == revStr)
			{
				alert(str + " is Palindrome.");
			}
			else
			{
				alert(str + " is not a Palindrome.")
			}
		}
	</script>

	<form>
		Enter a String/Number: <input type="text" name="string" id="str"><br>
		<input type="button" name="" value="Check" onclick="Palindrome();">
	</form>
	
</body>
</html>