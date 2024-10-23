const image = document.querySelector("img"),
      input = document.querySelector("input"),
      button = document.querySelector("button"),
      api = `https://api.qrserver.com/v1/`,
      api2 = `create-qr-code/?size=160x160&data=`;

button.addEventListener("click", () => {
    image.src = `${api}${api2}${input.value}`
});

// Render Hasilnya
  outputImg.src = canvas.toDataURL();
  outputImg.style.display = "block";
  downloadButton.style.display = "inline-block";
}

downloadButton.addEventListener("click", () => {
  const outputImg = document.getElementById("generatedImage");
  const link = document.createElement("a");
  link.href = outputImg.src;
  link.download = "follow_ig_@ughbmm.png";
  link.click();
});