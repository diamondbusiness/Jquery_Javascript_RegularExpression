function validateForm() {
    $(".error-message").hide();

    // Get input value
    const username = $("#username").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirm_password").val();
    const fullname = $("#fullname").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const birthDay = new Date($("select[name='year']").val(), $("select[name='month']").val() - 1, $("select[name='day']").val());
    const today = new Date();

    // Regular expressions
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+={}|\\:;\"'<>,.?/~`-]*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}|\\:;\"'<>,.?/~`-]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(09|03|07|06|05|04)\d{8}$/; 

    let firstErrorElement = null;
    let isValid = true;

    // Validate username
    if (!usernameRegex.test(username)) {
        $("#username-error").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#username");
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        $("#password-error").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#password");
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        $("#confirm-password-error").text("Mật khẩu không khớp.").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#confirm_password");
    }

    // Validate fullname
    const nameParts = fullname.split(" ");
    if (nameParts.length < 2 || !/^[A-Z]/.test(nameParts[0])) {
        $("#fullname-error").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#fullname");
    }

    // Validate date of birth (must be over 16 years old)
    const age = today.getFullYear() - birthDay.getFullYear();
    const monthDiff = today.getMonth() - birthDay.getMonth();
    const isOlderThan16 = age > 16 || (age === 16 && monthDiff > 0) || (age === 16 && monthDiff === 0 && today.getDate() >= birthDay.getDate());
    if (!isOlderThan16) {
        alert("Bạn phải trên 16 tuổi");
        isValid = false;
    }

    // Validate address
    const address = $("#address").val().trim();
    if (!address) {
        $("#address-error").text("Địa chỉ không được để trống").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#address");
    }

    // Validate Email
    if (!email && !emailRegex.test(email)) {
        $("#email-error").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#email");
    }

    // Validate Phone
    if (!phone && !phoneRegex.test(phone)) {
        $("#phone-error").text("Điện thoại không hợp lệ.").show();
        isValid = false;
        if (!firstErrorElement) firstErrorElement = $("#phone");
    }

    // Focus on the first error element if there are errors
    if (isValid) {
        return true;
    }

    if (firstErrorElement) {
        firstErrorElement.focus();
    }
    return false;
}
