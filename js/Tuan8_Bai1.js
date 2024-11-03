function validateForm(){
    $(".error-message").hide();

    //Get input value
    const username = $("#username").val().trim();
    const password = $("#password").val();
    const confirmPassword = $("#confirm_password").val();
    const fullname = $("#fullname").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const birthDay = new Date($("select[name='year']").val(), $("select[name='month']").val() - 1, $("select[name='day']").val());
    const today = new Date();

    //Regular expression
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+={}|\\:;\"'<>,.?/~`-]*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}|\\:;\"'<>,.?/~`-]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(09|03|07|06|05|04)\d{8}$/;

}