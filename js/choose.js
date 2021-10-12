// Changes the color of the target.
function chooseColor(color, targetId="target")
{
	// Retrieve the target element.
	// Default ID = "target" others are possible!
	target = document.getElementById(targetId);
	// Decide on the color...
	switch (color)
	{
		case 1: {
			// Apply the correct color.
			target.style.backgroundColor = "green";
			target.style.color = "white";
			break;
		}
		case 2: {
			// Apply the correct color.
			target.style.backgroundColor = "purple";
			target.style.color = "white";
			break;
		}
		case 3: {
			// Apply the correct color.
			target.style.backgroundColor = "";
			target.style.color = "white";
			break;
		}
		case 4: {
			// Apply the correct color.
			target.style.backgroundColor = "yellow";
			target.style.color = "white";
			break;
		}
		case 5: {
			// Apply the correct color.
			target.style.backgroundColor = "white";
			target.style.color = "white";
			break;
		}
		case 6: {
			// Apply the correct color.
			target.style.backgroundColor = "black";
			target.style.color = "white";
			break;
		}
		case 7: {
			// Apply the correct color.
			target.style.backgroundColor = "blue";
			target.style.color = "white";
			break;
		}
		case 8: {
			// Apply the correct color.
			target.style.backgroundColor = "red";
			target.style.color = "white";
			break;
		}
		default: {
			target.style.backgroundColor = "lightgray";
			target.style.color = "darkgray";
		}

	}
}
