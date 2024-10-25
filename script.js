document.getElementById('generateLinkQR').addEventListener('click', function() {
    const linkInput = document.getElementById('linkInput').value;
    const qr = new QRious({
        element: document.getElementById('linkQRCode'),
        value: linkInput,
        size: 200
    });
});

document.getElementById('generateImageQR').addEventListener('click', function() {
    const imageInput = document.getElementById('imageInput').files[0];
    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const qr = new QRious({
                element: document.getElementById('imageQRCode'),
                value: event.target.result,
                size: 200
            });
        };
        reader.readAsDataURL(imageInput);
    } else {
        alert('Silakan pilih gambar terlebih dahulu.');
    }
});