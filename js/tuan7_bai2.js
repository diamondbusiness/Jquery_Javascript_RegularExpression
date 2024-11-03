window.onload = function() {
    const muaVaoField = document.querySelector('.mVao1');
    const banRaField = document.querySelector('.banRa input');
    const updateButton = document.querySelector('.button-group button:first-child');
    const vangRadio = document.getElementById('gold');
    const usdRadio = document.getElementById('usd');
    const muaVaoVangCell = document.querySelector('.vang-mua');
    const banRaVangCell = document.querySelector('.vang-ban');
    const muaVaoUSDCell = document.querySelector('.usd-mua');
    const banRaUSDCell = document.querySelector('.usd-ban');
    const stateButton = document.querySelector('.button-group button:last-child');
    const carSelect = document.getElementById('cars');
    const displayArea = document.getElementById('carDisplay');
    const priceArea = document.getElementById('carPrice'); 

    if (muaVaoField) {
        muaVaoField.focus();
    }

    stateButton.disabled = true;
    muaVaoField.addEventListener('blur', function() {
        if (muaVaoField.value.trim() !== '' && !isNaN(muaVaoField.value)) {
            stateButton.disabled = false; 
        } else {
            stateButton.disabled = true;
        }
    });

    carSelect.addEventListener('change', function() {
        const selectedValue = carSelect.value;

        const [imagePath, price] = selectedValue.split(';');

        if (displayArea) {
            displayArea.innerHTML = `<img src="${imagePath}" width="75%" height="200px" alt="Car Image" style="border: 1px solid #ccc;">`;
        }
        if (priceArea) {
            priceArea.textContent = `Giá: ${price} USD`;
        }
    });

    updateButton.addEventListener('click', function() {
        if (vangRadio.checked) {
            if (muaVaoVangCell) muaVaoVangCell.innerText = muaVaoField.value;
            if (banRaVangCell) banRaVangCell.innerText = banRaField.value;
        } else if (usdRadio.checked) {
            if (muaVaoUSDCell) muaVaoUSDCell.innerText = muaVaoField.value;
            if (banRaUSDCell) banRaUSDCell.innerText = banRaField.value;
        }
    });
};
