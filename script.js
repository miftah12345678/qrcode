document.getElementById('uploadButton').addEventListener('click', function() {
    const input = document.getElementById('imageInput');
    const resultDiv = document.getElementById('result');
    const sendToTelegramButton = document.getElementById('sendToTelegram');

    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageUrl = e.target.result;
            resultDiv.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%; height: auto;">`;
            resultDiv.innerHTML += `<p>Image URL: <a href="${imageUrl}" target="_blank">${imageUrl}</a></p>`;
            sendToTelegramButton.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        resultDiv.innerHTML = 'Please select an image file.';
    }
});

document.getElementById('sendToTelegram').addEventListener('click', function() {
    const imageUrl = document.querySelector('#result a').href;
    const telgraPhUrl = `https://telgra.ph/api/sendMessage?text=Image URL: ${encodeURIComponent(imageUrl)}`;

    fetch(telgraPhUrl)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent to Telegram via Telgra.ph!');
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});