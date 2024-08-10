<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Looping Through HTML Headers</title>

</head>
<body>

	<p>Click the button to loop from 1 to 6, to make HTML headings.</p>
	<button onclick="myFunction()">Click Me</button>
	<div id="demo"></div>

	<script type="text/javascript">
		function myFunction()
		{
			var x = "", i;

			for(i = 0; i <= 6; i++)
			{
				x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
			}
			document.getElementById('demo').innerHTML = x;
		}
	</script>

</body>
</html>