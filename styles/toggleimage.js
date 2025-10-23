/*(function preloadImage(url) {
  const img = new Image(); // Create a new Image object
  img.src = url; // Set the source to trigger loading
  // Optional: Add an onload handler to perform actions after loading
  img.onload = () => {
    console.log(`Image "${url}" preloaded successfully.`);
  };
  // Optional: Add an onerror handler for error handling
  img.onerror = () => {
    console.error(`Failed to preload image: "${url}"`);
  };
}

// Usage:
preloadImage('businessphoto/electrical.jpg');)*/







const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('toggled');

  // Example: Switch images directly
  const img = toggleButton.querySelector('img');
  if (toggleButton.classList.contains('toggled')) {
    img.src = 'businessphoto/electricallarge.jpg'; // Or use a different method to change the image
  } else {
    img.src = 'businessphoto/electrical.jpg';
  }

  // Or, if you're using CSS classes to style the toggle
  // You can toggle a CSS class on the button itself
  // toggleButton.classList.toggle('toggled');
});