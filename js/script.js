// carousel 
// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.carousel-prev-btn');
    const nextBtn = document.querySelector('.carousel-next-btn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let intervalId;

    function showItem(index) {
        const numItems = carouselItems.length;
        let offset = index * -100; // Default offset based on index

        if (index < 0) {
            offset = (numItems - 1) * -100; // If index is negative, show last item
        } else if (index >= numItems) {
            offset = 0; // If index exceeds items, show first item
        }

        carouselItems.forEach(item => {
            item.style.transition = 'transform 0.5s ease-in-out';
            item.style.transform = `translateX(${offset}%)`;
        });
    }

    function nextSlide() {
        currentIndex++;
        showItem(currentIndex);
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0; // Loop back to the first slide
            setTimeout(() => {
                showItem(currentIndex);
            }, 500); // Delay to show the transition to the first slide smoothly
        }
    }

    function prevSlide() {
        currentIndex--;
        showItem(currentIndex);
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1; // Loop back to the last slide
            setTimeout(() => {
                showItem(currentIndex);
            }, 500); // Delay to show the transition to the last slide smoothly
        }
    }

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    startAutoSlide();
});


// dropdown City
document.getElementById('destinationDropdown').addEventListener('click', function () {
    document.getElementById('dropdownMenu').classList.toggle('show');
});

document.querySelectorAll('.dropdown-btnItems').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('destinationDropdown').textContent = this.dataset.value;
        document.getElementById('dropdownMenu').classList.remove('show');
    });
});

window.onclick = function (event) {
    if (!event.target.matches('.dropDown-btn')) {
        var dropdowns = document.getElementsByClassName('dropDown-btnList');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};





// showpassword
function togglePasswordVisibility(ID) {
    var passwordInput = document.getElementById(ID);
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}




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


// Sign Up Page

function togglePasswordVisibility(id) {
    var input = document.getElementById(id);
    var eyeButton = input.nextElementSibling;
    var showEye = eyeButton.querySelector('.showEye');
    var hideEye = eyeButton.querySelector('.hideEye');

    if (input.type === "password") {
        input.type = "text";
        showEye.style.display = "none";
        hideEye.style.display = "inline";
    } else {
        input.type = "password";
        showEye.style.display = "inline";
        hideEye.style.display = "none";
    }
}

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var firstName = document.getElementById('FirstName').value;
    var lastName = document.getElementById('LastName').value;
    var email = document.getElementById('Email').value;
    var phoneNumber = document.getElementById('PhoneNumber').value;
    var password = document.getElementById('inputPassword').value;
    var confirmPassword = document.getElementById('confrmPassword').value;
    var companyName = document.getElementById('CompanyName').value;
    var companyWebsite = document.getElementById('companyWebsite').value;
    var companyAddress = document.getElementById('CompanyAddress').value;
    var companyState = document.getElementById('CompanyState').value;
    var companyCity = document.getElementById('CompanyCity').value;
    var country = document.getElementById('Country').value;
    var authorizationNumber = document.getElementById('AuthorizationNumber').value;
    var agreeTerms = document.getElementById('agreeTerms').checked;

    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword ||
        !companyName || !companyWebsite || !companyAddress || !companyState || !companyCity ||
        !country || !authorizationNumber || !agreeTerms) {
        alert('Please fill out all fields and agree to the terms and privacy policies.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // If validation passes, redirect to thankYou.html
    window.location.href = 'thankYou.html';
});

