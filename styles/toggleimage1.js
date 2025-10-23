 const button = document.getElementById('toggleButton');

    button.addEventListener('click', () => {
      button.classList.toggle('large-button');
      button.classList.toggle('small-button'); // Ensure only one size class is active
    });