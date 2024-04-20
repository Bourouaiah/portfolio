document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btnn'); // Get the element with the class 'btn'
    const sidebar = document.querySelector('.cv'); // Get the element with the class 'sidebar'
  
    btnn.addEventListener('click', function() { // Add click event listener to the 'btn' element
      this.classList.toggle('click'); // Toggle the 'click' class on the clicked element
      cv.classList.toggle('show'); // Toggle the 'show' class on the 'sidebar' element
    });
  });
  