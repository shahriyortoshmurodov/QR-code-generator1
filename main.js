const qrCode = document.querySelector('.qrCode');
const btn = document.querySelector('.btn');
const qrCodeName = document.querySelector('.qrCodeName');
const colorInput = document.querySelector('#colorInput');

let qrcode; // Declare QR code variable

btn.addEventListener('click', () => {
    if (qrCodeName.value === '') {
        alert('Please enter a value.');
    } else {
    
            qrCode.innerHTML = ''; 
        
        qrcode = new QRCode(qrCode, {
            text: qrCodeName.value,
            width: 300,
            height: 300,
            colorDark: colorInput.value, // Use the selected color
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
    }
});

// Update QR code color dynamically when the color picker changes
colorInput.addEventListener('input', () => {
    if (qrcode && qrCodeName.value !== '') {
        qrCode.innerHTML = ''; // Clear the old QR code
        qrcode = new QRCode(qrCode, {
            text: qrCodeName.value,
            width: 300,
            height: 300,
            colorDark: colorInput.value, // Use the updated color
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
    }
});
