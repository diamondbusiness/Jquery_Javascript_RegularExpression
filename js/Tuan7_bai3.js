function validateForm() {
    let isValid = true;
    let firstErrorElement = null;

    // FullName validation
    const fullname = document.getElementById("fullname").value;
    const fullNameError = document.getElementById("fullname-error");  
    if (!fullname) {
        fullNameError.style.display = "block";
        isValid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("fullname");
    } else {
        fullNameError.style.display = "none";
    }

    // Username validation
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("username-error");
    if (username.length < 6) {
        usernameError.style.display = "block";
        isValid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("username");
    } else {
        usernameError.style.display = "none";
    }

    // Password validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("password-error");
    if (!password) {
        passwordError.style.display = "block";
        isValid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("password");
    } else {
        passwordError.style.display = "none";
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirm_password").value;
    const confirmPasswordError = document.getElementById("confirm-password-error");
    if (!confirmPassword || password !== confirmPassword) {
        confirmPasswordError.style.display = "block";
        isValid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("confirm_password");
    } else {
        confirmPasswordError.style.display = "none";
    }

    // Phone number validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phone-error");
    if (phone && isNaN(phone)) {
        phoneError.style.display = "block";
        isValid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("phone");
    } else {
        phoneError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        emailError.style.display = "block";
        isValid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("email");
    } else {
        emailError.style.display = "none";
    }

    if (isValid) {
        const day = document.querySelector('select[name="day"]').value;
        const month = document.querySelector('select[name="month"]').value;
        const year = document.querySelector('select[name="year"]').value;
        const interests = document.getElementById("interests").value;

        const url = `thongtin.html?fullname=${encodeURIComponent(fullname)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&day=${day}&month=${month}&year=${year}&phone=${encodeURIComponent(phone)}&address=${encodeURIComponent(document.getElementById("address").value)}&email=${encodeURIComponent(email)}&interests=${encodeURIComponent(interests)}`;
        
        window.location.href = url;
        return false; 
    }

    if (firstErrorElement) {
        firstErrorElement.focus();
    }

    return false; // Prevent default form submission
}
