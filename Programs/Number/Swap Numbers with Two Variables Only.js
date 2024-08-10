<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Swap Numbers with Two Variables Only</title>

</head>
<body>

	<script type="text/javascript">
		a = 10;
		b = 15;
		document.write("Values before swipe : <br>");
		document.write("a = " + a + " and b = "+ b + "<br>");

		//------Method 1 Using add and subtract -----
		a = a + b;
		b = a - b;
		a = a - b;
		document.write("---- Using Method 1 ---- <br>");
		document.write("a = " + a + " and b = " + b + "<br>");

		//------Method 2 Using XOR operation------
		a = 10;
		b = 15;
		a = a ^ b;
		b = a ^ b;
		a = a ^ b;
		document.write("---- Using Method 2 ---- <br>");
		document.write("a = " + a + " and b = " + b + "<br>");

		//-----Method 3 Using Multiplication and division----
		a = 10;
		b = 15;
		a = a * b;
		b = a / b;
		a = a / b;
		document.write("---- Using Method 3 ---- <br>");
		document.write("a = " + a + " and b = " + b + "<br>");

		//-----Method 4 Using formula a=b-a+(b=a) -----
		/*
			* Working of Formula:- Browser first evaluates (b=a) expression based on BODMAS rule then b-a expression So a = 15 - 10 + (10) = 15 and b = 10
		*/
		a = 10;
		b = 15;
		a = b - a + (b = a);
		document.write("---- Using Method 4 ---- <br>");
		document.write("a = " + a + " and b = " + b + "<br>");
	</script>

</body>
</html>