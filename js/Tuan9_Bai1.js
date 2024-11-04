function validateForm() {
    $(".error-message").hide();

 
    const fullName = $('#fullName').val().trim();
    const phoneNumber = $('#phoneNumber').val().trim();
    const birthDate = $('#birthDate').val();
    const address = $('#address').val().trim();
    const course = $('#course').find(":selected").text();
    const fee = $('#fee').val();
    const profilePicture = $('#profilePicture').val();

    // Biểu thức chính quy
    const fullnameRegex = /^[A-Z][a-z]*$/;
    const phoneRegex = /^\d{3}-\d{6}$/;
    const pictureRegex =  /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    let isValid = true;

    // Validate FullName
    const nameParts = fullName.split(" ");
    if (fullName === "") {
        $('#fullname-error').text('Họ và tên không được để trống!').show();
        isValid = false;
    } else if (nameParts.length < 2 || !nameParts.every(part => fullnameRegex.test(part))) {
        $('#fullname-error').text('Họ và tên phải từ 2 từ trở lên, mỗi ký tự đầu phải viết hoa.').show();
        isValid = false;
    } else {
        $('#fullname-error').hide();
    }

    // Validate Phone
    if (phoneNumber === "" || !phoneRegex.test(phoneNumber)) {
        $('#phone-error').text('Số điện thoại không được để trống và phải đúng định dạng XXX-YYYYYY.').show();
        isValid = false;
    } else {
        $('#phone-error').hide();
    }

    // Validate Birthday
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    if (birthDate === "" || isNaN(birthDateObj.getTime()) || age < 15 || age > 18) {
        $('#birthdate-error').text('Ngày sinh phải hợp lệ và tuổi phải từ 15 đến 18.').show();
        isValid = false;
    } else {
        $('#birthdate-error').hide();
    }

    if(!pictureRegex.exec(profilePicture)){
        $('#file-error').text('Ảnh đại diện phải là tệp .jpg, .png, hoặc .gif.').show();
        isValid = false;
    } else {
        $('#file-error').hide();
    }

    if(isValid){
        const newRow = `
            <tr>
                <td>${$('table tbody tr').length + 1}</td>
                <td>${fullName}</td>
                <td>Nam/Nữ</td>
                <td>${phoneNumber}</td>
                <td>${birthDate}</td>
                <td>${address}</td>
                <td>${course}</td>
                <td>${fee}</td>
            </tr>
        `;

        $('table tbody').append(newRow);
        $('#registrationModal').modal('hide');
        clearForm();
    }

    return isValid;
}

function clearForm() {
    $('#fullName').val('');
    $('#phoneNumber').val('');
    $('#birthDate').val('');
    $('#address').val('');
    $('#course').val('0');
    $('#fee').val('');
    $('#profilePicture').val('');
}

$(document).ready(function() {
        $('#course').on('change', function() {
            const selectedCourse = $(this).val();
            const courseFees = {
                '0': '2,000,000',
                '1': '5,000,000',
                '2': '8,000,000'
            };
            const feeValue = courseFees[selectedCourse] || '';
            $('#fee').val(feeValue);
        });
});
