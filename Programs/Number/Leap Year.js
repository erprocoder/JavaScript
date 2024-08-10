<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Leap Year</title>

</head>
<body>

	Enter Year: <input type="number" name="" id="year"><br><br>
	<input type="button" name="" onclick="leapYear()" value="Check"><br><br>
	Result: <h3 id="res"></h3>

	<script type="text/javascript">
		function leapYear()
		{
			var yr = document.getElementById('year').value;
			x = (yr % 100 === 0) ? (yr % 400 === 0) : (yr % 4 === 0);

			if(x == true)
			{
				document.getElementById('res').innerHTML = "Leap Year."
			}
			else
			{
				document.getElementById('res').innerHTML = "Not a Leap Year."
			}
		}
	</script>

</body>
</html>