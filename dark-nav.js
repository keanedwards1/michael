document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentUrl = window.location.href;
  
    // Get all the links in the navigation bar
    var navLinks = document.querySelectorAll('#nav-bar a');
  
    // Loop through each link in the navigation bar
    navLinks.forEach(function(link) {
      // Check if the link's href matches the current page URL
      if (link.href === currentUrl) {
        link.classList.add('active'); // Add the "active" class to the link
      }
    });
  });
  