<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Copy Text</title>

</head>
<body>

	<h2>Copy Text from one field to another</h2>
	<p>
		<input type="text" style="color: #000000; background-color: #c9c299;" id="field1" value="Hello!!" name="">
		<input type="text" style="color: #000000; background-color: #c9c299;" id="field2" name="">
		<button style="background-color: #f56724;" onclick="document.getElementById('field2').value = document.getElementById('field1').value">Click to Copy Text</button>
	</p>

</body>
</html>