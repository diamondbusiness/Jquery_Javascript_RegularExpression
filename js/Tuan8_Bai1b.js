function validateForm() {
    $(".error-message").hide(); 

    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#email').val().trim();
    const confirmEmail = $('#confirm-email').val().trim();
    const password = $('#password').val();
    const birthDate = $('#birthDate').val().trim();

    // Biểu thức chính quy
    const fullNameRegex = /^[A-Z]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

    let isValid = true;

    if (!fullNameRegex.test(firstName) || !fullNameRegex.test(lastName)) {
        $('#fullname-error').show(); 
        isValid = false;
    } else {
        $('#fullname-error').hide();
    }

    // Kiểm tra Email
    if (!emailRegex.test(email)) {
        $('#email-error').show();
        isValid = false;
    } else {
        $('#email-error').hide();
    }

    // Kiểm tra email nhập lại
    if (email !== confirmEmail) {
        $('#confirm-error').show();
        isValid = false;
    } else {
        $('#confirm-error').hide();
    }

    // Kiểm tra mật khẩu
    if (!passwordRegex.test(password)) {
        $('#password-error').show(); // Sửa lỗi: chính tả
        isValid = false;
    } else {
        $('#password-error').hide();
    }

    // Kiểm tra năm sinh
    if (birthDate && parseInt(birthDate) >= 2002) { 
        $('#birthday-error').show();
        isValid = false;
    } else {
        $('#birthday-error').hide(); 
    }

    if (isValid) {
        alert('Bạn đã đăng ký thành công');
        return true; 
    }
    return false;
}
