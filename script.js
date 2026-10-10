// 1. Select the button and message paragraph from the HTML page
const tryButton = document.getElementById("try-btn");
const messageBox = document.getElementById("interactive-message");

// 2. Listen for a click event on the button
tryButton.addEventListener("click", function () {
  // 3. Update the message text when the user clicks the button
  messageBox.textContent = "🎉 Great! You've just interacted with JavaScript.";

  // 4. Add styling class to highlight the message box
  messageBox.classList.add("active");
});
