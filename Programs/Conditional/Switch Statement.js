<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Switch Statement</title>

</head>
<body>

	<p>Click the button to display what day it is today.</p>
	<button onclick="myFunction()">Click Me</button>

	<p id="demo"></p>

	<script type="text/javascript">
		function myFunction()
		{
			var x;
			var d = new Date().getDay();

			switch(d)
			{
				case 0:
					x = "Today is Sunday";
				break;

				case 1:
					x = "Today is Monday";
				break;

				case 2:
					x = "Today is Tuesday";
				break;

				case 3:
					x = "Today is Wednesday";
				break;

				case 4:
					x = "Today is Thursday";
				break;

				case 5:
					x = "Today is Friday";
				break;

				case 6:
					x = "Today is Saturday";
				break;
			}
			document.getElementById('demo').innerHTML = x;
		}
	</script>
	
</body>
</html>