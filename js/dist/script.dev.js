"use strict";

// carousel 
// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
  var prevBtn = document.querySelector('.carousel-prev-btn');
  var nextBtn = document.querySelector('.carousel-next-btn');
  var carouselItems = document.querySelectorAll('.carousel-item');
  var currentIndex = 0;
  var intervalId;

  function showItem(index) {
    var numItems = carouselItems.length;
    var offset = index * -100; // Default offset based on index

    if (index < 0) {
      offset = (numItems - 1) * -100; // If index is negative, show last item
    } else if (index >= numItems) {
      offset = 0; // If index exceeds items, show first item
    }

    carouselItems.forEach(function (item) {
      item.style.transition = 'transform 0.5s ease-in-out';
      item.style.transform = "translateX(".concat(offset, "%)");
    });
  }

  function nextSlide() {
    currentIndex++;
    showItem(currentIndex);

    if (currentIndex >= carouselItems.length) {
      currentIndex = 0; // Loop back to the first slide

      setTimeout(function () {
        showItem(currentIndex);
      }, 500); // Delay to show the transition to the first slide smoothly
    }
  }

  function prevSlide() {
    currentIndex--;
    showItem(currentIndex);

    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1; // Loop back to the last slide

      setTimeout(function () {
        showItem(currentIndex);
      }, 500); // Delay to show the transition to the last slide smoothly
    }
  }

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  } // nextBtn.addEventListener('click', () => {
  //     stopAutoSlide();
  //     nextSlide();
  //     startAutoSlide();
  // });
  // prevBtn.addEventListener('click', () => {
  //     stopAutoSlide();
  //     prevSlide();
  //     startAutoSlide();
  // });


  startAutoSlide();
}); // showpassword

function togglePasswordVisibility(ID) {
  var passwordInput = document.getElementById(ID);
  var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
} // //Thank you page
// const form = document.getElementById('signupForm');
// // Add event listener for form submission
// form.addEventListener('submit', function (event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();
//     // Redirect to thankyou.html
//     window.location.href = 'thankYou.html';
// });
// login


function login() {
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  if (email === 'aditya@funex.com' && password === 'funex@2234') {
    // Correct credentials, proceed with login
    // Here you can redirect the user to a new page or perform any other action
    alert('Login Successful!');
  } else {
    // Incorrect credentials, display error message
    document.getElementById('logingHeading').style.display = 'none'; // Hide login heading

    document.getElementById('loginError').style.display = 'block'; // Show error message
  }
}