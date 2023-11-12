document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time
  setTimeout(function () {
    // Hide the splash screen
    document.getElementById("splash-screen").style.display = "none";

    // Show the main content
    document.getElementById("main-content").style.display = "block";
  }, 3000); // Adjust the timeout (in milliseconds) based on your desired loading time
});

document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading time
  setTimeout(function () {
    // Hide the splash screen if it exists
    var splashScreen = document.getElementById("splash-screen");
    if (splashScreen) {
      splashScreen.style.display = "none";
    }

    // Show the main content
    document.getElementById("main-content").style.display = "block";
  }, 3000); // Adjust the timeout (in milliseconds) based on your desired loading time
});

// ... (rest of your code)

document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with class "start-button"
  var startButtons = document.querySelectorAll(".start-button");

  // Add click event listener to each button
  startButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the quest name from the data-quest attribute
      var questName = button.getAttribute("data-quest");

      // Generate the URL for the quest page
      var questURL = "quest" + questName + ".html";

      // Navigate to the quest page
      window.location.href = questURL;
    });
  });
});

// Add this script tag to your HTML, preferably at the end of the body

// Example values, replace them with your actual progress values
const stepsValue = 3;
const impactValue = 5;
const gemsValue = 7;

// Function to update progress bars based on values
function updateProgressBars() {
  updateProgressBar("steps-progress", "steps-progress-value", stepsValue);
  updateProgressBar("impact-progress", "impact-progress-value", impactValue);
  updateProgressBar("gems-progress", "gems-progress-value", gemsValue);
}

// Function to update a specific progress bar
function updateProgressBar(barId, valueId, value) {
  const progressBar = document.getElementById(barId);
  const progressValue = document.getElementById(valueId);
  const maxWidth = progressBar.offsetWidth;

  // Calculate the width based on the value
  const width = (value / 10) * maxWidth;

  // Update the progress bar width and value text
  progressBar.querySelector("span").style.width = `${width}px`;
  progressValue.textContent = `${value}/10`;
}

updateProgressBars();

document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with class "start-button"
  var startButtons = document.querySelectorAll(".start-button");

  // Add click event listener to each button
  startButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the quest name from the data-quest attribute
      var questName = button.getAttribute("data-quest");

      // Generate the URL for the quest page
      var questURL = "quest" + questName + ".html";

      // Navigate to the quest page
      window.location.href = questURL;
    });
  });
});
