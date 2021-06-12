// Grabbing the image container from the HTML
var imageContainer = document.querySelector(".img-container");

// Creating the function that starts the GIF when it is clicked.
imageContainer.addEventListener("click", function (event) {
	// Setting the click point to a variable
	var element = event.target;

	// Creating the conditional for how it should change when clicked.
	if (element.matches("img")) {
		// Getting the attribute of data-state and putting it in its own variable to quickly access.
		var state = element.getAttribute("data-state");

		// data-state is normally set to "still" in the HTML. So if it's still...
		if (state === "still") {
			// I'm setting it as animate...
			element.setAttribute("data-state", "animate");
			// ...and using the source link of it moving instead of it's still source link.
			element.setAttribute("src", element.getAttribute("data-animate"));
		} else if (state === "animate") {
			// Setting it back to still when the GIF is clicked again.
			element.setAttribute("data-state", "still");
			element.setAttribute("src", element.getAttribute("data-still"));
		}
	}
});
