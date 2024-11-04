function validateForm() {
    $(".error-message").hide();

    const tourCode = $('#tourCode').val().trim();
    const trip = $('#trip').val().trim();
    const tourDate = $('#tourDate').val();
    const tourTime = $('#tourTime').val().trim();
    const tourPrice = $('#tourPrice').val().trim();
    const profilePicture = $('#profilePicture').val();

    // Biểu thức chính quy
    const tourCodeRegex = /^[A-Z]{3}-[A-Z]{3}-(0[1-9]|1[0-2])-\d{4}$/;
    const pictureRegex = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    let isValid = true;

    // Validate Tour Code
    if (tourCode === "" || !tourCodeRegex.test(tourCode)) {
        $('#tourCode-error').text('Mã Tour không đúng định dạng. Định dạng: XXX-XXX-mm-yyyy').show();
        isValid = false;
    } else {
        $('#tourCode-error').hide();
    }

    // Validate Tour Date (phải sau ngày hiện tại 30 ngày)
    const tourDateObj = new Date(tourDate);
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 30);

    if (tourDate === "" || isNaN(tourDateObj.getTime()) || tourDateObj <= futureDate) {
        $('#tourDate-error').text('Ngày khởi hành phải sau ngày hiện tại ít nhất 30 ngày.').show();
        isValid = false;
    } else {
        $('#tourDate-error').hide();
    }

    // Validate Tour Price
    if (tourPrice === "" || isNaN(tourPrice) || parseFloat(tourPrice) <= 0) {
        $('#tourPrice-error').text('Giá Tour phải là số và lớn hơn 0.').show();
        isValid = false;
    } else {
        $('#tourPrice-error').hide();
    }

    // Validate Profile Picture
    if (!pictureRegex.exec(profilePicture)) {
        $('#file-error').text('Ảnh đại diện phải là tệp .jpg, .png, hoặc .gif.').show();
        isValid = false;
    } else {
        $('#file-error').hide();
    }

    // Thêm thông tin vào bảng và đóng modal nếu hợp lệ
    if (isValid) {
        const newRow = `
            <tr>
                <td>${$('table tbody tr').length + 1}</td>
                <td>${tourCode}</td>
                <td>${trip}</td>
                <td>${tourDate}</td>
                <td>${tourTime}</td>
                <td>${tourPrice}</td>
            </tr>
        `;

        $('table tbody').append(newRow);
        $('#registrationModal').modal('hide'); // Đóng modal
        clearForm(); // Xóa dữ liệu trong form sau khi lưu
    }

    return isValid;
}

function clearForm() {
    $('#tourCode').val('');
    $('#trip').val('');
    $('#tourDate').val('');
    $('#tourTime').val('');
    $('#tourPrice').val('');
    $('#profilePicture').val('');
}
