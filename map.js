// Create a function to add markers when the button is clicked
function addMarkers() {
  // Get the map element
  const map = document.getElementById("map-container"); // Replace 'your-map-id' with the actual ID of your map container

  // Check if the map is found
  if (map) {
    // Get the coordinates of the locations you want to add markers to
    let coordinates = [
      [50.965873, -114.06855],
      [50.984015, -114.04533],
      [50.933104, -113.96013],
    ];

    // Loop through the coordinates and add markers to the map
    for (let i = 0; i < coordinates.length; i++) {
      let marker = new google.maps.Marker({
        position: { lat: coordinates[i][0], lng: coordinates[i][1] },
        map: map,
      });
    }
  } else {
    console.error("Map container not found.");
  }
}

// Add an event listener to the button to call the addMarkers() function when it is clicked
document
  .getElementById("add-markers-button")
  .addEventListener("click", addMarkers);
