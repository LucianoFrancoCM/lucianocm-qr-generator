const qrText = document.getElementById("qr-text");
const generateBtn = document.getElementById("generate-btn");
const qrCodeDiv = document.getElementById("qr-code");

generateBtn.addEventListener("click", () => {
    if (qrText.value.trim() === "") {
        alert("Por favor, introduce un texto o URL.");
        return;
    }

    // Eliminar QR existente si lo hay
    qrCodeDiv.innerHTML = "";

    // Crear una nueva imagen para el QR
    const qrImg = document.createElement("img");
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;
    qrImg.alt = "Código QR";
    qrCodeDiv.appendChild(qrImg);
});